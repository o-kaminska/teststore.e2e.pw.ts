import { Page, Locator } from "@playwright/test";
import { HeaderComponent } from "./HeaderComponent";

export class HeaderNavigationComponent extends HeaderComponent {
  signIn: Locator;
  signOut: Locator;
  accountName: Locator;

  constructor(page: Page) {
    super(page);
    this.signIn = page.locator("//div[@id='_desktop_user_info']");
    this.signOut = page.locator(".logout");
    this.accountName = page.locator(".account");
  }

  async clickOnSignIn() {
    await this.signIn.click();
  }
}
