import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { AddedProductOverviewModal } from "../modals/AddedProductOverviewModal";

export class ProductDetailsPage extends BasePage {
  private addToCartButton: Locator;
  addedProductOverview: AddedProductOverviewModal;

  constructor(page: Page) {
    super(page);
    this.addedProductOverview = new AddedProductOverviewModal(page);
    this.addToCartButton = this.page.locator(
      '//button[@data-button-action="add-to-cart"]'
    );
  }

  async clickAddToCart() {
    await this.addToCartButton.click({ delay: 5000 });
  }
}
