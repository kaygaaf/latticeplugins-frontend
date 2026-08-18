import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lattice Plugins
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
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
              href="/product/lattice-commerce-suite"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Commerce Suite
            </Link>
            <Link
              href="/product/lattice-seo"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Lattice SEO
            </Link>
            <Link
              href="/services/wordpress-plugin-upgrade-risk-audit"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Blog
            </Link>
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
