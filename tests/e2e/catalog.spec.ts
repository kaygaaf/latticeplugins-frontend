import { expect, test } from "@playwright/test";

const OFFICIAL_PRODUCTS = [
  { name: "Lattice Commerce Suite", slug: "lattice-commerce-suite" },
  { name: "Lattice Core", slug: "lattice-core" },
  { name: "Lattice CRM", slug: "lattice-crm" },
  { name: "Lattice Migrate", slug: "lattice-migrate" },
  { name: "Lattice Stripe Payments", slug: "lattice-stripe-payments" },
  { name: "Lattice Subscribify", slug: "lattice-subscribify" },
  { name: "Lattice SEO", slug: "lattice-seo" },
];

const REMOVED_OR_MERGED_PRODUCTS = [
  "Lattice Abandoned Cart",
  "Lattice Analytics",
  "Lattice Auto Updater",
  "Lattice Checkout Upsell",
  "Lattice Coupons",
  "Lattice Direct Checkout",
  "Lattice License Manager",
  "Lattice License Server",
  "Lattice Product Comparison",
  "Lattice Social Proof",
  "Lattice Trust Badges",
];

test("shop page shows exactly the official 7-product Lattice catalog", async ({ page }) => {
  await page.goto("/shop/");

  await expect(page).toHaveURL(/\/shop\/?$/);
  await expect(page.getByRole("heading", { name: "Shop" })).toBeVisible();

  const titleProductLinks = page.locator('main h2 a[href^="/product/"]');
  await expect(titleProductLinks).toHaveCount(OFFICIAL_PRODUCTS.length);

  for (const product of OFFICIAL_PRODUCTS) {
    await expect(
      page.getByRole("heading", { name: product.name, exact: true }),
      `${product.name} heading should be visible on /shop/`,
    ).toBeVisible();

    await expect(
      page.locator(`main h2 a[href="/product/${product.slug}"]`),
      `${product.name} should link from its title to /product/${product.slug}`,
    ).toHaveText(product.name);
  }

  for (const productName of REMOVED_OR_MERGED_PRODUCTS) {
    await expect(
      page.getByText(productName, { exact: true }),
      `${productName} must not reappear as a shop product`,
    ).toHaveCount(0);
  }
});

for (const product of OFFICIAL_PRODUCTS) {
  test(`product detail page renders conversion sections for ${product.name}`, async ({ page }) => {
    await page.goto(`/product/${product.slug}/`, { waitUntil: "domcontentloaded" });

    await expect(page).toHaveURL(new RegExp(`/product/${product.slug}/?$`));
    await expect(page.getByRole("heading", { name: product.name, exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "What it does", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Key features", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: /add to cart|download free/i }).first()).toBeVisible();
  });
}
