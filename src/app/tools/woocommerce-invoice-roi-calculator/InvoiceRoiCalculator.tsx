"use client";

import { useMemo, useState } from "react";

function numberValue(value: string, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export default function InvoiceRoiCalculator() {
  const [requestsPerMonth, setRequestsPerMonth] = useState("12");
  const [minutesPerRequest, setMinutesPerRequest] = useState("8");
  const [hourlyCost, setHourlyCost] = useState("45");
  const [correctionsPerMonth, setCorrectionsPerMonth] = useState("4");

  const result = useMemo(() => {
    const requests = numberValue(requestsPerMonth, 12);
    const minutes = numberValue(minutesPerRequest, 8);
    const hourly = numberValue(hourlyCost, 45);
    const corrections = numberValue(correctionsPerMonth, 4);
    const adminHours = (requests * minutes) / 60;
    const correctionHours = (corrections * 6) / 60;
    const monthlyCost = (adminHours + correctionHours) * hourly;
    const yearlyCost = monthlyCost * 12;
    const paybackDays = monthlyCost > 0 ? Math.max(1, Math.ceil((49 / monthlyCost) * 30)) : 0;

    return {
      monthlyCost,
      yearlyCost,
      adminHours: adminHours + correctionHours,
      paybackDays,
    };
  }, [correctionsPerMonth, hourlyCost, minutesPerRequest, requestsPerMonth]);

  const fields = [
    {
      label: "Invoice requests per month",
      value: requestsPerMonth,
      setValue: setRequestsPerMonth,
      helper: "How often customers ask for a VAT/BTW invoice, corrected invoice, or PDF resend.",
    },
    {
      label: "Minutes per request",
      value: minutesPerRequest,
      setValue: setMinutesPerRequest,
      helper: "Copying order data, checking VAT details, creating/sending PDFs, and answering email.",
    },
    {
      label: "Internal hourly cost (€)",
      value: hourlyCost,
      setValue: setHourlyCost,
      helper: "Use owner/admin time, agency support time, or finance ops cost.",
    },
    {
      label: "Correction loops per month",
      value: correctionsPerMonth,
      setValue: setCorrectionsPerMonth,
      helper: "Missing VAT number, wrong invoice email, refund credit note, or customer lost the PDF.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-5">
        {fields.map((field) => (
          <label key={field.label} className="block">
            <span className="block font-semibold text-slate-900 mb-2">{field.label}</span>
            <input
              type="number"
              min="0"
              inputMode="decimal"
              value={field.value}
              onChange={(event) => field.setValue(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <span className="block text-sm text-slate-500 mt-2">{field.helper}</span>
          </label>
        ))}
      </div>

      <div className="lg:col-span-2 bg-slate-950 text-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-blue-200 mb-3">Estimated admin leak</p>
          <div className="space-y-5">
            <div>
              <p className="text-slate-300 text-sm">Hours lost per month</p>
              <p className="text-4xl font-bold">{result.adminHours.toFixed(1)}h</p>
            </div>
            <div>
              <p className="text-slate-300 text-sm">Estimated monthly cost</p>
              <p className="text-4xl font-bold">€{result.monthlyCost.toFixed(0)}</p>
            </div>
            <div>
              <p className="text-slate-300 text-sm">Estimated yearly cost</p>
              <p className="text-4xl font-bold">€{result.yearlyCost.toFixed(0)}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-2xl bg-green-500/15 border border-green-300/30 p-4">
          <p className="font-semibold text-green-100 mb-1">€49 payback estimate</p>
          <p className="text-sm text-green-50 leading-relaxed">
            {result.monthlyCost > 0
              ? `At this volume, a €49 invoice workflow pays back in roughly ${result.paybackDays} day${result.paybackDays === 1 ? "" : "s"} if it removes the manual invoice queue.`
              : "Add your monthly invoice requests to estimate the payback window."}
          </p>
        </div>
      </div>
    </div>
  );
}
