import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

export class CartSummaryComponent extends BaseComponent {
  readonly proceedToCheckoutButton: Locator;
  readonly totalItems: Locator;
  readonly itemsPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.proceedToCheckoutButton = this.page.locator(
      '//a[text()="Proceed to checkout"]'
    );
    this.totalItems = this.page.locator(".js-subtotal");
    this.itemsPrice = this.page.locator(
      "//*[@id='cart-subtotal-products']/span[2]"
    );
  }

  async getTotalItemsCount() {
    const value = await this.totalItems.innerText();
    const parsed = parseInt(value.replace("item", "").trim());
    return parsed;
  }

  async getItemsPrice() {
    const price = await this.itemsPrice.innerText();
    const parsed = parseFloat(price.replace("$", ""));
    return parsed;
  }
}
