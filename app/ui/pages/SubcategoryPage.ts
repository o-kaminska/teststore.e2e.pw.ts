import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SubcategoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  getProductLocatorByTitle(title: string) {
    return this.page.locator(`//a[contains(text(),"${title}")]`);
  }

  async clickOnProduct(name: string) {
    await this.getProductLocatorByTitle(name).click();
  }
}
