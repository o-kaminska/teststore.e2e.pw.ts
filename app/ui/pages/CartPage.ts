import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CartSummaryComponent } from "../components/CartSummaryComponent";

export class CartPage extends BasePage {
  cartSummaryComponent: CartSummaryComponent;
  private productName: Locator;
  private productCount: Locator;
  private increaseProductQuantityButton: Locator;
  private productsPrice: Locator;
  private decreaseProductQuantityButton: Locator;
  private deleteIcon: Locator;
  readonly noItemsMessage: Locator;

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
    this.deleteIcon = this.page.locator(".remove-from-cart");
    this.noItemsMessage = this.page.locator(".no-items");

    this.cartSummaryComponent = new CartSummaryComponent(page);
  }

  async navigateToCartPage() {
    await this.navigateTo("/index.php?controller=cart");
  }
  async getCartPageTitle() {
    return this.getPageTitleText();
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

  async clickOnDeleteItem() {
    return this.deleteIcon.click();
  }
}
