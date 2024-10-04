import { test as baseTest } from "@playwright/test";
import { FormPage } from "../pages/FormPage.js";

export const test = baseTest.extend({
  formPage: async ({ page, context }, use) => {
    await use(new FormPage(page, context));
  },
});
