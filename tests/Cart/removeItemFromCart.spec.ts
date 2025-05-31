import { test, expect } from "../../app/fixtures/page.fixture";

test("Remove item from cart - cart should be empty", async ({
  cartPage,
  cartController,
}) => {
  const expectedText = "There are no more items in your cart";

  await cartController.addProductToCart(16, 1);

  await cartPage.navigateToCartPage();
  await cartPage.clickOnDeleteItem();

  await expect(cartPage.noItemsMessage).toContainText(expectedText);
});
