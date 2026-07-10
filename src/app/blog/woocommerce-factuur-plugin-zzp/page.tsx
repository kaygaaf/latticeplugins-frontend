import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const SLUG = "/blog/woocommerce-factuur-plugin-zzp";

export const metadata: Metadata = {
  title: "WooCommerce Factuur Plugin voor ZZP'ers — BTW en PDF Facturen",
  description:
    "Nederlandse buyer-intent gids voor ZZP'ers met een WooCommerce shop die BTW-facturen, PDF bijlagen, klantdownloads, creditnota's en boekhouder-export willen automatiseren.",
  alternates: {
    canonical: `${SITE_URL}${SLUG}`,
  },
  openGraph: {
    title: "WooCommerce factuur plugin voor ZZP'ers",
    description:
      "Checklist voor ZZP WooCommerce stores: BTW-nummer veld, factuurnummering, PDF facturen, creditnota's, klantdownloads en minder handmatig factuurwerk.",
    url: `${SITE_URL}${SLUG}`,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const zzpSignals = [
  {
    title: "Zakelijke klanten vragen na betaling om een BTW-factuur",
    detail:
      "Een ZZP-shop verkoopt vaak digitale producten, consults, templates, cursussen of kleine diensten. Als de klant pas na betaling bedrijfsnaam, BTW-nummer of PO-referentie mailt, ontstaat direct handmatig herstelwerk.",
    fix: "Leg bedrijfsnaam, BTW/BTW-id, factuurmail en referentie vast vóór of tijdens checkout.",
  },
  {
    title: "Je maakt PDF's handmatig in Word, Google Docs of je boekhoudpakket",
    detail:
      "Dat werkt bij een paar orders, maar elke correctie kost tijd en vergroot de kans op dubbele factuurnummers, verkeerde BTW-bedragen of ontbrekende creditnota's.",
    fix: "Laat WooCommerce-orderdata de factuur, PDF en klantdownload voeden.",
  },
  {
    title: "De boekhouder wil een schonere kwartaal-export",
    detail:
      "Een map met losse PDF's en screenshots is geen fijne overdracht. Je wilt order-ID, factuurnummer, factuurdatum, BTW-bedrag en klant-BTW-nummer gestructureerd bij elkaar houden.",
    fix: "Gebruik een workflow die factuurmetadata op orderniveau opslaat en exporteerbaar houdt.",
  },
];

const mustHaveRows = [
  ["BTW-nummer veld", "Een apart checkoutveld dat op de order wordt opgeslagen, niet alleen in een ordernotitie."],
  ["Factuurnummering", "Een eigen reeks zoals INV-2026-000041, los van WooCommerce order-ID's."],
  ["PDF bij e-mail", "Factuur-PDF bij de betaalde ordermail en opnieuw beschikbaar vanuit My Account."],
  ["Creditnota's", "Een refund of correctie krijgt een aparte creditnota gekoppeld aan de originele factuur."],
  ["Boekhouder-overdracht", "BTW-tarief, BTW-bedrag, klantgegevens, PDF-link en betaalstatus blijven exporteerbaar."],
];

const buyDecisionRows = [
  {
    signal: "0–1 factuurvragen per maand",
    action: "Gebruik eerst de gratis setup guide en noteer welke velden klanten vragen.",
  },
  {
    signal: "2–5 factuurcorrecties per maand",
    action: "Een €49 workflow-review kan al rendabel zijn als elke correctie 5–10 minuten kost.",
  },
  {
    signal: "Zakelijke klanten haken af omdat de factuurflow onduidelijk is",
    action: "Zet de factuurbelofte vóór betaling duidelijk neer: BTW-gegevens, PDF, download en creditnota's.",
  },
  {
    signal: "Je verkoopt aan NL/EU bedrijven met BTW-nummer of reverse charge",
    action: "Kies geen simpele PDF-knop; test eerst BTW/BTW-id, land, vrijstelling en boekhouder-export.",
  },
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Lattice Invoices aanbod" },
  { href: "/docs/woocommerce-eu-vat-invoice-setup", label: "EU VAT invoice setup guide" },
  { href: "/tools/woocommerce-invoice-fit-check", label: "Score invoice fit" },
  { href: "/tools/woocommerce-invoice-roi-calculator", label: "Bereken factuur-ROI" },
  { href: "/blog/woocommerce-factuur-plugin-mkb", label: "MKB factuurplugin gids" },
  { href: "/blog/woocommerce-btw-factuur-plugin-nederland", label: "Nederlandse BTW factuurplugin checklist" },
  { href: "/blog/woocommerce-invoice-plugin-for-freelancers", label: "Freelancer invoice plugin checklist" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Creditnota's voor refunds" },
];

const faq = [
  {
    q: "Welke WooCommerce factuur plugin past bij een ZZP'er?",
    a: "Kies een plugin of workflow die niet alleen een mooie PDF maakt, maar ook BTW/BTW-id velden, factuurnummering, PDF e-mailbijlagen, klantdownloads, creditnota's en exportbare ordermetadata ondersteunt.",
  },
  {
    q: "Is WooCommerce order-ID genoeg als factuurnummer?",
    a: "Voor simpele interne administratie soms, maar veel webshops willen een aparte factuurreeks en factuurdatum. Dat maakt correcties, creditnota's en boekhouder-overdracht duidelijker.",
  },
  {
    q: "Wanneer is Lattice Invoices interessant voor ZZP'ers?",
    a: "Als zakelijke klanten regelmatig om BTW-facturen, aangepaste gegevens of oude PDF's vragen. De early-access route kwalificeert eerst of jouw WooCommerce workflow bij het €49 aanbod past.",
  },
  {
    q: "Wat moet ik opsturen voor een ZZP factuurworkflow review?",
    a: "Stuur je store URL, land, wat je verkoopt, B2B/B2C mix, factuurvragen per maand, gewenste BTW-velden, factuurnummerformat en of je creditnota's nodig hebt.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce factuur plugin voor ZZP'ers",
  description:
    "Nederlandse buyer-intent gids voor ZZP'ers met een WooCommerce shop die BTW-facturen, PDF bijlagen, klantdownloads, creditnota's en boekhouder-export willen automatiseren.",
  mainEntityOfPage: `${SITE_URL}${SLUG}`,
  publisher: {
    "@type": "Organization",
    name: "Lattice Plugins",
    url: SITE_URL,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const mailto =
  "mailto:support@latticeplugins.com?subject=WooCommerce%20factuur%20plugin%20ZZP%20-%20Lattice%20Invoices&body=Hi%20Lattice%2C%0A%0AIk%20zoek%20een%20WooCommerce%20factuur%20plugin%20voor%20een%20ZZP%20shop.%0A%0AStore%20URL%3A%20%0ALand%3A%20%0AWat%20ik%20verkoop%3A%20%0AB2B%2FB2C%20mix%3A%20%0AFactuurvragen%20per%20maand%3A%20%0ABTW-nummer%20veld%20nodig%3A%20%0AFactuurnummer%20format%3A%20%0ACreditnota's%20nodig%3A%20%0ABoekhouder%2Fboekhoudpakket%3A%20";

export default function WooCommerceFactuurPluginZzpPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">ZZP WooCommerce facturen</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce factuur plugin voor ZZP&apos;ers: BTW-facturen zonder handmatig herstelwerk.
          </h1>
          <p className="text-xl text-emerald-50 leading-relaxed max-w-3xl mb-8">
            Verkoop je als ZZP&apos;er via WooCommerce? Dan wil je zakelijke klanten niet na betaling laten mailen voor BTW-gegevens, PDF-facturen of creditnota&apos;s. Gebruik deze checklist om een factuurplugin te kiezen die echt administratie bespaart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-green-400 text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-green-300 transition shadow-lg text-center">
              Vraag €49 ZZP factuurworkflow review aan
            </a>
            <Link href="/woocommerce-eu-vat-invoices" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/15 transition text-center">
              Bekijk Lattice Invoices
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Waarom ZZP facturen in WooCommerce vaak alsnog handwerk worden</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Veel ZZP&apos;ers starten met een simpele WooCommerce checkout. Dat is prima totdat zakelijke klanten een BTW-factuur, PO-referentie, andere factuurmail of gecorrigeerde PDF nodig hebben. Dan verandert een automatische verkoop alsnog in inboxwerk.
              </p>
              <p className="text-slate-700 leading-relaxed">
                De Lattice Invoices route richt zich daarom niet op “nog een PDF-knop”, maar op een WooCommerce-native workflow: juiste gegevens vóór betaling, factuurnummering, PDF delivery, downloads en creditnota&apos;s bij refunds.
              </p>
            </div>

            <div className="grid gap-4">
              {zzpSignals.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-2">{item.detail}</p>
                  <p className="text-slate-800 leading-relaxed"><strong>Betere workflow:</strong> {item.fix}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Aankoopchecklist voor een ZZP WooCommerce factuurplugin</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-sm uppercase tracking-widest text-emerald-800">
                      <th className="p-4 rounded-l-xl bg-white">Onderdeel</th>
                      <th className="p-4 rounded-r-xl bg-white">Waarom het telt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mustHaveRows.map(([feature, reason]) => (
                      <tr key={feature} className="bg-white shadow-sm align-top">
                        <td className="p-4 rounded-l-xl font-semibold text-slate-900">{feature}</td>
                        <td className="p-4 rounded-r-xl text-slate-700">{reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Kopen of wachten?</h2>
              <div className="space-y-4">
                {buyDecisionRows.map((row) => (
                  <div key={row.signal} className="border rounded-xl p-5">
                    <h3 className="text-xl font-bold mb-2">{row.signal}</h3>
                    <p className="text-slate-700 leading-relaxed">{row.action}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold mb-2">ZZP early access</p>
              <h2 className="text-2xl font-bold mb-3">Laat je factuurflow kwalificeren voordat je koopt.</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Stuur je store URL, land, producttype, B2B/B2C mix, gewenste BTW-velden en creditnota-behoefte. De €49 review maakt van een brede pluginzoektocht een concrete Lattice Invoices fit-check.
              </p>
              <a href={mailto} className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition mb-3">
                Stuur mijn ZZP factuurworkflow
              </a>
              <Link href="/tools/woocommerce-invoice-fit-check" className="block text-center bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-3 rounded-xl font-semibold hover:border-emerald-500 transition mb-3">
                Score invoice fit
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Lees setup guide
              </Link>
              <Link href="/tools/woocommerce-invoice-roi-calculator" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-green-400 transition">
                Bereken factuur ROI
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ BTW/BTW-id velden vóór betaling</div>
                <div>✓ PDF facturen en klantdownloads</div>
                <div>✓ Creditnota&apos;s en boekhouder-overdracht</div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Verder lezen</h3>
              <div className="space-y-3 text-sm">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-emerald-200 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
