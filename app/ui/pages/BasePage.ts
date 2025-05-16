import { Page } from "@playwright/test";

export abstract class BasePage {
  protected page: Page;
  protected pageTitle: any;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = this.page.locator(".h1");
  }

  protected async navigateTo(url: string) {
    await this.page.goto(url);
  }

  protected getFieldLocatorByFieldId(name: string) {
    return this.page.locator(`[id='field-${name}']`);
  }

  protected async getPageTitle() {
    return this.pageTitle.innerText();
  }
}
