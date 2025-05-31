import { APIRequestContext } from "@playwright/test";

export class CartController {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async addProductToCart(productId: number, quantity: number) {
    const requestBody = {
      token: "41afa71c91db8aee30e803491072c7c0",
      id_product: productId,
      id_customization: "0",
      "group[4]": "22",
      qty: quantity,
      add: "1",
      action: "update",
    };

    console.log(requestBody);

    const response = await this.request.post(
      "https://teststore.automationtesting.co.uk/index.php?controller=cart",
      {
        form: requestBody,
        failOnStatusCode: true,
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          origin: "https://teststore.automationtesting.co.uk",
          referer:
            "https://teststore.automationtesting.co.uk/index.php?id_product=16&id_product_attribute=28&rewrite=mountain-fox-notebook&controller=product",
          "sec-ch-ua": '"Not.A/Brand";v="99", "Chromium";v="136"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.25 Safari/537.36",
          "x-requested-with": "XMLHttpRequest",
        },
      }
    );

    console.log(response.status());

    return response;
  }
}
