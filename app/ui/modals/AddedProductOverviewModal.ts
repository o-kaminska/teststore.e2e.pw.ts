import { Locator, Page } from "@playwright/test";

export class AddedProductOverviewModal {
  page: Page;
  proceedToCheckoutBtnModal: Locator;
  continueShoppingButton: Locator;
  modalHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.proceedToCheckoutBtnModal = this.page.locator(
      '//a[contains(text(),"Proceed to checkout")]'
    );
    this.continueShoppingButton = this.page.locator(
      '//button[contains(text(), "Continue shopping")]'
    );
    this.modalHeader = this.page.locator("#myModalLabel");
  }

  async clickProceedToCheckout() {
    await this.proceedToCheckoutBtnModal.click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }
}
