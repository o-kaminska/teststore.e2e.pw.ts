import { Page } from "@playwright/test";

export class HeaderComponent {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
