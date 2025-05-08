import { Page } from "@playwright/test";

export abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async navigateTo(url: string) {
    await this.page.goto(url);
  }

  protected getFieldLocatorByFieldId(name: string) {
    return this.page.locator(`[id='field-${name}']`);
  }
}
