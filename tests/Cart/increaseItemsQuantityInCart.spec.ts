import { test, expect } from "../../app/fixtures/page.fixture";
import { purchaseOneProductByName } from "./purchaseProduct.helper";

test("BC-2 - Quantity of products in the cart can be increased by 3", async ({
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

  await expect(cartPage.cartSummaryComponent.totalItems).toContainText(
    "4 items"
  );

  const calculatedProductsPrice = await cartPage.calculateTotalProductsPrice();
  await expect(cartPage.cartSummaryComponent.itemsPrice).not.toHaveText("", {
    timeout: 10000,
  });

  expect(cartPage.cartSummaryComponent.itemsPrice).toContainText(
    `${calculatedProductsPrice}`
  );
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

  await expect(cartPage.noItemsMessage).toContainText(expectedMessage);
});
