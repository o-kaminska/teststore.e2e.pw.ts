import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultsPage extends BasePage {
  productTitles: Locator;
  noMatchesMessage: Locator;
  constructor(page: Page) {
    super(page);
    this.noMatchesMessage = this.page.locator("#product-search-no-matches");
    this.productTitles = this.page.locator(".product-title");
  }

  async getProductsTitles() {
    const productsTitleList: string[] =
      await this.productTitles.allTextContents();
    return productsTitleList;
  }

  async verifyProductTitleIContainsSearchQuery(searchQuery: string) {
    const list = await this.getProductsTitles();
    for (const title of list) {
      expect(title.toLowerCase()).toContain(searchQuery.toLowerCase());
    }
  }

  async getNoMatchesMessage() {
    return this.noMatchesMessage.textContent();
  }
}
