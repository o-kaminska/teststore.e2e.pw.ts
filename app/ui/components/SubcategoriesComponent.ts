import { Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

export class SubcategoriesComponent extends BaseComponent {
  constructor(page: Page) {
    super(page);
  }

  getSubcategoryLocatorByTitle(title: string) {
    return this.page.locator(`//a[@title='${title}']`);
  }

  async clickOnSubcategoryByName(name: string) {
    await this.getSubcategoryLocatorByTitle(name).click();
  }
}
