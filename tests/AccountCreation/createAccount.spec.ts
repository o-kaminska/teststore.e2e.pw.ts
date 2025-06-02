import { test, expect } from "../../app/fixtures/page.fixture";
test.use({ isAuthenticated: false });

import { accountData } from "./accountData.data";

test.beforeEach(
  "Navigate to SignIn link and click on Create new account",
  async ({ homePage, signInPage, page }) => {
    await page.goto("");
    await homePage.navigateToSignInPage();
    await signInPage.clickOnCreateNewAccount();
  }
);

for (const data of accountData) {
  test(`TS-1 - Create new account successful flow by ${data.id}`, async ({
    homePage,
    createAccountPage,
  }) => {
    await createAccountPage.createNewAccount(data);

    await expect(homePage.signOut).toBeVisible();
    const accountName = await homePage.accountName;
    expect(accountName).toBe(`${data.firstName} ${data.lastName}`);
  });
}

test("TS-2 - New account is not created when T&C are not checked", async ({
  createAccountPage,
  homePage,
}) => {
  await createAccountPage.fillCreateAccountForm(accountData[0]);
  await createAccountPage.clickOnSave();

  await expect(homePage.signOut).not.toBeVisible();
});
