const ICONS: Record<string, JSX.Element> = {
  "lattice-seo": (
    <>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 4.5 4.5" />
      <path d="M8 10.5h5M10.5 8v5" />
    </>
  ),
  "lattice-subscribify": (
    <>
      <path d="M4 8a8 8 0 0 1 14-3l2 2" />
      <path d="M20 4v5h-5" />
      <path d="M20 16a8 8 0 0 1-14 3l-2-2" />
      <path d="M4 20v-5h5" />
    </>
  ),
  "lattice-stripe-payments": (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M7 14.5h4" />
    </>
  ),
  "lattice-migrate": (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12 4.2 7.6M12 12l7.8-4.4M12 12v8.5" />
    </>
  ),
  "lattice-crm": (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="10" r="2.4" />
      <path d="M15.5 19a4.4 4.4 0 0 1 5-4.4" />
    </>
  ),
  "lattice-core": (
    <>
      <path d="m12 3 8 4.5L12 12 4 7.5 12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </>
  ),
  "lattice-commerce-suite": (
    <>
      <path d="M4 5h2l2.2 10.2a2 2 0 0 0 2 1.6h6.9a2 2 0 0 0 2-1.6L20.5 9H7" />
      <circle cx="10.5" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M12 11.5h4M14 9.5v4" />
    </>
  ),
};

export default function ProductIcon({ slug, className = "" }: { slug?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[slug || ""] || ICONS["lattice-core"]}
    </svg>
  );
}
