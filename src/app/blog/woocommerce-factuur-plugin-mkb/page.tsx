import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://latticeplugins.com";
const PAGE_URL = `${SITE_URL}/blog/woocommerce-factuur-plugin-mkb`;

export const metadata: Metadata = {
  title: "WooCommerce Factuur Plugin voor MKB Webshops — BTW Workflow",
  description:
    "Buyer-intent gids voor MKB WooCommerce webshops die een factuur plugin zoeken voor BTW-nummer velden, PDF facturen, creditnota's, klantdownloads en boekhouder-export.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "WooCommerce factuur plugin voor MKB webshops",
    description:
      "Een praktische aankoopchecklist voor MKB webshops die minder factuurmail, betere BTW-data en een WooCommerce-native invoice workflow willen.",
    url: PAGE_URL,
    siteName: "Lattice Plugins",
    type: "article",
  },
};

const painPoints = [
  "Zakelijke klanten mailen na aankoop alsnog om een factuur met BTW-nummer.",
  "Support moet orderdata kopiëren naar losse PDF-tools of boekhoudsoftware.",
  "Refunds leveren verwarring op omdat er geen aparte creditnota bij de order staat.",
  "De boekhouder krijgt aan het eind van de maand spreadsheets in plaats van order-level factuurdata.",
];

const buyingChecks = [
  {
    title: "1. Kan de checkout MKB-klanten herkennen?",
    detail:
      "Een goede factuurworkflow vraagt vóór betaling om bedrijfsnaam, BTW-nummer, factuurmail en eventueel PO/referentie. Anders begint het correctiewerk direct na de order.",
  },
  {
    title: "2. Worden factuurnummers los van ordernummers beheerd?",
    detail:
      "MKB-webshops hebben vaak testorders, mislukte betalingen en geannuleerde orders. Een aparte factuurreeks houdt de administratie schoner dan alleen WooCommerce order-ID's gebruiken.",
  },
  {
    title: "3. Krijgt de klant de PDF zonder supportticket?",
    detail:
      "Controleer of de plugin PDF-facturen toevoegt aan WooCommerce e-mails én een download toont in Mijn account. Dat is de snelste manier om herhaalvragen te verminderen.",
  },
  {
    title: "4. Zijn creditnota's gekoppeld aan refunds?",
    detail:
      "Bij terugbetalingen wil je niet de originele factuur overschrijven. De workflow moet een creditnota maken die bij de refund en originele order blijft horen.",
  },
  {
    title: "5. Is de export bruikbaar voor de boekhouder?",
    detail:
      "Vraag om factuurnummer, factuurdatum, BTW-percentage, BTW-bedrag, klant-BTW-nummer, creditnota-relatie en PDF-link als losse velden. Anders verschuift het handwerk alleen naar de boekhouder.",
  },
];

const decisionTable = [
  ["Minder dan 5 factuurvragen per maand", "Gebruik eerst de checklist en verbeter de checkoutvelden."],
  ["5–20 factuurvragen per maand", "Een €49 invoice workflow kan al terugverdiend zijn door minder supporttijd."],
  ["Veel B2B of EU klanten", "Prioriteer BTW-nummer validatie, reverse charge data, creditnota's en accountant export."],
  ["Accountant corrigeert elke maand data", "Koop niet alleen een PDF-template; kies een workflow die ordermeta en exports goed opslaat."],
];

const internalLinks = [
  { href: "/woocommerce-eu-vat-invoices", label: "Bekijk Lattice Invoices early access" },
  { href: "/docs/woocommerce-eu-vat-invoice-setup", label: "Lees de EU VAT invoice setup guide" },
  { href: "/blog/woocommerce-btw-factuur-plugin-nederland", label: "Nederlandse BTW factuur plugin checklist" },
  { href: "/blog/woocommerce-vat-number-checkout-field", label: "VAT/BTW nummer veld in WooCommerce checkout" },
  { href: "/blog/woocommerce-credit-notes-refunds", label: "Creditnota's voor WooCommerce refunds" },
  { href: "/blog/woocommerce-invoice-export-accounting", label: "Factuur export voor boekhouder/accounting" },
];

