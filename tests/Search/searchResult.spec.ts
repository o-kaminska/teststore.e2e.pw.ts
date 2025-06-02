import { test, expect } from "../../app/fixtures/page.fixture";

test("TS-11 - Search results - displays results that match the search query", async ({
  homePage,
  searchResultsPage,
}) => {
  const searchValue = "mug";

  await homePage.navigateToHomePage();
  await homePage.headerTopMenu.enterSearchValue(searchValue);
  await searchResultsPage.verifyProductTitleIContainsSearchQuery(searchValue);
});

test("Ts-12 - Proper message is shown when nothing matches with search query", async ({
  homePage,
  searchResultsPage,
}) => {
  const searchValue = " ";
  const expectedMessage = "No matches were found for your search";

  await homePage.navigateToHomePage();
  await homePage.headerTopMenu.enterSearchValue(searchValue);

  const message = await searchResultsPage.getNoMatchesMessage();
  expect(message).toBe(expectedMessage);
});
