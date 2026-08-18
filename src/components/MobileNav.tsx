"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/product/lattice-commerce-suite", label: "Commerce Suite" },
  { href: "/product/lattice-seo", label: "Lattice SEO" },
  { href: "/services/wordpress-plugin-upgrade-risk-audit", label: "Services" },
  { href: "/blog", label: "Blog" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="border border-slate-200 rounded-lg px-3 py-2 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition"
      >
        ☰
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white border-b shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-gray-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
