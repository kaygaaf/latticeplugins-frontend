import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lattice Plugins
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Shop
            </Link>
            <Link
              href="/woocommerce-eu-vat-invoices"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Invoices
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
