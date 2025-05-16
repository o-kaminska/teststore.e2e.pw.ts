import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderNavigationComponent } from "../components/HeaderNavigationComponent";
import { HeaderTopMenuComponent } from "../components/HeaderTopMenuComponent";

export class HomePage extends BasePage {
  headerNavigation: HeaderNavigationComponent;
  headerTopMenu: HeaderTopMenuComponent;

  constructor(page: Page) {
    super(page);
    this.headerNavigation = new HeaderNavigationComponent(page);
    this.headerTopMenu = new HeaderTopMenuComponent(page);
  }

  async navigateToSignInPage() {
    await this.navigateTo("");
    await this.headerNavigation.clickOnSignIn();
  }

  async navigateToHomePage() {
    await this.navigateTo("");
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
