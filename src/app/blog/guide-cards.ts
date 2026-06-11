export type BlogGuideCard = {
  href: `/blog/${string}`;
  eyebrow: string;
  title: string;
  description: string;
  theme:
    | "blue"
    | "green"
    | "indigo"
    | "purple"
    | "cyan"
    | "sky"
    | "teal"
    | "amber"
    | "emerald"
    | "slate";
};

export const guideCardThemeClasses: Record<BlogGuideCard["theme"], string> = {
  blue: "bg-blue-50 border-blue-100 text-blue-700",
  green: "bg-green-50 border-green-100 text-green-700",
  indigo: "bg-indigo-50 border-indigo-100 text-indigo-700",
  purple: "bg-purple-50 border-purple-100 text-purple-700",
  cyan: "bg-cyan-50 border-cyan-100 text-cyan-700",
  sky: "bg-sky-50 border-sky-100 text-sky-700",
  teal: "bg-teal-50 border-teal-100 text-teal-700",
  amber: "bg-amber-50 border-amber-100 text-amber-700",
  emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
  slate: "bg-slate-50 border-slate-200 text-slate-700",
};

export const blogGuideCards: BlogGuideCard[] = [
  {
    href: "/blog/woocommerce-vat-invoice-plugin-eu",
    eyebrow: "WooCommerce invoice buyer guide",
    title: "Best WooCommerce EU VAT invoice plugin: what to check before buying",
    description:
      "A buyer-intent checklist for EU stores that need VAT/BTW checkout fields, invoice PDFs, credit notes, customer downloads, and a clear path to Lattice Invoices early access.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-credit-notes-refunds",
    eyebrow: "Refund credit-note guide",
    title: "WooCommerce credit notes for refunds: EU VAT workflow guide",
    description:
      "A conversion-focused guide for stores that need refund-linked credit notes, VAT corrections, customer downloads, and Lattice Invoices early-access qualification.",
    theme: "green",
  },
  {
    href: "/blog/woocommerce-vat-number-checkout-field",
    eyebrow: "VAT field checkout guide",
    title: "WooCommerce VAT number checkout field for EU B2B invoices",
    description:
      "A high-intent guide for stores that need VAT/BTW fields before payment, invoice-ready order metadata, PDF delivery, and Lattice Invoices early-access qualification.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-reverse-charge-invoices",
    eyebrow: "Reverse-charge invoice guide",
    title: "WooCommerce reverse-charge invoices for EU VAT",
    description:
      "A buyer-intent guide for EU B2B stores that need reverse-charge wording, VAT/BTW metadata, invoice PDFs, customer downloads, and credit notes.",
    theme: "purple",
  },
  {
    href: "/blog/woocommerce-invoice-numbering",
    eyebrow: "Invoice numbering guide",
    title: "WooCommerce invoice numbering for EU VAT stores",
    description:
      "A high-intent guide for stores that need sequential invoice numbers, VAT/BTW metadata, refund credit notes, customer downloads, and a cleaner accounting audit trail.",
    theme: "cyan",
  },
  {
    href: "/blog/woocommerce-pdf-invoice-email-attachments",
    eyebrow: "PDF email attachment guide",
    title: "WooCommerce PDF invoice email attachments for EU VAT stores",
    description:
      "A buyer-intent guide for stores that need invoice PDFs attached to WooCommerce emails, secure My Account downloads, VAT/BTW metadata, and refund credit notes.",
    theme: "sky",
  },
  {
    href: "/blog/woocommerce-proforma-invoice",
    eyebrow: "Proforma invoice guide",
    title: "WooCommerce proforma invoice workflow for EU B2B stores",
    description:
      "A buyer-intent guide for stores that need proforma payment requests before purchase, final VAT invoices after payment, clean numbering, and credit-note handling.",
    theme: "teal",
  },
  {
    href: "/blog/woocommerce-bank-transfer-invoice",
    eyebrow: "Bank transfer invoice guide",
    title: "WooCommerce bank transfer invoice workflow for EU B2B stores",
    description:
      "A buyer-intent guide for stores that accept bank transfer payments and need VAT/BTW fields, proforma payment requests, final invoice PDFs, and credit-note handling.",
    theme: "amber",
  },
  {
    href: "/blog/woocommerce-invoice-payment-reminders",
    eyebrow: "Payment reminder workflow",
    title: "WooCommerce invoice payment reminders for EU VAT stores",
    description:
      "A buyer-intent guide for stores that need unpaid invoice follow-ups, proforma reminders, bank-transfer payment requests, and final VAT invoice PDFs.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-customer-invoice-downloads",
    eyebrow: "Customer invoice downloads",
    title: "WooCommerce customer invoice downloads for EU VAT stores",
    description:
      "A buyer-intent guide for stores that need protected My Account invoice PDFs, VAT/BTW metadata, email attachments, proforma handling, and refund credit-note downloads.",
    theme: "cyan",
  },
  {
    href: "/blog/woocommerce-invoice-due-dates",
    eyebrow: "Invoice due-date guide",
    title: "WooCommerce invoice due dates and payment terms for EU B2B stores",
    description:
      "A buyer-intent guide for stores that need Net 14/30 payment terms, bank-transfer deadlines, proforma timing, overdue reminders, and final VAT invoice control.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-partial-payment-invoices",
    eyebrow: "Partial payment invoices",
    title: "WooCommerce partial payment invoices for deposits and split payments",
    description:
      "A buyer-intent guide for stores that sell with deposits, milestones, or balance payments and need proformas, final VAT invoices, credit notes, and customer PDF downloads.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-invoice-pdf-template",
    eyebrow: "Invoice PDF template guide",
    title: "WooCommerce invoice PDF template checklist for EU VAT stores",
    description:
      "A buyer-intent guide for stores choosing invoice PDF templates with VAT/BTW fields, reverse-charge wording, bank-transfer details, due dates, credit notes, and customer downloads.",
    theme: "slate",
  },
  {
    href: "/blog/woocommerce-vat-exempt-invoices",
    eyebrow: "VAT exempt invoice guide",
    title: "WooCommerce VAT exempt invoices for EU B2B and reverse charge",
    description:
      "A buyer-intent guide for stores that need VAT exempt PDF invoices, reverse-charge wording, stored exemption reasons, VAT checkout fields, and credit-note handling.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-peppol-e-invoices",
    eyebrow: "Peppol e-invoice guide",
    title: "WooCommerce Peppol e-invoices and EU B2B invoice readiness",
    description:
      "A buyer-intent guide for stores preparing Peppol/e-invoicing workflows, buyer references, VAT metadata, PDF invoices, credit notes, and accounting handoff.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-invoice-export-accounting",
    eyebrow: "Accounting export guide",
    title: "WooCommerce invoice export for accounting and EU VAT handoff",
    description:
      "A buyer-intent guide for stores that need cleaner invoice exports for accountants, VAT evidence, credit notes, PDF invoice links, and B2B finance workflows.",
    theme: "slate",
  },
  {
    href: "/blog/woocommerce-invoice-approval-workflow",
    eyebrow: "B2B approval workflow",
    title: "WooCommerce invoice approval workflow for B2B stores",
    description:
      "A buyer-intent guide for stores that need PO references, proforma PDFs, bank-transfer payment terms, VAT evidence, accounts-payable routing, and accountant-ready handoff.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-recurring-invoices-subscriptions",
    eyebrow: "Recurring subscription invoices",
    title: "WooCommerce recurring invoices for subscriptions and EU VAT",
    description:
      "A buyer-intent guide for stores that need renewal invoice PDFs, VAT/BTW evidence, failed-payment handling, credit notes, customer downloads, and accounting export.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-multi-currency-invoices",
    eyebrow: "Multi-currency invoices",
    title: "WooCommerce multi-currency invoices for EU VAT stores",
    description:
      "A buyer-intent guide for stores that need exchange-rate evidence, base-currency totals, VAT metadata, credit notes, invoice PDFs, and accountant-ready exports.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-invoice-audit-trail",
    eyebrow: "Invoice audit trail",
    title: "WooCommerce invoice audit trail for EU VAT stores",
    description:
      "A buyer-intent guide for stores that need invoice evidence, PDF history, VAT metadata, credit notes, correction logs, and accountant-ready exports.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-invoice-reconciliation",
    eyebrow: "Invoice reconciliation guide",
    title: "WooCommerce invoice reconciliation for payments, VAT, refunds, and credit notes",
    description:
      "A buyer-intent guide for stores that need to match paid/unpaid invoices, bank transfers, VAT totals, refund credit notes, customer PDFs, and accountant exports.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-invoice-compliance-checklist",
    eyebrow: "Invoice compliance checklist",
    title: "WooCommerce invoice compliance checklist for EU VAT stores",
    description:
      "A practical buyer checklist for invoice numbers, VAT IDs, reverse charge, credit notes, PDF delivery, audit trail, customer downloads, and accountant export.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-invoice-plugin-comparison",
    eyebrow: "Invoice plugin comparison",
    title: "WooCommerce invoice plugin comparison for EU VAT stores",
    description:
      "A buyer-focused comparison for PDF invoice plugins, VAT add-ons, accounting connectors, and Lattice Invoices early access.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-b2b-invoice-plugin",
    eyebrow: "B2B invoice plugin",
    title: "WooCommerce B2B invoice plugin for EU VAT stores",
    description:
      "A buyer-intent checklist for B2B WooCommerce stores that need VAT IDs, reverse charge, bank transfer, credit notes, invoice numbers, and accountant exports.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-invoice-automation",
    eyebrow: "Invoice automation guide",
    title: "WooCommerce invoice automation for EU VAT stores",
    description:
      "A buyer-intent automation checklist for invoice timing, BACS proformas, credit notes, VAT evidence, customer downloads, reminders, and accountant exports.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-invoice-data-retention",
    eyebrow: "Invoice data retention",
    title: "WooCommerce invoice data retention for EU VAT stores",
    description:
      "A buyer-intent retention checklist for issued invoice PDFs, VAT evidence, credit notes, customer downloads, audit trail, and accountant-ready exports.",
    theme: "cyan",
  },
  {
    href: "/blog/woocommerce-invoice-plugin-migration",
    eyebrow: "Invoice plugin migration",
    title: "WooCommerce invoice plugin migration checklist for EU VAT stores",
    description:
      "A buyer-intent migration checklist for switching invoice plugins while preserving invoice numbers, retained PDFs, VAT evidence, credit notes, and accounting exports.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-invoice-correction-workflow",
    eyebrow: "Invoice correction workflow",
    title: "WooCommerce invoice correction workflow for EU VAT stores",
    description:
      "A buyer-intent correction workflow for credit notes, replacement invoices, VAT evidence, retained PDFs, customer delivery, and accountant exports.",
    theme: "cyan",
  },
  {
    href: "/blog/woocommerce-invoice-email-deliverability",
    eyebrow: "Invoice email deliverability",
    title: "WooCommerce invoice email deliverability checklist for EU VAT stores",
    description:
      "A buyer-intent checklist for PDF invoice attachments, BACS/proforma delivery, failed-send evidence, resend controls, and customer download fallbacks.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-invoice-late-fees",
    eyebrow: "Invoice late-fee workflow",
    title: "WooCommerce invoice late fees and overdue payment terms",
    description:
      "A buyer-intent guide for B2B stores that need due dates, overdue reminders, late-fee evidence, retained VAT PDFs, customer downloads, and accounting exports.",
    theme: "amber",
  },
  {
    href: "/blog/woocommerce-invoice-reminder-email-template",
    eyebrow: "Reminder email templates",
    title: "WooCommerce invoice reminder email template for B2B stores",
    description:
      "A buyer-intent template guide for stores that need BACS/proforma reminder emails, invoice PDF links, due-date evidence, resend logs, and accounting handoff.",
    theme: "cyan",
  },
];
