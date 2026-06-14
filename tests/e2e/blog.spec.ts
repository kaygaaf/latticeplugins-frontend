import { expect, test } from "@playwright/test";

import { blogGuideCards } from "../../src/app/blog/guide-cards";

const expectedGuideHrefs = blogGuideCards.map((card) => card.href);
const expectedUniqueGuideHrefs = new Set(expectedGuideHrefs);

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

test("blog guide cards match the curated source-of-truth set", async ({ page }) => {
  await page.goto("/blog/", { waitUntil: "domcontentloaded" });

  const guideCards = page.getByTestId("blog-guide-card");
  await expect(guideCards).toHaveCount(blogGuideCards.length);

  const guideHrefs = await guideCards.locator("a[href^='/blog/']").evaluateAll((links) =>
    links.map((link) => link.getAttribute("href")).filter(Boolean),
  );

  expect(guideHrefs).toHaveLength(blogGuideCards.length);
  expect(new Set(guideHrefs).size).toBe(expectedUniqueGuideHrefs.size);

  for (const href of expectedUniqueGuideHrefs) {
    expect(guideHrefs).toContain(href);
  }
});