const faq = [
  {
    q: "Welke WooCommerce factuur plugin past bij een MKB webshop?",
    a: "Kies een workflow die BTW-nummer velden, factuurnummering, PDF e-mailbijlagen, Mijn account downloads, refund creditnota's en boekhouder-export samen afdekt. Alleen een PDF-template is meestal niet genoeg.",
  },
  {
    q: "Wanneer is een betaalde factuurplugin de moeite waard?",
    a: "Als factuurcorrecties, BTW-nummer mails of boekhouder-export elke maand tijd kosten, kan een eenmalige €49 workflow sneller terugverdiend zijn dan handmatig blijven corrigeren.",
  },
  {
    q: "Kan Lattice Invoices nu gekocht worden?",
    a: "Lattice Invoices staat als early-access productpad klaar. Gebruik de CTA om je MKB-webshop, land, B2B/B2C mix, gewenste BTW-velden, factuurnummerformat en creditnota-behoefte door te geven.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WooCommerce factuur plugin voor MKB webshops",
  description:
    "Buyer-intent gids voor MKB WooCommerce webshops die een factuur plugin zoeken voor BTW-nummer velden, PDF facturen, creditnota's, klantdownloads en boekhouder-export.",
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
  "mailto:support@latticeplugins.com?subject=WooCommerce%20factuur%20plugin%20MKB%20-%20Lattice%20Invoices&body=Hi%20Lattice%2C%0A%0AIk%20zoek%20een%20WooCommerce%20factuur%20plugin%20voor%20een%20MKB%20webshop.%0A%0AStore%20URL%3A%20%0ALand%3A%20%0AB2B%2FB2C%20mix%3A%20%0AFactuurvragen%20per%20maand%3A%20%0ABTW-nummer%20veld%20nodig%3A%20%0AFactuurnummer%20format%3A%20%0ACreditnota's%20nodig%3A%20%0ABoekhouder%2Fboekhoudpakket%3A%20";

export default function WooCommerceFactuurPluginMkbPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="uppercase tracking-[0.3em] text-sm text-emerald-200 mb-4">MKB WooCommerce facturen</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            WooCommerce factuur plugin voor MKB: koop geen PDF-knop, koop minder administratie.
          </h1>
          <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mb-8">
            Voor MKB-webshops telt niet alleen hoe de factuur eruitziet. De winst zit in BTW-gegevens vóór betaling,
            automatische PDF-levering, creditnota&apos;s bij refunds en export waar de boekhouder direct mee verder kan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={mailto} className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-lg text-center">
              Vraag €49 MKB invoice workflow review aan
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
              <h2 className="text-3xl font-bold mb-4">Waarom facturen bij MKB WooCommerce stores blijven hangen</h2>
              <p className="text-slate-700 leading-relaxed mb-5">
                Een MKB-webshop groeit vaak van particuliere orders naar zakelijke klanten. Dan veranderen de eisen:
                klanten willen een BTW-nummer op de factuur, een apart factuuradres, betaalreferenties, downloads en correcte creditnota&apos;s.
              </p>
              <div className="space-y-3">
                {painPoints.map((point) => (
                  <div key={point} className="flex gap-3 rounded-xl bg-red-50 border border-red-100 p-4">
                    <span className="text-red-600 font-bold">!</span>
                    <span className="text-slate-800">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-5">Aankoopchecklist voor een MKB factuurplugin</h2>
              <div className="space-y-4">
                {buyingChecks.map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-emerald-100 p-5">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8 overflow-hidden">
              <h2 className="text-3xl font-bold mb-6">Wanneer is een €49 invoice workflow logisch?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="p-4 rounded-l-xl">MKB situatie</th>
                      <th className="p-4 rounded-r-xl">Koopadvies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decisionTable.map(([situation, advice]) => (
                      <tr key={situation} className="border-b border-slate-100 align-top">
                        <td className="p-4 font-semibold text-slate-900">{situation}</td>
                        <td className="p-4 text-slate-700">{advice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-slate-950 text-white rounded-2xl p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-200 font-semibold mb-2">Conversiepad</p>
              <h2 className="text-3xl font-bold mb-4">Stuur de factuurworkflow vóór je een plugin koopt</h2>
              <p className="text-slate-200 leading-relaxed mb-6">
                De beste aankoopbeslissing is concreet: hoeveel factuurvragen per maand, welke BTW-velden, welk nummerformat,
                welk refundproces en welke export heeft de boekhouder nodig? De early-access aanvraag vraagt precies die informatie.
              </p>
              <a href={mailto} className="inline-flex bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-400 transition">
                Stuur mijn MKB factuurworkflow
              </a>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-5">Verder lezen voordat je koopt</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-xl border border-slate-200 p-4 font-semibold text-slate-800 hover:border-emerald-400 hover:text-emerald-700 transition">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm p-8">
              <h2 className="text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm p-6 sticky top-6">
              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5 mb-6">
                <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold mb-2">MKB offer</p>
                <div className="text-4xl font-bold text-slate-950 mb-1">€49</div>
                <p className="text-sm text-slate-700 leading-relaxed">Eenmalige early-access workflow review voor stores met echte factuurfrictie.</p>
              </div>
              <h2 className="text-2xl font-bold mb-3">Klaar om te kwalificeren?</h2>
              <p className="text-slate-700 mb-5">
                Mail store URL, land, B2B/B2C mix, factuurvragen per maand, BTW-velden, nummerformat en creditnota-behoefte.
              </p>
              <a href={mailto} className="block text-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-3">
                Vraag early access aan
              </a>
              <Link href="/product/lattice-invoices" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition mb-3">
                Productpagina bekijken
              </Link>
              <Link href="/shop" className="block text-center border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:border-emerald-400 transition">
                Huidige shop bekijken
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
