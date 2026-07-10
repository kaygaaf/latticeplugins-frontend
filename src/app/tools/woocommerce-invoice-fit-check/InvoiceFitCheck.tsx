"use client";

import { useMemo, useState } from "react";

const questions = [
  {
    id: "b2b",
    label: "B2B buyers ask for invoices with company and VAT/BTW details",
    points: 2,
  },
  {
    id: "corrections",
    label: "You manually correct missing VAT numbers, company names, or invoice emails",
    points: 2,
  },
  {
    id: "pdfs",
    label: "Support manually sends or regenerates invoice PDFs after purchase",
    points: 2,
  },
  {
    id: "refunds",
    label: "Refunds need credit notes instead of editing the original invoice",
    points: 2,
  },
  {
    id: "accountant",
    label: "Your accountant asks for invoice numbers, VAT IDs, payment status, and PDF links",
    points: 1,
  },
  {
    id: "bankTransfer",
    label: "You accept bank transfer, proforma, PO, or Net 14/30 B2B orders",
    points: 1,
  },
];

function recommendation(score: number) {
  if (score >= 6) {
    return {
      label: "Strong fit",
      tone: "bg-green-50 border-green-200 text-green-900",
      text: "This store has enough invoice workflow pain to justify a €49 early-access review now. Send the answers with store URL, country, VAT fields, payment methods, and credit-note needs.",
    };
  }

  if (score >= 3) {
    return {
      label: "Likely fit",
      tone: "bg-blue-50 border-blue-200 text-blue-900",
      text: "The invoice problem is already visible. Use the setup guide and send a fit-check request before buying another PDF-only plugin.",
    };
  }

  return {
    label: "Monitor first",
    tone: "bg-slate-50 border-slate-200 text-slate-800",
    text: "The workflow may not be urgent yet. Track invoice requests for one month and revisit once support time or B2B buyer friction becomes measurable.",
  };
}

export default function InvoiceFitCheck() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    b2b: true,
    corrections: true,
    pdfs: true,
  });

  const score = useMemo(
    () => questions.reduce((total, question) => total + (checked[question.id] ? question.points : 0), 0),
    [checked]
  );

  const selectedLabels = questions.filter((question) => checked[question.id]).map((question) => question.label);
  const result = recommendation(score);
  const mailBody = encodeURIComponent(
    `Hi Lattice,\n\nI used the WooCommerce invoice fit-check tool and want to qualify Lattice Invoices early access.\n\nFit score: ${score}/10 (${result.label})\n\nChecked issues:\n${selectedLabels.map((item) => `- ${item}`).join("\n")}\n\nStore URL:\nCountry:\nB2B/B2C mix:\nInvoice requests per month:\nVAT/BTW fields needed:\nPayment methods:\nCredit notes/refunds needed:\nAccounting software:\n`
  );
  const mailto = `mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20fit-check%20score%20${score}%2F10&body=${mailBody}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-4">Invoice fit-check score</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Tick every issue that already happens in your WooCommerce store. A score of 3+ means invoice friction is visible; 6+ means a €49 workflow review is easy to justify.
        </p>
        <div className="space-y-3">
          {questions.map((question) => (
            <label
              key={question.id}
              className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 cursor-pointer hover:border-blue-300 transition"
            >
              <input
                type="checkbox"
                checked={Boolean(checked[question.id])}
                onChange={(event) => setChecked((current) => ({ ...current, [question.id]: event.target.checked }))}
                className="mt-1 h-5 w-5 accent-blue-600"
              />
              <span className="flex-1 text-slate-800">{question.label}</span>
              <span className="font-bold text-blue-700">+{question.points}</span>
            </label>
          ))}
        </div>
      </div>

      <aside className={`rounded-2xl border p-6 shadow-sm ${result.tone}`}>
        <p className="uppercase tracking-[0.25em] text-xs font-semibold mb-3">Your result</p>
        <div className="text-6xl font-bold mb-2">{score}/10</div>
        <h3 className="text-2xl font-bold mb-3">{result.label}</h3>
        <p className="leading-relaxed mb-6">{result.text}</p>
        <a
          href={mailto}
          className="block text-center bg-slate-950 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition mb-3"
        >
          Send this fit-check score
        </a>
        <p className="text-sm opacity-80">
          The email is prefilled with your score and selected issues so a paid early-access conversation can start with the right store details.
        </p>
      </aside>
    </div>
  );
}
