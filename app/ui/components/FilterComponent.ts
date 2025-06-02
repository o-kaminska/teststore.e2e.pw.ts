import { expect, Locator, Page } from "@playwright/test";

export class FilterComponent {
  page: Page;
  clearAllButton: Locator;
  activeFilters: Locator;
  activeFilterTitle: Locator;
  constructor(page: Page) {
    this.page = page;
    this.clearAllButton = this.page.locator(
      '//button[contains(@class, "js-search-filters-clear-all")]'
    );
    this.activeFilters = this.page.locator(".filter-block");
    this.activeFilterTitle = this.page.locator(".active-filter-title");
  }

  async getOptionsLocatorsByFilterName(filterName: string) {
    return this.page.locator(
      `//p[text()="${filterName}"]/../div/following-sibling::ul//input[@type="checkbox"]`
    );
  }

  async selectOptionByFilterNameAndOptionNumber(
    filterName: string,
    optionNumber: number
  ) {
    const options = await this.getOptionsLocatorsByFilterName(filterName);
    const optionsCount = await options.count();

    console.log(options);
    console.log(optionsCount);

    if (optionsCount === 0) {
      throw new Error(`No filter options found for filter ${filterName}`);
    } else if (optionsCount !== 1) {
      if (optionsCount < 1 || optionsCount < optionNumber) {
        throw new Error(`No filter options found by number ${optionNumber}`);
      }
      await options.nth(optionNumber - 1).click();
    } else {
      await options.first().click();
    }
  }

  async clearAllFilters() {
    await this.clearAllButton.click();
  }

  async isSelectedFiltersInActiveList(filterName: string | string[]) {
    const activeFilterNames = await this.activeFilters.allInnerTexts();

    if (typeof filterName === "string") {
      console.log(activeFilterNames[0]);
      console.log(filterName);

      expect(activeFilterNames[0]).toContain(filterName);
    } else if (Array.isArray(filterName)) {
      for (const filter of activeFilterNames) {
        expect(filter).toContain(filterName);
      }
    }
  }
}
