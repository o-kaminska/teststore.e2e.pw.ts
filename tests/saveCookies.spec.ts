// import { test } from "./fixtures/page.fixture";
// import { promises } from "fs";

// test("save cookie", async ({ homePage, signInPage, context }) => {
//   await homePage.navigateToSignInPage();
//   await signInPage.signInAsRegisteredUser({
//     email: process.env.EMAIL!,
//     password: process.env.PASSWORD!,
//   });

//   const cookies = await context.cookies();
//   promises.writeFile("tests/cookies.json", JSON.stringify(cookies));
// });

// test("use cookie", async ({ context, page }) => {
//   await page.goto("https://teststore.automationtesting.co.uk/index.php");
//   const cookiesBuffer = await promises.readFile("tests/cookies.json");
//   const cookies = JSON.parse(cookiesBuffer.toString());
//   await context.addCookies(cookies);

//   console.log(cookies);
// });

// test("save storage state", async ({ context, page }) => {
//   await page.goto("https://teststore.automationtesting.co.uk/index.php");
//   await context.storageState({ path: "tests/storageState.json" });
// });

// test("work with storage state", async ({ browser }) => {
//   const context = await browser.newContext({
//     storageState: "tests/storageState.json",
//   });
//   const page = await context.newPage();
//   await page.goto("https://teststore.automationtesting.co.uk/index.php");
// });

import { test } from "./fixtures/page.fixture";
import { accountData } from "./createAccountPage/accountData.data";

test.use({ accountData: accountData[1] });
test("verify fixture with storage state", async ({ homePage }) => {
  await homePage.navigateToHomePage();
  await homePage.clickOnSignOut();
});
