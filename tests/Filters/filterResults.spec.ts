import { test, expect } from "../../app/fixtures/page.fixture";

test("TS-13 - Correct results shown when applying 2", async ({
  homePage,
  accessoriesPage,
}) => {
  const categoryName = "Accessories";
  const filterName = "Categories";
  const optionNumber = 1;

  await homePage.navigateToHomePage();
  await homePage.headerTopMenu.clickOnCategoryByName(categoryName);
  await expect(accessoriesPage.pageHeader).toBeVisible({ timeout: 10000 });

  await accessoriesPage.filterComponent.selectOptionByFilterNameAndOptionNumber(
    filterName,
    optionNumber
  );

  await accessoriesPage.filterComponent.activeFilters.waitFor({
    state: "visible",
  });

  await accessoriesPage.filterComponent.isSelectedFiltersInActiveList(
    filterName
  );
});

test("TS-14 - Clear filters - all selected filters are removed", async ({
  homePage,
  artPage,
}) => {
  const categoryName = "Art";
  const filterName: string[] = ["Dimension", "Selections"];
  const optionNumber: number[] = [2, 1];

  await homePage.navigateToHomePage();
  await homePage.headerTopMenu.clickOnCategoryByName(categoryName);
  await expect(artPage.pageHeader).toBeVisible({ timeout: 10000 });

  await artPage.filterComponent.selectOptionByFilterNameAndOptionNumber(
    filterName[0],
    optionNumber[0]
  );
  await artPage.filterComponent.selectOptionByFilterNameAndOptionNumber(
    filterName[1],
    optionNumber[1]
  );

  await artPage.filterComponent.clearAllFilters();
  await expect(artPage.filterComponent.activeFilterTitle).not.toBeVisible();
});
