import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

type AccountData = {
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthdate: string;
};

export class CreateAccountPage extends BasePage {
  saveButton: Locator;
  agreeTermConditionCheckbox: Locator;

  constructor(page: Page) {
    super(page);
    this.agreeTermConditionCheckbox = page.locator('[name="psgdpr"]');
    this.saveButton = page.locator('[data-link-action="save-customer"]');
  }

  async navigateToCreateAccountPage() {
    await this.navigateTo("?controller=registration");
  }

  getFieldLocatorByFieldId(name: string) {
    return this.page.locator(`[id='field-${name}']`);
  }

  get firstName() {
    return this.getFieldLocatorByFieldId("firstname");
  }
  get lastName() {
    return this.getFieldLocatorByFieldId("lastname");
  }
  get email() {
    return this.getFieldLocatorByFieldId("email");
  }
  get password() {
    return this.getFieldLocatorByFieldId("password");
  }
  get birthdate() {
    return this.getFieldLocatorByFieldId("birthday");
  }

  get genderMr() {
    return this.getFieldLocatorByFieldId("id_gender-1");
  }

  get genderMrs() {
    return this.getFieldLocatorByFieldId("id_gender-2");
  }

  async selectGender(gender: string) {
    if (gender === "Mr") {
      await this.genderMr.click();
    } else if (gender === "Mrs") {
      await this.genderMrs.click();
    } else {
      throw Error("Gender should be Mr or Mrs");
    }
  }

  async checkTermConditionsAgreement() {
    await this.agreeTermConditionCheckbox.click();
  }

  async clickOnSave() {
    await this.saveButton.click();
  }

  async fillCreateAccountForm(accountData: AccountData) {
    await this.selectGender(accountData.gender);
    await this.firstName.fill(accountData.firstName);
    await this.lastName.fill(accountData.lastName);
    await this.email.fill(accountData.email);
    await this.password.fill(accountData.password);
    await this.birthdate.fill(accountData.birthdate);
  }

  async createNewAccount(accountData: AccountData) {
    await this.fillCreateAccountForm(accountData);
    await this.checkTermConditionsAgreement();
    await this.clickOnSave();
  }
}
