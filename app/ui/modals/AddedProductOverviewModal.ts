import { Page } from "@playwright/test";

export class AddedProductOverviewModal {
  page: Page;
  proceedToCheckoutBtnModal: any;
  continueShoppingButton: any;

  constructor(page: Page) {
    this.page = page;
    this.proceedToCheckoutBtnModal = this.page.locator(
      '//a[contains(text(),"Proceed to checkout")]'
    );
    this.continueShoppingButton = this.page.locator(
      '//button[contains(text(), "Continue shopping")]'
    );
  }

  async clickProceedToCheckout() {
    await this.proceedToCheckoutBtnModal.click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }
}
