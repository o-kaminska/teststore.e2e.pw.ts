import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { SubcategoriesComponent } from "../components/SubcategoriesComponent";
import { FilterComponent } from "../components/FilterComponent";

export class AccessoriesPage extends BasePage {
  subcategories: SubcategoriesComponent;
  filterComponent: FilterComponent;
  pageHeader: Locator;
  constructor(page: Page) {
    super(page);
    this.subcategories = new SubcategoriesComponent(page);
    this.filterComponent = new FilterComponent(page);
    this.pageHeader = this.page.locator("//h1[text()='Accessories']");
  }
  async getAccessoriesTitle() {
    return this.getPageTitle();
  }
}
