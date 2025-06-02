import { test, expect } from "../../app/fixtures/page.fixture";
import { purchaseOneProductByName } from "./purchaseProduct.helper";

test("TS-10 - Remove item from cart - cart should be empty", async ({
  cartPage,
  page,
}) => {
  const expectedText = "There are no more items in your cart";
  const categoryName = "Accessories";
  const subcategoryName = "Home Accessories";
  const productName = "Mug Today is a good day";

  await purchaseOneProductByName(
    categoryName,
    subcategoryName,
    productName,
    page
  );

  await cartPage.clickOnDeleteItem();

  await expect(cartPage.noItemsMessage).toContainText(expectedText);
});
