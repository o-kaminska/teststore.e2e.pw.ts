import { Page } from "@playwright/test";

export abstract class BaseComponent {
  protected page: Page;
  protected pageTitle: any;

  constructor(page: Page) {
    this.page = page;
  }
}
