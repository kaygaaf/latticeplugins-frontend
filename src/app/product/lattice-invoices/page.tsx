import type { Metadata } from "next";
import { redirect } from "next/navigation";

const TARGET = "/woocommerce-eu-vat-invoices";

export const metadata: Metadata = {
  title: "Lattice Invoices — WooCommerce EU VAT invoices",
  description:
    "Lattice Invoices early access for WooCommerce EU VAT/BTW invoice workflows, PDF delivery, credit notes, and customer invoice downloads.",
  alternates: {
    canonical: "https://latticeplugins.com/woocommerce-eu-vat-invoices",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LatticeInvoicesProductAlias() {
  redirect(TARGET);
}
