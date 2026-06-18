export const dynamic = 'force-dynamic';

const WORDPRESS_ORIGIN = process.env.WORDPRESS_INTERNAL_URL || 'http://lattice-wp';
const SITE_URL = 'https://latticeplugins.com';

const FRONTEND_URLS = [
  '/',
  '/shop',
  '/product/lattice-commerce-suite',
  '/product/lattice-core',
  '/product/lattice-crm',
  '/product/lattice-migrate',
  '/product/lattice-stripe-payments',
  '/product/lattice-subscribify',
  '/product/lattice-seo',
  '/woocommerce-eu-vat-invoices',
  '/docs/woocommerce-eu-vat-invoice-setup',
  '/blog',
  '/blog/woocommerce-btw-factuur-plugin-nederland',
  '/blog/woocommerce-vat-invoice-plugin-eu',
  '/blog/woocommerce-credit-notes-refunds',
  '/blog/woocommerce-vat-number-checkout-field',
  '/blog/woocommerce-reverse-charge-invoices',
  '/blog/woocommerce-invoice-numbering',
  '/blog/woocommerce-pdf-invoice-email-attachments',
  '/blog/woocommerce-proforma-invoice',
  '/blog/woocommerce-bank-transfer-invoice',
  '/blog/woocommerce-invoice-payment-reminders',
  '/blog/woocommerce-customer-invoice-downloads',
  '/blog/woocommerce-invoice-due-dates',
  '/blog/woocommerce-partial-payment-invoices',
  '/blog/woocommerce-invoice-pdf-template',
  '/blog/woocommerce-vat-exempt-invoices',
  '/blog/woocommerce-peppol-e-invoices',
  '/blog/woocommerce-invoice-export-accounting',
  '/blog/woocommerce-invoice-approval-workflow',
  '/blog/woocommerce-recurring-invoices-subscriptions',
  '/blog/woocommerce-multi-currency-invoices',
  '/blog/woocommerce-invoice-audit-trail',
  '/blog/woocommerce-invoice-reconciliation',
  '/blog/woocommerce-invoice-compliance-checklist',
  '/blog/woocommerce-invoice-plugin-comparison',
  '/blog/woocommerce-invoice-plugin-for-agencies',
  '/blog/woocommerce-b2b-invoice-plugin',
  '/blog/woocommerce-invoice-automation',
  '/blog/woocommerce-invoice-data-retention',
  '/blog/woocommerce-invoice-plugin-migration',
  '/blog/woocommerce-invoice-correction-workflow',
  '/blog/woocommerce-invoice-email-deliverability',
  '/blog/woocommerce-invoice-late-fees',
  '/blog/woocommerce-invoice-reminder-email-template',
  '/blog/woocommerce-invoice-write-off-workflow',
  '/blog/woocommerce-purchase-order-invoices',
  '/blog/woocommerce-sepa-direct-debit-invoices',
  '/blog/woocommerce-stripe-invoice-workflow',
  '/blog/woocommerce-paypal-invoice-workflow',
  '/blog/woocommerce-mollie-invoice-workflow',
  '/blog/woocommerce-klarna-invoice-workflow',
  '/blog/woocommerce-net-terms-invoice-plugin',
  '/blog/woocommerce-qr-code-invoice-payment',
  '/blog/woocommerce-invoice-after-payment',
  '/blog/woocommerce-invoice-payment-link',
  '/blog/woocommerce-receipt-vs-invoice',
  '/blog/woocommerce-vies-vat-validation',
  '/blog/woocommerce-oss-vat-invoices',
  '/blog/woocommerce-digital-product-vat-invoices',
  '/blog/woocommerce-invoice-custom-fields',
  '/blog/woocommerce-invoice-plugin-for-accountants',
  '/blog/woocommerce-invoice-plugin-setup-checklist',
];

function normalizeUrl(path: string) {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path}`;
}

function frontendUrlEntries() {
  const today = new Date().toISOString().slice(0, 10);

  return FRONTEND_URLS.map((path) => `
<url>
  <loc>${normalizeUrl(path)}</loc>
  <lastmod>${today}</lastmod>
  <changefreq>${path.includes('/blog/') ? 'monthly' : 'weekly'}</changefreq>
  <priority>${path === '/woocommerce-eu-vat-invoices' ? '0.9' : path.includes('/blog/') ? '0.7' : '0.8'}</priority>
</url>`).join('');
}

function appendFrontendUrls(xml: string) {
  const entries = frontendUrlEntries();

  if (xml.includes('</urlset>')) {
    return xml.replace('</urlset>', `${entries}\n</urlset>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

export async function GET() {
  const sitemapUrl = new URL('/index.php', WORDPRESS_ORIGIN);
  sitemapUrl.searchParams.set('lattice_seo_sitemap', '1');

  try {
    const upstream = await fetch(sitemapUrl, {
      cache: 'no-store',
      headers: {
        Host: 'latticeplugins.com',
        Accept: 'application/xml,text/xml,*/*',
      },
    });

    const body = await upstream.text();

    if (!upstream.ok || !body.includes('<urlset')) {
      return new Response(appendFrontendUrls(''), {
        status: 200,
        headers: {
          'Content-Type': 'application/xml; charset=UTF-8',
          'Cache-Control': 'public, max-age=300, s-maxage=300',
        },
      });
    }

    return new Response(appendFrontendUrls(body), {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Cache-Control': 'public, max-age=300, s-maxage=300',
      },
    });
  } catch (error) {
    return new Response(appendFrontendUrls(''), {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Cache-Control': 'public, max-age=300, s-maxage=300',
      },
    });
  }
}
