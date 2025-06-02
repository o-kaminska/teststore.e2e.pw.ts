import { test, expect } from "../../app/fixtures/page.fixture";
import { Account } from "../../app/api/types/AccountType";
import { faker } from "@faker-js/faker";

test.use({ isAuthenticated: false });
test("TS-3 - Create new account by API", async ({
  userController,
  homePage,
  signInPage,
}) => {
  const newAccount: Account = {
    id_gender: 1,
    firstname: faker.person.firstName("male"),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    psgdpr: 1,
    submitCreate: 1,
  };
  console.log(newAccount);

  const response = await userController.registerUser(newAccount);

  await homePage.navigateToSignInPage();
  await signInPage.signInAsRegisteredUser({
    email: newAccount.email!,
    password: newAccount.password!,
  });

  await expect(homePage.signOut).toBeVisible();
  expect(await homePage.accountName).toContain(newAccount.firstname);
});
