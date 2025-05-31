import { test as base, expect } from "@playwright/test";
import { AccountData, CreateAccountPage } from "../ui/pages/CreateAccountPage";
import { SignInPage } from "../ui/pages/SignInPage";
import { HomePage } from "../ui/pages/HomePage";
import { ClothesPage } from "../ui/pages/ClothesPage";
import { SubcategoryPage } from "../ui/pages/SubcategoryPage";
import { ProductDetailsPage } from "../ui/pages/ProductDetailsPage";
import { CartPage } from "../ui/pages/CartPage";
import { AccessoriesPage } from "../ui/pages/AccessoriesPage";
import { CartController } from "../api/controllers/CartController";
import { UserController } from "../api/controllers/UserController";
import { SearchResultsPage } from "../ui/pages/ SearchResultsPage";
import { ArtPage } from "../ui/pages/ArtPage";

export { expect };

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
  artPage: ArtPage;
  searchResultsPage: SearchResultsPage;
  isAuthenticated: boolean;
  cartController: CartController;
  userController: UserController;
  storageState: string;
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

  artPage: async ({ page }, use) => {
    const artPage = new ArtPage(page);
    use(artPage);
  },

  searchResultsPage: async ({ page }, use) => {
    const searchResultsPage = new SearchResultsPage(page);
    use(searchResultsPage);
  },

  cartController: async ({ request }, use) => {
    const cartController = new CartController(request);
    use(cartController);
  },

  userController: async ({ request }, use) => {
    const userController = new UserController(request);
    use(userController);
  },

  isAuthenticated: true,

  storageState: async ({ isAuthenticated }, use) => {
    const filePath = "tests/storage-state.json";
    if (isAuthenticated) {
      use(filePath);
    } else {
      use(undefined);
    }
  },

  request: async ({ playwright, storageState }, use) => {
    const apiRequestContext = await playwright.request.newContext({
      storageState,
    });
    await use(apiRequestContext);
    await apiRequestContext.dispose();
  },
});
