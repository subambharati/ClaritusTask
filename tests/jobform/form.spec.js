import { test, expect } from '../../fixtures/baseTest';

test.describe('Job Application Flow', () => {
  let jobFormPage;

  test.beforeEach(async ({ navigateToJobDetails, createPageWithTab }) => {
    const { jobListTab, jobDetailsPageWithTab } = navigateToJobDetails;
    
    // Click the job
    await jobDetailsPageWithTab.ClickJob(0);
    jobFormPage = createPageWithTab.createJobFormPage(jobListTab);
    await jobFormPage.clickApply();
  });

  test('should show validation for invalid email input', async ({ page, testData}) => {
    const invalidData = testData.formData.invalid;
    await jobFormPage.fillDetails(
      invalidData.firstName,
      invalidData.lastName,
      invalidData.email,
      invalidData.phone,
      invalidData.location
    );
    await jobFormPage.clickSubmit();
    const validationMessage = await jobFormPage.getEmailValidation();
    if (page.context().browser().browserType().name() === 'chromium') {
      expect(validationMessage).toContain("Please include an '@' in the email address.");
    }
    //add conditions to check for other browsers
  });

  test('should show required message when clicked on clear and then submit button', async ( {page, testData} ) => {
    const validData = testData.formData.valid;
    await jobFormPage.fillDetails(
      validData.firstName,
      validData.lastName,
      validData.email,
      validData.phone,
      validData.location
    );
    await jobFormPage.clearForm();
    const validationMessage = await jobFormPage.getFirstNameValidation();
    if (page.context().browser().browserType().name() === 'chromium') {
      expect(validationMessage).toContain("Please fill out this field.");
    }
    const isFormEmpty = await jobFormPage.isFormEmpty();
    expect(isFormEmpty).toBe(true);
  });
});