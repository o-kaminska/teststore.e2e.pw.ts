import { test } from "../fixtures/page.fixture";
import { expect } from "@playwright/test";
import { accountData } from "./accountData.data";

for (const data of accountData) {
  test(`CA-1 Create new account successful flow by ${data.id}`, async ({
    homePage,
    createAccountPage,
    signInPage,
  }) => {
    await homePage.navigateToSignInPage();
    await signInPage.clickOnCreateNewAccount();
    await createAccountPage.createNewAccount(data);
  });
}
