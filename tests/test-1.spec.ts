import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://teststore.automationtesting.co.uk/index.php?");
  await page
    .getByRole("link", { name: "The best is yet to come' Framed poster" })
    .click();
  await page.getByRole("button", { name: " Add to cart" }).click();
  await page.getByRole("link", { name: " Proceed to checkout" }).click();
  await page.getByRole("link", { name: "delete" }).click();
  await expect(page.locator("#main")).toContainText(
    "There are no more items in your cart"
  );
});
