import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { SubcategoriesComponent } from "../components/SubcategoriesComponent";

export class AccessoriesPage extends BasePage {
  subcategories: SubcategoriesComponent;
  constructor(page: Page) {
    super(page);
    this.subcategories = new SubcategoriesComponent(page);
  }
}
