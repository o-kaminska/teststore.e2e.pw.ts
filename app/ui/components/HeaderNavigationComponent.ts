import { Page, Locator } from "@playwright/test";
import { HeaderComponent } from "./HeaderComponent";

export class HeaderNavigationComponent extends HeaderComponent {
  signInIcon: Locator;

  constructor(page: Page) {
    super(page);
    this.signInIcon = page.locator("//div[@id='_desktop_user_info']");
  }

  async clickOnSignIn() {
    await this.signInIcon.click();
  }
}
