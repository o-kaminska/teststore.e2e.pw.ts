import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderNavigationComponent } from "../components/HeaderNavigationComponent";

export class HomePage extends BasePage {
  headerNavigation: HeaderNavigationComponent;

  constructor(page: Page) {
    super(page);
    this.headerNavigation = new HeaderNavigationComponent(page);
  }

  async navigateToSignInPage() {
    await this.navigateTo("");
    await this.headerNavigation.clickOnSignIn();
  }

  get signOut() {
    return this.headerNavigation.signOut;
  }

  async clickOnSignOut() {
    await this.signOut.click();
  }

  get accountName() {
    return this.page.locator(".account span").innerText();
  }
}
