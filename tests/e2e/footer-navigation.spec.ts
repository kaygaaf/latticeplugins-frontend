import { expect, test } from "@playwright/test";

test("footer exposes the EU VAT invoice setup guide from the public site chrome", async ({ page }) => {
  await page.goto("/shop/", { waitUntil: "domcontentloaded" });

  const footer = page.locator("footer");
  await expect(footer).toBeVisible();

  const docsLink = footer.getByRole("link", {
    name: "EU VAT invoice setup guide",
    exact: true,
  });

  await expect(docsLink).toBeVisible();
  await expect(docsLink).toHaveAttribute("href", "/docs/woocommerce-eu-vat-invoice-setup");

  await docsLink.click();
  await expect(page).toHaveURL(/\/docs\/woocommerce-eu-vat-invoice-setup\/?$/);
  await expect(
    page.getByRole("heading", {
      name: "How to set up EU VAT invoices for WooCommerce without creating support tickets.",
      exact: true,
    }),
  ).toBeVisible();
});
