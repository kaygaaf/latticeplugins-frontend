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
    href: "/blog/woocommerce-btw-factuur-plugin-nederland",
    eyebrow: "Nederlandse BTW facturen",
    title: "WooCommerce BTW factuur plugin Nederland: checklist voor webshops",
    description:
      "Een Nederlandse buyer-intent gids voor WooCommerce webshops die BTW-nummer velden, factuurnummers, PDF facturen, creditnota's en boekhouder-export nodig hebben.",
    theme: "amber",
  },
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
    href: "/blog/woocommerce-invoice-plugin-for-agencies",
    eyebrow: "Agency invoice workflow",
    title: "WooCommerce invoice plugin for agencies managing EU stores",
    description:
      "A buyer-intent agency checklist for repeatable WooCommerce EU VAT invoice workflows, client handoff, credit notes, customer downloads, and accountant exports.",
    theme: "purple",
  },
  {
    href: "/blog/woocommerce-invoice-plugin-cost",
    eyebrow: "Invoice plugin pricing",
    title: "WooCommerce invoice plugin cost: what EU VAT stores should budget",
    description:
      "A buyer-intent pricing guide for plugin license cost, hidden setup time, VAT fields, credit notes, accountant export, and Lattice Invoices early access.",
    theme: "emerald",
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
  {
    href: "/blog/woocommerce-invoice-write-off-workflow",
    eyebrow: "Invoice write-off workflow",
    title: "WooCommerce invoice write-off workflow for unpaid B2B invoices",
    description:
      "A buyer-intent guide for stores that need bad-debt evidence, retained VAT invoice PDFs, reminder history, credit-note decisions, and accountant-ready exports.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-purchase-order-invoices",
    eyebrow: "Purchase order invoice workflow",
    title: "WooCommerce purchase order invoices for B2B EU VAT stores",
    description:
      "A buyer-intent guide for stores that need PO numbers on invoice PDFs, proforma approvals, VAT metadata, correction evidence, and accountant-ready exports.",
    theme: "cyan",
  },
  {
    href: "/blog/woocommerce-sepa-direct-debit-invoices",
    eyebrow: "SEPA invoice workflow",
    title: "WooCommerce SEPA direct debit invoices for EU VAT stores",
    description:
      "A buyer-intent guide for stores that need mandate references, failed-debit evidence, VAT invoice PDFs, credit notes, reminders, and accountant-ready exports.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-stripe-invoice-workflow",
    eyebrow: "Stripe invoice workflow",
    title: "WooCommerce Stripe invoice workflow for EU VAT stores",
    description:
      "A buyer-intent guide for Stripe-powered stores that need VAT/BTW fields, paid invoice PDFs, refund credit notes, customer downloads, and accountant-ready exports.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-paypal-invoice-workflow",
    eyebrow: "PayPal invoice workflow",
    title: "WooCommerce PayPal invoice workflow for EU VAT stores",
    description:
      "A buyer-intent guide for PayPal-powered stores that need VAT/BTW fields, paid invoice PDFs, refund credit notes, customer downloads, and accountant-ready exports.",
    theme: "slate",
  },
  {
    href: "/blog/woocommerce-mollie-invoice-workflow",
    eyebrow: "Mollie invoice workflow",
    title: "WooCommerce Mollie invoice workflow for EU VAT stores",
    description:
      "A buyer-intent guide for Mollie-powered stores that need iDEAL, SEPA, VAT/BTW fields, paid invoice PDFs, refund credit notes, customer downloads, and accountant-ready exports.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-klarna-invoice-workflow",
    eyebrow: "Klarna invoice workflow",
    title: "WooCommerce Klarna invoice workflow for EU VAT stores",
    description:
      "A buyer-intent guide for Klarna-powered stores that need pay-later invoice timing, VAT/BTW fields, capture evidence, refund credit notes, customer downloads, and accountant-ready exports.",
    theme: "purple",
  },
  {
    href: "/blog/woocommerce-net-terms-invoice-plugin",
    eyebrow: "Net terms invoice plugin",
    title: "WooCommerce Net terms invoice plugin for EU B2B stores",
    description:
      "A buyer-intent guide for stores offering Net 14, Net 30, or pay-by-invoice terms that need VAT/BTW fields, proformas, due dates, reminders, credit notes, and exports.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-qr-code-invoice-payment",
    eyebrow: "QR invoice payments",
    title: "WooCommerce QR code invoice payment workflow for EU VAT stores",
    description:
      "A buyer-intent guide for stores adding bank-transfer QR payment codes to invoice PDFs with IBAN details, payment references, reminders, credit notes, and exports.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-invoice-after-payment",
    eyebrow: "Invoice timing workflow",
    title: "WooCommerce invoice after payment workflow for EU VAT stores",
    description:
      "A buyer-intent guide for stores deciding when to issue final invoice PDFs after payment, with proformas, VAT numbering, credit notes, customer downloads, and exports.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-invoice-payment-link",
    eyebrow: "Invoice payment links",
    title: "WooCommerce invoice payment link workflow for EU VAT stores",
    description:
      "A buyer-intent guide for stores sending pay-by-link invoices with VAT evidence, proformas, final invoice timing, reminders, credit notes, and accountant exports.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-receipt-vs-invoice",
    eyebrow: "Receipt vs invoice",
    title: "WooCommerce receipt vs invoice workflow for EU VAT stores",
    description:
      "A buyer-intent guide for stores deciding when a payment receipt is not enough and when VAT invoice PDFs, credit notes, customer downloads, and exports are required.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-vies-vat-validation",
    eyebrow: "VIES VAT validation",
    title: "WooCommerce VIES VAT validation for EU B2B invoices",
    description:
      "A buyer-intent guide for stores that need VIES VAT number validation, reverse-charge invoice evidence, checkout fallback rules, credit notes, and exports.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-oss-vat-invoices",
    eyebrow: "OSS VAT invoices",
    title: "WooCommerce OSS VAT invoices for EU cross-border stores",
    description:
      "A buyer-intent guide for stores that need OSS VAT country evidence, invoice PDFs, credit notes, customer downloads, and accountant-ready exports.",
    theme: "cyan",
  },
  {
    href: "/blog/woocommerce-digital-product-vat-invoices",
    eyebrow: "Digital product VAT invoices",
    title: "WooCommerce digital product VAT invoices for EU stores",
    description:
      "A buyer-intent guide for digital-product stores that need EU VAT evidence, paid invoice PDFs, credit notes, customer downloads, OSS reporting, and accountant exports.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-invoice-custom-fields",
    eyebrow: "Invoice custom fields",
    title: "WooCommerce invoice custom fields for EU VAT workflows",
    description:
      "A buyer-intent guide for B2B stores that need VAT IDs, PO numbers, cost centres, project references, invoice emails, and review notes on PDFs and accountant exports.",
    theme: "cyan",
  },
  {
    href: "/blog/woocommerce-invoice-plugin-for-accountants",
    eyebrow: "Accountant invoice workflow",
    title: "WooCommerce invoice plugin for accountants and bookkeepers",
    description:
      "A buyer-intent accountant checklist for EU VAT invoice numbers, retained PDFs, refund credit notes, payment reconciliation, and exports that reduce bookkeeping cleanup.",
    theme: "slate",
  },
  {
    href: "/blog/woocommerce-marketplace-vat-invoices",
    eyebrow: "Marketplace VAT invoices",
    title: "WooCommerce marketplace VAT invoices for multi-vendor stores",
    description:
      "A buyer-intent marketplace checklist for seller-of-record rules, vendor VAT evidence, customer invoice PDFs, refund credit notes, payout references, and accountant exports.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-invoice-plugin-for-saas",
    eyebrow: "SaaS invoice workflow",
    title: "WooCommerce invoice plugin for SaaS and subscription stores",
    description:
      "A buyer-intent checklist for SaaS and subscription WooCommerce stores that need renewal invoice PDFs, failed-payment evidence, VAT/BTW data, credit notes, and accountant exports.",
    theme: "cyan",
  },
  {
    href: "/blog/woocommerce-invoice-plugin-for-freelancers",
    eyebrow: "Freelancer invoice workflow",
    title: "WooCommerce invoice plugin for freelancers and solo stores",
    description:
      "A buyer-intent freelancer checklist for VAT/BTW fields, invoice PDFs, customer downloads, refunds, and accountant handoff without enterprise billing complexity.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-invoice-plugin-setup-checklist",
    eyebrow: "Invoice setup checklist",
    title: "WooCommerce invoice plugin setup checklist before launch",
    description:
      "A pre-purchase checklist for WooCommerce stores choosing an invoice plugin: VAT fields, invoice numbers, PDFs, refunds, emails, downloads, and accountant export.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-german-vat-invoices",
    eyebrow: "German VAT invoices",
    title: "WooCommerce German VAT invoices: Pflichtangaben checklist",
    description:
      "A buyer-intent checklist for German/EU stores that need VAT invoice fields, reverse-charge evidence, PDF delivery, credit notes, and accountant export.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-french-vat-invoices",
    eyebrow: "French VAT invoices",
    title: "WooCommerce French VAT invoices: mentions obligatoires checklist",
    description:
      "A buyer-intent checklist for French/EU stores that need TVA invoice fields, reverse-charge evidence, PDF delivery, credit notes, and accountant export.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-spanish-vat-invoices",
    eyebrow: "Spanish VAT invoices",
    title: "WooCommerce Spanish VAT invoices: IVA invoice plugin checklist",
    description:
      "A buyer-intent checklist for Spanish/EU stores that need IVA invoice fields, NIF/CIF or VAT numbers, reverse-charge evidence, PDF delivery, corrections, and accountant export.",
    theme: "amber",
  },
  {
    href: "/blog/woocommerce-italian-vat-invoices",
    eyebrow: "Italian VAT invoices",
    title: "WooCommerce Italian VAT invoices: Fattura IVA checklist",
    description:
      "A buyer-intent checklist for Italian/EU stores that need IVA invoice fields, Codice Fiscale, Partita IVA, SDI/PEC readiness, credit notes, and accountant export.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-belgian-vat-invoices",
    eyebrow: "Belgian VAT invoices",
    title: "WooCommerce Belgian VAT invoices: BTW/TVA checklist",
    description:
      "A buyer-intent checklist for Belgian/EU stores that need BTW/TVA invoice fields, VAT-number evidence, reverse charge, credit notes, and accountant export.",
    theme: "amber",
  },
  {
    href: "/blog/woocommerce-austrian-vat-invoices",
    eyebrow: "Austrian VAT invoices",
    title: "WooCommerce Austrian VAT invoices: USt/UID checklist",
    description:
      "A buyer-intent checklist for Austrian/EU stores that need USt invoice fields, UID evidence, reverse charge, credit notes, customer downloads, and accountant export.",
    theme: "slate",
  },
  {
    href: "/blog/woocommerce-polish-vat-invoices",
    eyebrow: "Polish VAT invoices",
    title: "WooCommerce Polish VAT invoices: NIP / KSeF checklist",
    description:
      "A buyer-intent checklist for Polish/EU stores that need NIP fields, VAT invoice data, KSeF-ready exports, reverse charge, corrections, and accountant handoff.",
    theme: "purple",
  },
  {
    href: "/blog/woocommerce-danish-vat-invoices",
    eyebrow: "Danish VAT invoices",
    title: "WooCommerce Danish VAT invoices: moms / CVR checklist",
    description:
      "A buyer-intent checklist for Danish/EU stores that need moms invoice fields, CVR numbers, reverse-charge evidence, credit notes, and accountant export.",
    theme: "indigo",
  },
  {
    href: "/blog/woocommerce-swedish-vat-invoices",
    eyebrow: "Swedish VAT invoices",
    title: "WooCommerce Swedish VAT invoices: moms / organisationsnummer checklist",
    description:
      "A buyer-intent checklist for Swedish/EU stores that need moms invoice fields, organisationsnummer, reverse-charge evidence, credit notes, and accountant export.",
    theme: "blue",
  },
  {
    href: "/blog/woocommerce-finnish-vat-invoices",
    eyebrow: "Finnish VAT invoices",
    title: "WooCommerce Finnish VAT invoices: ALV / Y-tunnus checklist",
    description:
      "A buyer-intent checklist for Finnish/EU stores that need ALV invoice fields, Y-tunnus, reverse-charge evidence, credit notes, and accountant export.",
    theme: "cyan",
  },
  {
    href: "/blog/woocommerce-portuguese-vat-invoices",
    eyebrow: "Portuguese VAT invoices",
    title: "WooCommerce Portuguese VAT invoices: IVA / NIF checklist",
    description:
      "A buyer-intent checklist for Portuguese/EU stores that need IVA invoice fields, NIF identifiers, reverse-charge evidence, credit notes, and accountant export.",
    theme: "emerald",
  },
  {
    href: "/blog/woocommerce-irish-vat-invoices",
    eyebrow: "Irish VAT invoices",
    title: "WooCommerce Irish VAT invoices: VAT number plugin checklist",
    description:
      "A buyer-intent checklist for Irish/EU stores that need VAT-number fields, reverse-charge evidence, retained PDFs, credit notes, and accountant export.",
    theme: "green",
  },
];
