import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CartSummaryComponent } from "../components/CartSummaryComponent";

export class CartPage extends BasePage {
  productName: Locator;
  productCount: Locator;
  increaseProductQuantityButton: Locator;
  cartSummaryComponent: CartSummaryComponent;
  productsPrice: Locator;
  decreaseProductQuantityButton: Locator;
  noItemsMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.productName = this.page.locator('//a[@data-id_customization="0"]');
    this.productCount = this.page.locator(".js-cart-line-product-quantity");
    this.increaseProductQuantityButton = this.page.locator(
      ".js-increase-product-quantity"
    );
    this.decreaseProductQuantityButton = this.page.locator(
      ".js-decrease-product-quantity"
    );
    this.productsPrice = this.page.locator(
      ".product-line-grid-right .product-price > strong"
    );
    this.noItemsMessage = this.page.locator(".no-items");
    this.cartSummaryComponent = new CartSummaryComponent(page);
  }

  async getCartPageTitle() {
    return this.getPageTitle();
  }

  async getProductName() {
    return this.productName.innerText();
  }

  async getProductCount() {
    const count = await this.productCount.inputValue();
    return parseInt(count);
  }

  async clickProceedToCheckout() {
    await this.cartSummaryComponent.proceedToCheckoutButton.click();
  }

  async increaseProductQuantityByNumber(number: number) {
    for (let i = 1; i <= number; i++) {
      await this.increaseProductQuantityButton.click();
    }
  }

  async decreaseProductQuantityByNumber(number: number) {
    for (let i = 1; i <= number; i++) {
      await this.decreaseProductQuantityButton.click();
    }
  }

  async getProductsPrices() {
    return this.productsPrice.allInnerTexts();
  }

  async calculateTotalProductsPrice() {
    let totalPrice = 0;
    const prices = await this.getProductsPrices();

    for (const element of prices) {
      const value = parseFloat(element.replace("$", ""));
      totalPrice += value;
    }
    return totalPrice;
  }

  async getMessageText() {
    return this.noItemsMessage.innerText();
  }
}
