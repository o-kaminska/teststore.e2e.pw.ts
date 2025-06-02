import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

type UserDataForSignIn = {
  email: string;
  password: string;
};

export class SignInPage extends BasePage {
  private createNewAccountLink: Locator;
  private signInButton: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.createNewAccountLink = page.locator(
      '[data-link-action="display-register-form"]'
    );
    this.signInButton = page.locator("#submit-login");
    this.errorMessage = page.locator(".alert");
  }

  async clickOnCreateNewAccount() {
    await this.createNewAccountLink.click();
  }

  get email() {
    return this.getFieldLocatorByFieldId("email");
  }

  get password() {
    return this.getFieldLocatorByFieldId("password");
  }

  async signInAsRegisteredUser(userData: UserDataForSignIn) {
    await this.email.fill(userData.email);
    await this.password.fill(userData.password);
    await this.signInButton.click();
  }

  async getErrorMessageText() {
    return this.errorMessage.innerText();
  }
}
