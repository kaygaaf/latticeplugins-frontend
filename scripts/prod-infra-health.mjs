#!/usr/bin/env node
import { execFileSync } from 'node:child_process';

const DOCKER_CONTEXT = process.env.DOCKER_CONTEXT || 'vps';
const DOMAIN = process.env.LATTICE_DOMAIN || 'latticeplugins.com';
const EXPECTED_PRODUCTS = 7;
const EXPECTED_PRODUCT_NAMES = [
  'Lattice Commerce Suite',
  'Lattice Core',
  'Lattice CRM',
  'Lattice Migrate',
  'Lattice Stripe Payments',
  'Lattice Subscribify',
  'Lattice SEO',
];

function run(args, options = {}) {
  return execFileSync(args[0], args.slice(1), {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    timeout: options.timeout || 30000,
  }).trim();
}

function docker(args, options = {}) {
  return run(['docker', '--context', DOCKER_CONTEXT, ...args], options);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function parseJsonLines(output) {
  return output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function listContainers() {
  return parseJsonLines(docker(['ps', '-a', '--format', '{{json .}}']));
}

function inspectContainer(name) {
  return JSON.parse(docker(['inspect', name], { timeout: 60000 }))[0];
}

function inspectByName(containers) {
  const inspected = new Map();
  for (const container of containers) {
    inspected.set(container.Names, inspectContainer(container.Names));
  }
  return inspected;
}

function labelsOf(container) {
  return container?.Config?.Labels || {};
}

function hasDomainRule(labels) {
  return Object.values(labels).some((value) => typeof value === 'string' && value.includes(`Host(\`${DOMAIN}\`)`));
}

function hasLabelValue(labels, needle) {
  return Object.values(labels).some((value) => typeof value === 'string' && value.includes(needle));
}

function findLatticeFrontend(inspected) {
  return [...inspected.values()].find((container) => {
    const labels = labelsOf(container);
    return container.Name === '/lattice-frontend'
      || (hasDomainRule(labels) && hasLabelValue(labels, 'lattice-frontend'))
      || (hasDomainRule(labels) && hasLabelValue(labels, 'loadbalancer.server.port') && container.Config.Image.includes('lattice-frontend'));
  });
}

function findLatticeWordPress(inspected) {
  return [...inspected.values()].find((container) => {
    const labels = labelsOf(container);
    return container.Config.Image.startsWith('wordpress:')
      && hasDomainRule(labels)
      && hasLabelValue(labels, 'lattice-wp');
  });
}

function findLatticeDatabase(inspected, wpContainer) {
  const wpProject = labelsOf(wpContainer)['com.docker.compose.project'];
  return [...inspected.values()].find((container) => {
    const labels = labelsOf(container);
    return labels['com.docker.compose.project'] === wpProject
      && labels['com.docker.compose.service'] === 'db'
      && /mariadb/i.test(container.Config.Image);
  });
}

function findProxy(inspected) {
  return [...inspected.values()].find((container) => container.Name === '/coolify-proxy')
    || [...inspected.values()].find((container) => /traefik/i.test(container.Config.Image));
}

function findStaleLegacyContainers(inspected) {
  const legacyNames = new Set(['/lattice-wp', '/lattice-db', '/lattice-next']);
  return [...inspected.values()]
    .filter((container) => legacyNames.has(container.Name))
    .map((container) => ({
      name: container.Name.slice(1),
      image: container.Config.Image,
      status: container.State.Status,
    }));
}

function networkNames(container) {
  return Object.keys(container.NetworkSettings.Networks || {});
}

function assertRunning(container, role) {
  assert(container, `${role} container was not found`);
  assert(container.State.Status === 'running', `${role} container ${container.Name} is ${container.State.Status}`);
}

function checkFrontend(frontend) {
  assertRunning(frontend, 'Next.js frontend');
  const labels = labelsOf(frontend);
  assert(frontend.Config.Image === 'lattice-frontend:latest', `Frontend image is ${frontend.Config.Image}; expected lattice-frontend:latest`);
  assert(hasDomainRule(labels), 'Frontend is missing the latticeplugins.com Traefik Host rule');
  assert(hasLabelValue(labels, '3000'), 'Frontend Traefik service is not targeting port 3000');
  return { name: frontend.Name.slice(1), image: frontend.Config.Image, networks: networkNames(frontend) };
}

function checkWordPress(wordpress) {
  assertRunning(wordpress, 'WordPress backend');
  const labels = labelsOf(wordpress);
  const requiredRoutes = [
    'lattice-wpjson',
    'lattice-wp-admin',
    'lattice-wp-content',
    'lattice-wp-includes',
    'lattice-wp-cron',
    'lattice-wc',
  ];
  for (const route of requiredRoutes) {
    assert(
      Object.keys(labels).some((key) => key.includes(`routers.${route}.rule`)),
      `WordPress container is missing Traefik route ${route}`,
    );
  }

  const php = `require "/var/www/html/wp-load.php";
$names = [];
if (function_exists("wc_get_products")) {
  foreach (wc_get_products(["status"=>"publish","limit"=>-1]) as $p) { $names[] = $p->get_name(); }
}
echo json_encode([
  "home" => get_option("home"),
  "siteurl" => get_option("siteurl"),
  "woocommerceLoaded" => function_exists("wc_get_products"),
  "productCount" => count($names),
  "productNames" => $names,
  "activePlugins" => get_option("active_plugins", []),
]);`;
  const wpState = JSON.parse(docker(['exec', wordpress.Name.slice(1), 'php', '-r', php], { timeout: 60000 }));
  assert(wpState.home === `https://${DOMAIN}`, `WordPress home is ${wpState.home}`);
  assert(wpState.siteurl === `https://${DOMAIN}`, `WordPress siteurl is ${wpState.siteurl}`);
  assert(wpState.woocommerceLoaded, 'WooCommerce is not loaded in WordPress');
  assert(wpState.productCount === EXPECTED_PRODUCTS, `WooCommerce has ${wpState.productCount} products; expected ${EXPECTED_PRODUCTS}`);

  const liveNames = [...wpState.productNames].sort();
  const expectedNames = [...EXPECTED_PRODUCT_NAMES].sort();
  assert(JSON.stringify(liveNames) === JSON.stringify(expectedNames), `WooCommerce products are ${liveNames.join(', ')}; expected ${expectedNames.join(', ')}`);

  return {
    name: wordpress.Name.slice(1),
    image: wordpress.Config.Image,
    networks: networkNames(wordpress),
    home: wpState.home,
    productCount: wpState.productCount,
    activePluginCount: wpState.activePlugins.length,
  };
}

function checkDatabase(database) {
  assertRunning(database, 'MariaDB database');
  const health = database.State.Health?.Status || 'none';
  assert(health === 'healthy', `Database health is ${health}; expected healthy`);
  return { name: database.Name.slice(1), image: database.Config.Image, health, networks: networkNames(database) };
}

function checkProxy(proxy, wordpress) {
  assertRunning(proxy, 'Traefik/Coolify proxy');
  const health = proxy.State.Health?.Status || 'none';
  assert(health === 'healthy', `Proxy health is ${health}; expected healthy`);
  const proxyNetworks = new Set(networkNames(proxy));
  const wpNetworks = networkNames(wordpress);
  const shared = wpNetworks.filter((network) => proxyNetworks.has(network));
  assert(shared.length > 0, `Proxy does not share a Docker network with WordPress; wp=${wpNetworks.join(',')} proxy=${[...proxyNetworks].join(',')}`);
  return { name: proxy.Name.slice(1), image: proxy.Config.Image, health, sharedWordPressNetworks: shared };
}

function main() {
  const contexts = docker(['context', 'ls', '--format', '{{.Name}}']);
  assert(contexts.split('\n').includes(DOCKER_CONTEXT), `Docker context ${DOCKER_CONTEXT} was not found`);

  const containers = listContainers();
  const inspected = inspectByName(containers);
  const frontend = findLatticeFrontend(inspected);
  const wordpress = findLatticeWordPress(inspected);
  const database = findLatticeDatabase(inspected, wordpress);
  const proxy = findProxy(inspected);
  const staleLegacyContainers = findStaleLegacyContainers(inspected);
  assert(
    staleLegacyContainers.length === 0,
    `Stale legacy Lattice containers found: ${staleLegacyContainers.map((container) => `${container.name}:${container.status}`).join(', ')}`,
  );

  const result = {
    ok: true,
    dockerContext: DOCKER_CONTEXT,
    domain: DOMAIN,
    checks: {
      staleLegacyContainers,
      frontend: checkFrontend(frontend),
      wordpress: checkWordPress(wordpress),
      database: checkDatabase(database),
      proxy: checkProxy(proxy, wordpress),
    },
  };

  console.log(JSON.stringify(result, null, 2));
}

try {
  main();
} catch (error) {
  console.error(JSON.stringify({ ok: false, dockerContext: DOCKER_CONTEXT, domain: DOMAIN, error: error.message }, null, 2));
  process.exit(1);
}
