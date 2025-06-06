import { expect } from '@playwright/test';

export class JobFormPage {
  constructor(page) {
    this.page = page;
    this.applyButton = page.locator("//a[@data-ui='apply-button']");
    this.firstNameInput = page.locator("//input[@data-ui='firstname']");
    this.lastNameInput = page.locator("//input[@data-ui='lastname']");
    this.emailInput = page.locator("//input[@data-ui='email']");
    this.phoneInput = page.locator("//div[@data-ui='phone']//input");
    this.addressInput = page.locator("//input[@data-ui='address']");
    this.submitButton = page.locator("//button[@data-ui='apply-button']"); 
    this.clearButton = page.locator("//a[@data-ui='clear-section-0']");
    this.form = page.locator("//div[@class='styles--3qHIU']/input");
  }

  async clickApply() {
    await this.applyButton.click();
  }

  async fillDetails(firstName, lastName, email, phone, address) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.addressInput.fill(address);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async getValidationMessage(input) {
    const element = await input.elementHandle();
    return await this.page.evaluate(el => el.validationMessage, element);
  }

  async getEmailValidation() {
    await this.clickSubmit();
    const validationMessage = await this.getValidationMessage(this.emailInput);
    return validationMessage;
  }

  async getFirstNameValidation(){
    await this.clickSubmit();
    const validationMessage = await this.getValidationMessage(this.firstNameInput);
    return validationMessage;
  }

  async clearForm(){
    await this.clearButton.click();
  }

  async checkFormData(){
    const count = await this.form.count();
    let formData = [];
    for (let index = 0; index < count; index++){
      const data = await this.form.nth(index).getAttribute('value');
      formData.push(data);
    }
    return formData;
  }

  async isFormEmpty() {
    const formData = await this.checkFormData();
    return formData.every(value => value === null || value === '');
  }
}
