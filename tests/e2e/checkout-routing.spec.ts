import { expect, test } from "@playwright/test";

const PAID_PRODUCT = {
  id: 14,
  name: "Lattice Commerce Suite",
};

test("cart add-to-cart session reaches the classic WooCommerce checkout page", async ({ page }) => {
  await page.goto(`/cart/?add-to-cart=${PAID_PRODUCT.id}`, {
    waitUntil: "domcontentloaded",
  });

  await expect(page).toHaveURL(/\/cart\/?(?:\?.*)?$/);
  await expect(page.locator('main[data-page="cart"]')).toHaveCount(1);
  await expect(page.getByText(PAID_PRODUCT.name, { exact: true })).toBeVisible();
  await expect(page.getByText("Your cart is currently empty", { exact: true })).toHaveCount(0);

  await page.goto("/checkout/", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveURL(/\/checkout\/?$/);
  await expect(page.locator('main[data-page="checkout"]')).toHaveCount(1);
  await expect(page.getByRole("form", { name: "Checkout" })).toBeVisible();
  await expect(page.getByText("Billing details", { exact: true })).toBeVisible();
  await expect(page.getByRole("row", { name: /Lattice Commerce Suite\s+×\s+1\s+€49\.00/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Place order" })).toBeVisible();
  await expect(page.getByText("Your cart is currently empty", { exact: true })).toHaveCount(0);
});
