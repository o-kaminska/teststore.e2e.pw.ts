import { Page, expect } from "@playwright/test";
import { HomePage } from "../../app/ui/pages/HomePage";
import { ClothesPage } from "../../app/ui/pages/ClothesPage";
import { SubcategoryPage } from "../../app/ui/pages/SubcategoryPage";
import { ProductDetailsPage } from "../../app/ui/pages/ProductDetailsPage";

export async function purchaseOneProductByName(
  categoryName: string,
  subcategoryName: string,
  productName: string,
  page: Page
) {
  const homePage = new HomePage(page);
  const clothesPage = new ClothesPage(page);
  const subcategoryPage = new SubcategoryPage(page);
  const productDetailsPage = new ProductDetailsPage(page);

  await homePage.navigateToHomePage();
  await homePage.headerTopMenu.clickOnCategoryByName(categoryName);
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
}
