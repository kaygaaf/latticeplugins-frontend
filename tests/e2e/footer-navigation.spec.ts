import { expect, test } from "@playwright/test";

const officialFooterLinks = [
  { name: "Lattice Commerce Suite", href: "/product/lattice-commerce-suite" },
  { name: "Lattice SEO", href: "/product/lattice-seo" },
  { name: "Compare all plugins", href: "/shop" },
];

const disallowedFooterHrefs = [
  "/woocommerce-eu-vat-invoices",
  "/docs/woocommerce-eu-vat-invoice-setup",
];

test("footer keeps global navigation inside the official catalog", async ({ page }) => {
  await page.goto("/shop/", { waitUntil: "domcontentloaded" });

  const footer = page.locator("footer");
  await expect(footer).toBeVisible();

  for (const { name, href } of officialFooterLinks) {
    const link = footer.getByRole("link", { name, exact: true });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", href);
  }

  for (const href of disallowedFooterHrefs) {
    await expect(footer.locator(`a[href="${href}"]`)).toHaveCount(0);
  }
});
