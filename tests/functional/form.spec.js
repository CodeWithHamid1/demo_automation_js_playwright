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

  test("Test city field is disable until user don't add the state", async ({ formPage }) => {
    await formPage.validateUserIsOnRegistartionPage(config.data.title);
    const isDisabled = await formPage.isCityFieldDisabled();
    console.log(`City field is disabled: ${isDisabled}`);
  });

  test("Submit form without any value and validate form class should be was-validated", async ({ formPage }) => {
    await formPage.validateFormClassWithoutAnyValue("was-validated");
    console.log(`Form class is was-validated"`);
  });

  
});
