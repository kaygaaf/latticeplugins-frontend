"use client";

import { useMemo, useState } from "react";

const vatFieldOptions = [
  "Company name",
  "VAT/BTW number",
  "Invoice email",
  "PO/reference field",
  "Reverse-charge note",
];

const workflowOptions = [
  "PDF invoice attached to paid-order email",
  "Customer invoice download in My Account",
  "Credit notes for refunds",
  "Proforma invoices before payment",
  "Accountant export fields",
];

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export default function InvoiceSetupBrief() {
  const [storeUrl, setStoreUrl] = useState("");
  const [country, setCountry] = useState("Netherlands");
  const [businessMix, setBusinessMix] = useState("B2B and B2C");
  const [monthlyRequests, setMonthlyRequests] = useState("12");
  const [numberFormat, setNumberFormat] = useState("INV-2026-0001");
  const [paymentMethods, setPaymentMethods] = useState("Stripe, PayPal, bank transfer");
  const [accountingTool, setAccountingTool] = useState("Accountant export / CSV");
  const [vatFields, setVatFields] = useState<string[]>(["Company name", "VAT/BTW number", "Invoice email"]);
  const [workflows, setWorkflows] = useState<string[]>([
    "PDF invoice attached to paid-order email",
    "Customer invoice download in My Account",
    "Credit notes for refunds",
  ]);

  const setupScore = Math.min(10, vatFields.length + workflows.length + (monthlyRequests ? 1 : 0));
  const priority = setupScore >= 8 ? "High-priority early-access fit" : setupScore >= 5 ? "Good early-access candidate" : "Needs light discovery first";

  const brief = useMemo(
    () => `Lattice Invoices setup brief\n\nStore URL: ${storeUrl || "[add store URL]"}\nCountry: ${country}\nBusiness mix: ${businessMix}\nMonthly invoice requests/corrections: ${monthlyRequests || "[estimate]"}\nInvoice number format wanted: ${numberFormat || "[prefix/sequence]"}\nPayment methods: ${paymentMethods || "[payment methods]"}\nAccounting handoff: ${accountingTool || "[accounting tool/export]"}\n\nRequired checkout/VAT fields:\n${vatFields.map((field) => `- ${field}`).join("\n") || "- [select required fields]"}\n\nRequired invoice workflows:\n${workflows.map((workflow) => `- ${workflow}`).join("\n") || "- [select required workflows]"}\n\nFit score: ${setupScore}/10 — ${priority}\n\nI want to request the €49 Lattice Invoices early-access review and confirm whether this WooCommerce setup is a fit before buying another invoice/PDF plugin.`,
    [accountingTool, businessMix, country, monthlyRequests, numberFormat, paymentMethods, priority, setupScore, storeUrl, vatFields, workflows]
  );

  const mailto = `mailto:support@latticeplugins.com?subject=Lattice%20Invoices%20setup%20brief%20-%20%E2%82%AC49%20early%20access&body=${encodeURIComponent(brief)}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 bg-white rounded-2xl border shadow-sm p-6 md:p-8 space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-3">Build the setup brief before requesting early access</h2>
          <p className="text-slate-700 leading-relaxed">
            Buyers often hesitate because they do not know what to send. This tool turns the invoice problem into a concrete WooCommerce setup brief: country, VAT fields, invoice numbering, emails, refunds, payment methods, and accounting handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Store URL</span>
            <input value={storeUrl} onChange={(event) => setStoreUrl(event.target.value)} placeholder="https://example.com" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Country</span>
            <input value={country} onChange={(event) => setCountry(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Business mix</span>
            <select value={businessMix} onChange={(event) => setBusinessMix(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 bg-white">
              <option>B2B and B2C</option>
              <option>Mostly B2B</option>
              <option>Mostly B2C with occasional invoice requests</option>
              <option>Agency or consultant store</option>
              <option>Wholesale / reseller store</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Invoice requests per month</span>
            <input value={monthlyRequests} onChange={(event) => setMonthlyRequests(event.target.value)} inputMode="numeric" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Invoice number format</span>
            <input value={numberFormat} onChange={(event) => setNumberFormat(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Payment methods</span>
            <input value={paymentMethods} onChange={(event) => setPaymentMethods(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
          </label>
          <label className="block md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Accounting handoff</span>
            <input value={accountingTool} onChange={(event) => setAccountingTool(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-3">VAT / checkout fields</h3>
            <div className="space-y-2">
              {vatFieldOptions.map((field) => (
                <label key={field} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 cursor-pointer">
                  <input type="checkbox" checked={vatFields.includes(field)} onChange={() => setVatFields((current) => toggleValue(current, field))} className="h-5 w-5 accent-blue-600" />
                  <span>{field}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Invoice workflows</h3>
            <div className="space-y-2">
              {workflowOptions.map((workflow) => (
                <label key={workflow} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 cursor-pointer">
                  <input type="checkbox" checked={workflows.includes(workflow)} onChange={() => setWorkflows((current) => toggleValue(current, workflow))} className="h-5 w-5 accent-green-600" />
                  <span>{workflow}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <aside className="lg:col-span-2 bg-slate-950 text-white rounded-2xl shadow-xl p-6 md:p-8 self-start sticky top-6">
        <p className="uppercase tracking-[0.25em] text-xs text-blue-200 mb-3">Generated buyer brief</p>
        <div className="flex items-end gap-3 mb-4">
          <div className="text-5xl font-bold">{setupScore}/10</div>
          <div className="pb-2 text-green-300 font-semibold">{priority}</div>
        </div>
        <pre className="whitespace-pre-wrap text-sm leading-relaxed bg-white/10 border border-white/10 rounded-xl p-4 max-h-[480px] overflow-auto mb-5">{brief}</pre>
        <a href={mailto} className="block text-center bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg mb-3">
          Send setup brief for €49 early access
        </a>
        <p className="text-sm text-slate-300">
          The email opens with this exact setup brief, reducing back-and-forth before a paid Lattice Invoices review.
        </p>
      </aside>
    </div>
  );
}
