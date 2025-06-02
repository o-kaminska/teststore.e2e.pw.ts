import { test, expect } from "../../app/fixtures/page.fixture";

test("TS-7 - Add to cart women 1 item successful flow", async ({
  homePage,
  clothesPage,
  subcategoryPage,
  productDetailsPage,
  cartPage,
  page,
}) => {
  const subcategoryName = "Women";
  const productName = "Hummingbird printed sweater";

  await homePage.navigateToHomePage();
  await homePage.headerTopMenu.clickOnClothesCategory();
  await clothesPage.subcategories.clickOnSubcategoryByName(subcategoryName);
  await subcategoryPage.clickOnProduct(productName);
  await productDetailsPage.clickAddToCart();
  await expect(productDetailsPage.addedProductOverview.modalHeader).toBeVisible(
    { timeout: 10000 }
  );
  await expect(
    productDetailsPage.addedProductOverview.proceedToCheckoutBtnModal
  ).toBeVisible({ timeout: 10000 });
  await productDetailsPage.addedProductOverview.clickProceedToCheckout();

  const title = await cartPage.getCartPageTitle();
  const name = await cartPage.getProductName();
  const count = await cartPage.getProductCount();

  expect(title).toBe("SHOPPING CART");
  expect(name).toBe(productName);
  expect(count).toEqual(1);
});
