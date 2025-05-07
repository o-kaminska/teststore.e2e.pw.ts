import { test as base } from "@playwright/test";
import { CreateAccountPage } from "../../app/ui/pages/CreateAccountPage";
import { SignInPage } from "../../app/ui/pages/SignInPage";
import { HomePage } from "../../app/ui/pages/HomePage";

type Fixture = {
  homePage: HomePage;
  createAccountPage: CreateAccountPage;
  signInPage: SignInPage;
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
});
