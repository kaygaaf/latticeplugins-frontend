import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-btw-factuur-plugin-nederland`;

export const metadata: Metadata = {
  title: "WooCommerce BTW Factuur Plugin Nederland: Checklist voor Webshops",
  description:
    "Nederlandse buyer-intent gids voor WooCommerce webshops die BTW-facturen, bedrijfsvelden, BTW-nummer, PDF bijlagen, creditnota's en boekhouder-export nodig hebben.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce BTW factuur plugin Nederland",
    description:
      "Waar Nederlandse WooCommerce webshops op moeten letten bij BTW-facturen: BTW-nummer veld, factuurnummers, PDF bijlagen, creditnota's en boekhouder-export.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const checklist = [
  {
    title: "BTW-nummer en bedrijfsgegevens vóór betaling",
    detail:
      "Een Nederlandse B2B-klant moet bedrijfsnaam, BTW-nummer, factuurmail en eventueel PO/referentie kunnen invullen voordat de WooCommerce bestelling wordt betaald.",
  },
  {
    title: "Eigen factuurnummerreeks",
    detail:
      "Gebruik niet alleen het WooCommerce ordernummer. Kies een vaste reeks zoals FACT-2026-000148 en bewaar factuurdatum en orderdatum apart.",
  },
  {
    title: "PDF-factuur in e-mail én Mijn account",
    detail:
      "De klant verwacht de factuur direct bij de ordermail en later opnieuw als download. Dat voorkomt supportmail over kwijtgeraakte facturen.",
  },
  {
    title: "Creditnota bij refunds",
    detail:
      "Bij een volledige of gedeeltelijke terugbetaling moet de originele factuur blijven bestaan en hoort er een aparte creditnota aan de refund gekoppeld te worden.",
  },
  {
    title: "Export die de boekhouder begrijpt",
    detail:
      "BTW-tarief, BTW-bedrag, klant-BTW-nummer, factuurnummer, creditnota-relatie en PDF-link moeten exporteerbaar zijn zonder handmatige spreadsheetcorrecties.",
  },
];

const dutchScenarios = [
  [
    "Nederlandse B2B bestelling",
    "Bedrijf vult BTW-nummer en factuurmail in",
    "Factuur-PDF bevat bedrijfsgegevens, BTW-bedrag en correcte factuurdatum",
  ],
  [
    "EU zakelijke klant met reverse charge",
    "Checkout bewaart land, BTW-nummer en BTW-beslissing",
    "PDF toont duidelijke verleggingsmelding en export bevat de BTW-behandeling",
  ],
  [
    "Refund na betaalde bestelling",
    "WooCommerce refund wordt verwerkt",
    "Aparte creditnota blijft gekoppeld aan oorspronkelijke factuur",
  ],
  [
    "Klant vraagt factuur opnieuw op",
    "Klant logt in bij Mijn account",
    "Factuurdownload staat klaar zonder supportticket",
  ],
];

const mistakes = [
  "BTW-nummers opslaan in ordernotities in plaats van vaste ordermeta.",
  "Factuurnummers pas maken wanneer de klant achteraf mailt.",
  "Een refund verwerken door de oude factuur aan te passen in plaats van een creditnota te maken.",
  "Een PDF plugin kiezen zonder te testen of Mijn account downloads en e-mailbijlagen werken.",
  "Boekhouder-export pas aan het eind van de maand controleren.",
];

const faq = [
  {
    q: "Welke WooCommerce BTW factuur plugin heeft een Nederlandse webshop nodig?",
    a: "Zoek naar een workflow die BTW-nummer velden, eigen factuurnummering, PDF facturen, creditnota's, klantdownloads en boekhouder-export verbindt. Alleen een mooie PDF-template is meestal niet genoeg.",
  },
  {
    q: "Moet een factuurnummer hetzelfde zijn als het WooCommerce ordernummer?",
    a: "Nee, dat hoeft niet. Veel webshops gebruiken een aparte factuurnummerreeks zodat geannuleerde, mislukte of testorders de factuuradministratie niet vervuilen.",
  },
  {
    q: "Is dit juridisch of fiscaal advies?",
    a: "Nee. Dit is een praktische WooCommerce checklist. Laat je exacte factuur- en BTW-verplichtingen altijd controleren door een boekhouder of fiscalist.",
  },
  {
    q: "Waar past Lattice Invoices in dit proces?",
    a: "Lattice Invoices is het early-access productpad voor WooCommerce BTW/EU facturen: checkoutvelden, factuurnummers, PDF levering, creditnota's, klantdownloads en accountant-ready data.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce BTW factuur plugin Nederland",
  description:
    "Nederlandse buyer-intent gids voor WooCommerce BTW facturen, BTW-nummer velden, factuurnummers, PDF bijlagen, creditnota's en boekhouder-export.",
  mainEntityOfPage: PAGE_URL,
  inLanguage: "nl-NL",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20BTW%20factuur%20plugin%20Nederland%20-%20Lattice%20Invoices&body=Hi%20Lattice%2C%0A%0AIk%20wil%20early%20access%20voor%20Lattice%20Invoices%20voor%20een%20Nederlandse%20WooCommerce%20webshop.%0A%0AStore%20URL%3A%20%0ALand%3A%20Nederland%0AB2B%20of%20B2C%3A%20%0AHuidige%20factuurplugin%3A%20%0ABTW-nummer%20veld%20nodig%3A%20%0AFactuurnummer%20format%3A%20%0ACreditnota's%20nodig%3A%20%0ABoekhoudpakket%3A%20";

export default function WooCommerceBtwFactuurPluginNederlandPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-orange-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-orange-200 mb-4">Nederlandse WooCommerce facturen</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce BTW factuur plugin kiezen? Test eerst deze Nederlandse workflow.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Nederlandse webshops hebben meer nodig dan een PDF-knop: BTW-nummer velden, nette factuurnummers,
            creditnota&apos;s, e-mailbijlagen, klantdownloads en data waar de boekhouder direct mee kan werken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-400 transition shadow-lg text-center">
              Vraag €49 invoice workflow review aan
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
              <h2 className="text-3xl font-bold mb-4">Waarom Nederlandse WooCommerce facturen vaak alsnog handwerk worden</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Veel webshops kunnen prima betalingen accepteren, maar facturen lopen vast zodra een zakelijke klant
                een BTW-nummer, afwijkend factuurmailadres, creditnota of boekhouder-export nodig heeft.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Deze pagina is geschreven voor de koopintentie “WooCommerce BTW factuur plugin Nederland”. Gebruik de checklist
                om te bepalen of je huidige plugin alleen een PDF maakt of echt de volledige factuurworkflow dekt.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">BTW-factuur checklist vóór aankoop</h2>
              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <div key={item.title} className="bg-white rounded-xl border border-orange-100 p-5">
                    <p className="text-orange-700 font-bold mb-1">Check {index + 1}</p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Vier praktijktests voor Nederlandse webshops</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">Situatie</th>
                      <th className="p-4">Wat moet de checkout bewaren?</th>
                      <th className="p-4 rounded-r-xl">Wat moet de factuurworkflow opleveren?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dutchScenarios.map(([situation, input, output]) => (
                      <tr key={situation} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{situation}</td>
                        <td className="p-4 text-slate-700">{input}</td>
                        <td className="p-4 text-slate-600">{output}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-4">Veelgemaakte fouten bij WooCommerce BTW facturen</h2>
              <div className="space-y-3">
                {mistakes.map((mistake) => (
                  <div key={mistake} className="flex gap-3 rounded-xl bg-red-50 border border-red-100 p-4">
                    <span className="text-red-600 font-bold">!</span>
                    <span className="text-slate-800">{mistake}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4">Early-access aanbod: €49 workflow review</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Stuur je huidige WooCommerce factuurplugin, BTW-velden, betaalmethodes, gewenste factuurnummerreeks,
                refundproces en boekhoudpakket. Lattice vertaalt dat naar een concrete invoice workflow en kwalificeert
                of Lattice Invoices past bij je Nederlandse webshop.
              </p>
              <a href={mailto} className="inline-flex bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
                Stuur mijn Nederlandse BTW factuur workflow
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-3">Wil je dit in je webshop?</h2>
              <p className="text-slate-700 mb-5">
                De snelste route naar omzet is een duidelijke Nederlandse invoice use case: stuur je WooCommerce setup,
                ontvang de review, en ga daarna naar de €49 Lattice Invoices early-access workflow.
              </p>
              <a href={mailto} className="block text-center bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition mb-3">
                Vraag Nederlandse BTW review aan
              </a>
              <Link href="/woocommerce-eu-vat-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Lattice Invoices aanbod
              </Link>
              <Link href="/docs/woocommerce-eu-vat-invoice-setup" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Setup guide lezen
              </Link>
              <Link href="/blog/woocommerce-vat-number-checkout-field" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                BTW-nummer veld guide
              </Link>
              <Link href="/blog/woocommerce-credit-notes-refunds" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition mb-3">
                Creditnota refund guide
              </Link>
              <Link href="/shop" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-blue-400 transition">
                Huidige plugins bekijken
              </Link>
              <div className="border-t mt-6 pt-6 space-y-3 text-sm text-slate-600">
                <div>✓ Nederlandse buyer-intent zoekterm</div>
                <div>✓ Directe early-access CTA</div>
                <div>✓ Interne links naar invoice offer en checkout</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
