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

  test('should show validation for invalid email input', async ({ page }) => {
    await jobFormPage.fillDetails('subam', 'test', 'invalid-email', '1234567890', 'Delhi');
    await jobFormPage.clickSubmit();
    const validationMessage = await jobFormPage.getEmailValidation();
    if (page.context().browser().browserType().name() === 'chromium') {
      expect(validationMessage).toContain("Please include an '@' in the email address.");
    }
    //add conditions to check for other browsers
  });

  test('should show required message when clicked on clear button', async ( {page} ) => {
    await jobFormPage.fillDetails('subam', 'test', 'invalid-email', '1234567890', 'Delhi');
    await jobFormPage.clearForm();
    const validationMessage = await jobFormPage.getFirstNameValidation();
    if (page.context().browser().browserType().name() === 'chromium') {
      expect(validationMessage).toContain("Please fill out this field.");
    }
    //add conditions to check for other browsers
  });
});