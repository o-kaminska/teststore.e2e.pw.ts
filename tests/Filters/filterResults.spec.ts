import { test, expect } from "../../app/fixtures/page.fixture";

test("Correct results shown when applying 2", async ({
  homePage,
  accessoriesPage,
}) => {
  const categoryName = "Accessories";
  const filterName = "Categories";
  const optionNumber = 1;

  await homePage.navigateToHomePage();
  await homePage.headerTopMenu.clickOnCategoryByName(categoryName);
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
  //   console.log(result);

  //   expect(result).toBeTruthy();
});

test("Clear filters - all selected filters are removed", async ({
  homePage,
  artPage,
}) => {
  const categoryName = "Art";
  const filterName: string[] = ["Dimension", "Selections"];
  const optionNumber: number[] = [2, 1];

  await homePage.navigateToHomePage();
  await homePage.headerTopMenu.clickOnCategoryByName(categoryName);
  await artPage.filterComponent.selectOptionByFilterNameAndOptionNumber(
    filterName[0],
    optionNumber[0]
  );
  await artPage.filterComponent.selectOptionByFilterNameAndOptionNumber(
    filterName[1],
    optionNumber[1]
  );
  //   await artPage.filterComponent.clearAllFilters();
  const result = await artPage.filterComponent.isSelectedFiltersInActiveList(
    filterName
  );
  // expect(result).toBeFalsy();
});
