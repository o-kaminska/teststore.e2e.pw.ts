import { request } from "@playwright/test";
import { UserController } from "./app/api/controllers/UserController";

export default async function globalSetUp() {
  const apiContext = await request.newContext({
    baseURL: process.env.URL,
    extraHTTPHeaders: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  const userController = new UserController(apiContext);
  const response = await userController.signInUser(
    process.env.EMAIL!,
    process.env.PASSWORD!
  );

  await apiContext.storageState({ path: "tests/storage-state.json" });
  await apiContext.dispose();
}
