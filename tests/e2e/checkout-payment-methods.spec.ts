import { expect, test } from "@playwright/test";

const PAID_PRODUCT = {
  id: 14,
  name: "Lattice Commerce Suite",
};

test("checkout exposes invoice and bank transfer methods while Stripe remains unavailable without live keys", async ({ page }) => {
  await page.goto(`/cart/?add-to-cart=${PAID_PRODUCT.id}`, {
    waitUntil: "domcontentloaded",
  });

  await expect(page.locator('main[data-page="cart"]')).toHaveCount(1);
  await expect(page.getByText(PAID_PRODUCT.name, { exact: true })).toBeVisible();
  await expect(page.getByText("Your cart is currently empty", { exact: true })).toHaveCount(0);

  await page.goto("/checkout/", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveURL(/\/checkout\/?$/);
  await expect(page.locator('main[data-page="checkout"]')).toHaveCount(1);
  await expect(page.getByRole("form", { name: "Checkout" })).toBeVisible();

  await expect(page.getByText("Manual invoice / bank transfer", { exact: true })).toBeVisible();
  await expect(page.locator('input[name="payment_method"][value="bacs"]')).toHaveCount(1);
  await expect(page.locator('input[name="payment_method"][value="lattice_stripe"]')).toHaveCount(0);
  await expect(page.getByText("Loading secure payment form", { exact: false })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Place order" })).toBeVisible();
});
