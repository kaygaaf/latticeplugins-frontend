import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="container-x py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-950">
                L
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                Lattice Plugins
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6">
              Premium WordPress plugins for WooCommerce stores, publishers, and agencies. One-time pricing, lifetime updates, built in Europe.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Catalog</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/shop" className="transition hover:text-white">Shop all plugins</Link></li>
              <li><Link href="/try" className="transition hover:text-white">Live demo</Link></li>
              <li><Link href="/compare" className="transition hover:text-white">Compare plugins</Link></li>
              <li><Link href="/product/lattice-commerce-suite" className="transition hover:text-white">Lattice Commerce Suite</Link></li>
              <li><Link href="/product/lattice-seo" className="transition hover:text-white">Lattice SEO</Link></li>
              <li><Link href="/services/wordpress-plugin-upgrade-risk-audit" className="transition hover:text-white">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Support</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/blog" className="transition hover:text-white">Guides & articles</Link></li>
              <li><a href="mailto:support@latticeplugins.com" className="break-all transition hover:text-white">support@latticeplugins.com</a></li>
              <li><a href="https://latticeplugins.com/wp/my-account/" className="transition hover:text-white">My Account</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Lattice Plugins. All rights reserved.</p>
          <p className="text-slate-500">WordPress + WooCommerce tooling, without subscription pricing.</p>
        </div>
      </div>
    </footer>
  );
}
