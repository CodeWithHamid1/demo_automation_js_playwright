import { test } from "../../lib/BaseTest.js";
import { config } from "../../config/testConfig.js";

test.describe("Test For Demo Form", () => {

  test.beforeEach(async ({ formPage }) => {
    await formPage.visit();
  });

  test("Test form with all values", async ({ formPage }) => {
    await formPage.validateUserIsOnRegistartionPage(config.data.title);
    await formPage.fillTheFormData(config.data.firsteNam, config.data.lastName, config.data.email, config.data.phone);
    await formPage.addMoreData(config.data.dob, config.data.subject, config.data.address);
    await formPage.addImage();
    await formPage.setStateAndCity(config.data.state, config.data.city);
    await formPage.submitForm()
    await formPage.validateFormData(config.data.Message, config.data.firsteNam, config.data.email,config.data.Gender, config.data.phone, config.data.subject, config.data.address)
  });


  
});
