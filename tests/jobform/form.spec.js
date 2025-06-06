import { test, expect } from '../../fixtures/baseTest';

test.describe('Job Application Flow', () => {
  let jobFormPage;

  test.beforeEach(async ({ navigateToJobDetails, createPageWithTab }) => {
    const { jobListTab, jobDetailsPageWithTab } = navigateToJobDetails;
    
    // Click the job
    await jobDetailsPageWithTab.ClickJob(0);

    // Initialize job form page with the new tab
    jobFormPage = createPageWithTab.createJobFormPage(jobListTab);
    await jobFormPage.clickApply();
  });

  test('should show validation for invalid email input', async ({ page }) => {
    await jobFormPage.fillDetails('subam', 'test', 'invalid-email', '1234567890', 'Delhi');
    await jobFormPage.clickSubmit();
    const validationMessage = await jobFormPage.assertEmailValidation();
    if (page.context().browser().browserType().name() === 'chromium') {
      expect(validationMessage).toContain("Please include an '@' in the email address.");
    }
    else if (page.context().browser().browserType().name() === 'firefox'){
      expect(validationMessage).toContain("Please enter an email address.");
    }
    else {
      expect(validationMessage).toContain("Enter an email address");
    }
  });

  test('should show required message when clicked on clear button', async () => {
    await jobFormPage.fillDetails('subam', 'test', 'invalid-email', '1234567890', 'Delhi');
    await jobFormPage.clearForm();
  });
});