import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Lattice Plugins</h3>
            <p className="text-sm leading-relaxed">
              Premium WordPress plugins for e-commerce, CRM, SEO, and more. Built to scale your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/product/lattice-commerce-suite" className="hover:text-white transition">
                  Lattice Commerce Suite
                </Link>
              </li>
              <li>
                <Link href="/product/lattice-seo" className="hover:text-white transition">
                  Lattice SEO
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  Compare all plugins
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@latticeplugins.com"
                  className="hover:text-white transition"
                >
                  support@latticeplugins.com
                </a>
              </li>
              <li>
                <a
                  href="https://latticeplugins.com/wp/my-account/"
                  className="hover:text-white transition"
                >
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Lattice Plugins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
