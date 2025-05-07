import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignInPage extends BasePage {
  createNewAccountLink: Locator;
  constructor(page: Page) {
    super(page);
    this.createNewAccountLink = page.locator(
      '[data-link-action="display-register-form"]'
    );
  }

  async clickOnCreateNewAccount() {
    await this.createNewAccountLink.click();
  }
}
