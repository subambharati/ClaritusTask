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

  async assertEmailValidation() {
    await this.clickSubmit();
    const validationMessage = await this.getValidationMessage(this.emailInput);
    return validationMessage;
  }

  async clearForm(){
    await this.clearButton.click();
  }
}
