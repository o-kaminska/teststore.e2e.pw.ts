import { Locator, Page } from "@playwright/test";

export class AddedProductOverviewModal {
  private page: Page;
  readonly proceedToCheckoutBtnModal: Locator;
  readonly continueShoppingButton: Locator;
  readonly modalHeader: Locator;

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
    // await this.proceedToCheckoutBtnModal.click({ force: true });
    await this.proceedToCheckoutBtnModal.click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }
}
