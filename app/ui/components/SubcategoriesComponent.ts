import { Page } from "@playwright/test";

export class SubcategoriesComponent {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  getSubcategoryLocatorByTitle(title: string) {
    return this.page.locator(`//a[@title='${title}']`);
  }

  async clickOnSubcategoryByName(name: string) {
    await this.getSubcategoryLocatorByTitle(name).click();
  }
}
