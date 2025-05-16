import { expect } from "@playwright/test";
import { accountData } from "../createAccountPage/accountData.data";
import { test } from "../fixtures/page.fixture";
import { purchaseOneProductByName } from "./purchaseProduct.helper";

test.use({ accountData: accountData[1] });
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

test("BC-2 - Quantity of products in the cart can be increased by 3", async ({
  homePage,
  clothesPage,
  subcategoryPage,
  productDetailsPage,
  cartPage,
  page,
}) => {
  const categoryName = "Clothes";
  const subcategoryName = "Men";
  const productName = "Hummingbird printed t-shirt";

  await purchaseOneProductByName(
    categoryName,
    subcategoryName,
    productName,
    page
  );

  await cartPage.increaseProductQuantityByNumber(3);
  await page.waitForTimeout(2000);

  const actualItemsCount =
    await cartPage.cartSummaryComponent.getTotalItemsCount();
  const actualProductsPriceSummaryBlock =
    await cartPage.cartSummaryComponent.getItemsPrice();
  const calculatedProductsPrice = await cartPage.calculateTotalProductsPrice();
  expect(actualItemsCount).toEqual(4);
  expect(actualProductsPriceSummaryBlock).toEqual(calculatedProductsPrice);
});

test("BC-3 - Cart should be empty after decreasing product's quantity from 1 to 0", async ({
  cartPage,
  page,
}) => {
  const categoryName = "Accessories";
  const subcategoryName = "Home Accessories";
  const productName = "Mug Today is a good day";
  const expectedMessage = "There are no more items in your cart";

  await purchaseOneProductByName(
    categoryName,
    subcategoryName,
    productName,
    page
  );
  await cartPage.decreaseProductQuantityByNumber(1);

  await cartPage.noItemsMessage.waitFor({ state: "visible" });

  const actualMessage = await cartPage.getMessageText();
  expect(expectedMessage).toBe(actualMessage);
});
