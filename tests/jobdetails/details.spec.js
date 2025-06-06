import { test, expect } from '../../fixtures/baseTest';

test.describe('Job Details Page', () => {
  test('should display correct job title for first position', async ({ navigateToJobDetails, testData }) => {
    const { jobDetailsPageWithTab } = navigateToJobDetails;
    const jobDetailsData = testData.jobDetails.seniorDirector;
    const jobDetails = await jobDetailsPageWithTab.getJobDetails(0);
    expect(jobDetails.title).toBe(jobDetailsData.title);
  });
});
