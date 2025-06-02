import { Page } from "@playwright/test";
import { BaseComponent } from "./BaseComponent";

export class HeaderComponent extends BaseComponent {
  constructor(page: Page) {
    super(page);
  }
}
