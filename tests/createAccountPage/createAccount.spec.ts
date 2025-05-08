import { test } from "../fixtures/page.fixture";
import { expect } from "@playwright/test";
import { accountData } from "./accountData.data";

test.beforeEach(
  "Navigate to SignIn link and click on Create new account",
  async ({ homePage, signInPage }) => {
    await homePage.navigateToSignInPage();
    await signInPage.clickOnCreateNewAccount();
  }
);

for (const data of accountData) {
  test(`CA-1 - Create new account successful flow by ${data.id}`, async ({
    homePage,
    createAccountPage,
  }) => {
    await createAccountPage.createNewAccount(data);

    await expect(homePage.signOut).toBeVisible();
    const accountName = await homePage.accountName;
    expect(accountName).toBe(`${data.firstName} ${data.lastName}`);
  });
}

test("CA-2 - New account is not created when T&C are not checked", async ({
  createAccountPage,
  homePage,
}) => {
  await createAccountPage.fillCreateAccountForm(accountData[0]);
  await createAccountPage.clickOnSave();

  await expect(homePage.signOut).not.toBeVisible();
});
