import { Locator, Page } from "@playwright/test";
import { HeaderComponent } from "./HeaderComponent";

export class HeaderTopMenuComponent extends HeaderComponent {
  private clothesCategory: Locator;
  private accessoriesCategory: Locator;
  private artCategory: Locator;
  private searchInput: Locator;

  constructor(page: Page) {
    super(page);
    this.clothesCategory = this.page.locator("//li[@id ='category-3']/a");
    this.accessoriesCategory = this.page.locator("//li[@id ='category-6']/a");
    this.artCategory = this.page.locator("//li[@id ='category-9']/a");
    this.searchInput = this.page.locator("//input[@aria-label='Search']");
  }

  async enterSearchValue(value: string) {
    await this.searchInput.pressSequentially(value);
    await this.searchInput.press("Enter");
  }
  async clickOnClothesCategory() {
    await this.clothesCategory.click();
  }

  async clickOnCategoryByName(categoryName: string) {
    switch (categoryName) {
      case "Clothes":
        await this.clothesCategory.click();
        break;
      case "Accessories":
        await this.accessoriesCategory.click();
        break;
      case "Art":
        await this.artCategory.click();
        break;
      default:
        throw Error("There is no such category");
    }
  }
}
