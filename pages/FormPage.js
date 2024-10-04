import { expect } from "@playwright/test";

export class FormPage {
  constructor(page, context) {
    this.page = page;
    this.context = context;
    this.studentRegistrationForm = page.locator("//*[text()='Student Registration Form']")
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.userEmail = page.locator("#userEmail");
    this.maleGender = page.locator("//*[text()='Male']");
    this.mobileNumber = page.locator("#userNumber");
    this.dateOfBirth = page.locator("#dateOfBirthInput");
    this.subject = page.locator("#subjectsInput");
    this.hobbieSport = page.locator("//*[text()='Sports']");
    this.uploadPicture = page.locator("#uploadPicture");
    this.currentAddress = page.locator("#currentAddress");
    this.state = page.locator("#react-select-3-input");
    this.city = page.locator("#react-select-4-input")
    this.submitBtn = page.locator("#submit")
    this.successMessage = page.locator("#example-modal-sizes-title-lg")
    this.studentName = page.locator("//*[text()='Student Name']/following-sibling::td")
    this.studentEmail = page.locator("//*[text()='Student Email']/following-sibling::td")
    this.studentGender = page.locator("//*[text()='Gender']/following-sibling::td")
    this.studentMobile = page.locator("//*[text()='Mobile']/following-sibling::td")
    this.studentSubject = page.locator("//*[text()='Subjects']/following-sibling::td")
    this.studentAddress = page.locator("//*[text()='Address']/following-sibling::td")
  }

  async visit() {
    await this.page.goto('');
  }

  async validateUserIsOnRegistartionPage(text) {
    await expect(this.studentRegistrationForm).toBeVisible();
    expect(await this.studentRegistrationForm.textContent()).toEqual(text);
  }

  async fillTheFormData(fName, lName, email, mobile) {
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.userEmail.fill(email);
    await this.maleGender.click();
    await this.mobileNumber.fill(mobile);
  }

  async addMoreData(db, sbj, address) {
    await this.dateOfBirth.fill(db);
    await this.subject.fill(sbj);
    await this.subject.press('Enter')
    await this.hobbieSport.click();
    await this.currentAddress.click()
    await this.currentAddress.fill(address)
  }

  async addImage(){
    await this.uploadPicture.setInputFiles('demo.png')
  }

  async setStateAndCity(s, c){
    await this.state.fill(s)
    await this.state.press('Enter')
    await this.city.fill(c)
    await this.city.press('Enter')
  }

  async submitForm() {
    await this.submitBtn.click()
  }

  async validateFormData(text, sname, semail, sgender, smobile, ssubject, saddress) {
    await expect(this.successMessage).toBeVisible();
    expect(await this.successMessage.textContent()).toEqual(text);
    expect(await this.studentName.textContent()).toContain(sname);
    expect(await this.studentEmail.textContent()).toEqual(semail);
    expect(await this.studentGender.textContent()).toEqual(sgender);
    expect(await this.studentMobile.textContent()).toEqual(smobile);
    expect(await this.studentSubject.textContent()).toEqual(ssubject);
    expect(await this.studentAddress.textContent()).toEqual(saddress)

  }
}
