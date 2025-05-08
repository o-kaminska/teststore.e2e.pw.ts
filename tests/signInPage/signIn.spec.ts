import { test } from "../fixtures/page.fixture";
import { expect } from "@playwright/test";

test("SI-1 - Sign in as registered user successful flow", async ({
  homePage,
  signInPage,
}) => {
  await homePage.navigateToSignInPage();
  await signInPage.signInAsRegisteredUser({
    email: process.env.EMAIL!,
    password: process.env.PASSWORD!,
  });

  await expect(homePage.signOut).toBeVisible();
});

test("SI-2 - Error message 'Authentication failed.' should be shown when entered invalid email", async ({
  homePage,
  signInPage,
}) => {
  const errorText = "Authentication failed.";

  await homePage.navigateToSignInPage();
  await signInPage.signInAsRegisteredUser({
    email: "wrongEmail@test.com",
    password: process.env.PASSWORD!,
  });

  expect(await signInPage.getErrorMessageText()).toBe(errorText);
});

test("SI-3 - Error message 'Authentication failed.' should be shown when entered invalid password", async ({
  homePage,
  signInPage,
}) => {
  const errorText = "Authentication failed.";

  await homePage.navigateToSignInPage();
  await signInPage.signInAsRegisteredUser({
    email: process.env.EMAIL!,
    password: "wrongPassword",
  });

  expect(await signInPage.getErrorMessageText()).toBe(errorText);
});
