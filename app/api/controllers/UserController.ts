import { APIRequestContext } from "@playwright/test";
import { Account } from "../types/AccountType";

export class UserController {
  request: APIRequestContext;
  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async signInUser(email: string, password: string) {
    const requestBody = {
      back: "https://teststore.automationtesting.co.uk/index.php",
      email: email,
      password: password,
      submitLogin: "1",
    };

    const response = await this.request.post(
      "/index.php?controller=authentication&back=https://teststore.automationtesting.co.uk/index.php",
      {
        form: requestBody,
      }
    );

    const status = response.status();
    if (![200, 302].includes(status)) {
      throw new Error(`Unexpected status: ${status}`);
    }
    return response;
  }

  async registerUser(accountBody: Account) {
    const requestBody = {
      ...accountBody,
      psgdpr: 1,
      submitCreate: 1,
    };
    const response = await this.request.post(
      "/index.php?controller=registration",
      {
        form: requestBody,
      }
    );

    const status = response.status();
    if (![200, 302].includes(status)) {
      throw new Error(`Unexpected status: ${status}`);
    }
    return response;
  }
}
