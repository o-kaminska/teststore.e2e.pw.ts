import { test, expect } from "../../app/fixtures/page.fixture";

test("BC-1 - Add to cart women 1 item successful flow", async ({
  homePage,
  clothesPage,
  subcategoryPage,
  productDetailsPage,
  cartPage,
}) => {
  const subcategoryName = "Women";
  const productName = "Hummingbird printed sweater";

  await homePage.navigateToHomePage();
  await homePage.headerTopMenu.clickOnClothesCategory();
  await clothesPage.subcategories.clickOnSubcategoryByName(subcategoryName);
  await subcategoryPage.clickOnProduct(productName);
  await productDetailsPage.clickAddToCart();
  await productDetailsPage.addedProductOverview.clickProceedToCheckout();

  const title = await cartPage.getCartPageTitle();
  const name = await cartPage.getProductName();
  const count = await cartPage.getProductCount();

  expect(title).toBe("SHOPPING CART");
  expect(name).toBe(productName);
  expect(count).toEqual(1);
});
