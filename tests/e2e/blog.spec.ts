import { expect, test } from "@playwright/test";

test("blog page shows curated invoice guides without default starter posts", async ({ page }) => {
  await page.goto("/blog/", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveURL(/\/blog\/?$/);
  await expect(page.getByRole("heading", { name: "Blog", exact: true })).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "WooCommerce invoice automation for EU VAT stores",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Hello world!", exact: true })).toHaveCount(0);
  await expect(page.getByText("Welcome to WordPress", { exact: false })).toHaveCount(0);
});

test("blog guide cards keep the curated 37-guide set unique", async ({ page }) => {
  await page.goto("/blog/", { waitUntil: "domcontentloaded" });

  const guideCards = page.getByTestId("blog-guide-card");
  await expect(guideCards).toHaveCount(37);

  const guideHrefs = await guideCards.locator("a[href^='/blog/']").evaluateAll((links) =>
    links.map((link) => link.getAttribute("href")),
  );

  expect(new Set(guideHrefs).size).toBe(37);
  expect(guideHrefs).toContain("/blog/woocommerce-invoice-automation");
  expect(guideHrefs).toContain("/blog/woocommerce-purchase-order-invoices");
  expect(guideHrefs).toContain("/blog/woocommerce-sepa-direct-debit-invoices");
  expect(guideHrefs).toContain("/blog/woocommerce-stripe-invoice-workflow");
  expect(guideHrefs).toContain("/blog/woocommerce-paypal-invoice-workflow");
});
