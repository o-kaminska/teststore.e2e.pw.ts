import { test as base } from "@playwright/test";
import {
  AccountData,
  CreateAccountPage,
} from "../../app/ui/pages/CreateAccountPage";
import { SignInPage } from "../../app/ui/pages/SignInPage";
import { HomePage } from "../../app/ui/pages/HomePage";
import fs from "fs";
import { ClothesPage } from "../../app/ui/pages/ClothesPage";
import { SubcategoryPage } from "../../app/ui/pages/SubcategoryPage";
import { ProductDetailsPage } from "../../app/ui/pages/ProductDetailsPage";
import { CartPage } from "../../app/ui/pages/CartPage";
import { AccessoriesPage } from "../../app/ui/pages/AccessoriesPage";

type Fixture = {
  homePage: HomePage;
  createAccountPage: CreateAccountPage;
  signInPage: SignInPage;
  accountData: AccountData;
  clothesPage: ClothesPage;
  subcategoryPage: SubcategoryPage;
  productDetailsPage: ProductDetailsPage;
  cartPage: CartPage;
  accessoriesPage: AccessoriesPage;
};

export const test = base.extend<Fixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  createAccountPage: async ({ page }, use) => {
    const createAccountPage = new CreateAccountPage(page);
    await use(createAccountPage);
  },

  signInPage: async ({ page }, use) => {
    const signInPage = new SignInPage(page);
    await use(signInPage);
  },

  clothesPage: async ({ page }, use) => {
    const clothesPage = new ClothesPage(page);
    use(clothesPage);
  },

  subcategoryPage: async ({ page }, use) => {
    const subcategoryPage = new SubcategoryPage(page);
    use(subcategoryPage);
  },

  productDetailsPage: async ({ page }, use) => {
    const productDetailsPage = new ProductDetailsPage(page);
    use(productDetailsPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    use(cartPage);
  },

  accessoriesPage: async ({ page }, use) => {
    const accessoriesPage = new AccessoriesPage(page);
    use(accessoriesPage);
  },

  accountData: {},

  browser: async ({ browser }, use) => {
    await use(browser);
  },

  storageState: async ({ browser, accountData }, use) => {
    const filePath = "tests/auth/accountData.json";
    const isFileExist = fs.existsSync(filePath);
    if (!isFileExist) {
      const page = await browser.newPage();

      await page.goto(
        "https://teststore.automationtesting.co.uk/index.php?controller=registration"
      );
      const createAccountPage = new CreateAccountPage(page);
      await createAccountPage.createNewAccount(accountData);

      await page.waitForURL("");

      await page.context().storageState({ path: filePath });
      await page.close();
    }
    await use(filePath);
  },
});
