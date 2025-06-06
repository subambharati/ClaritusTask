import { test, expect } from '../../fixtures/baseTest';

test.describe('Job Details Page', () => {
  test('should display correct job title for Senior Product Manager position', async ({ navigateToJobDetails }) => {
    const { jobDetailsPageWithTab } = navigateToJobDetails;
    
    // Get job details before clicking
    const jobDetails = await jobDetailsPageWithTab.getJobDetails(0);
    expect(jobDetails.title).toBe('Senior Product Manager');
    
    // Click the job after verifying details
    await jobDetailsPageWithTab.ClickJob(0);
  });
});
