import { test, expect } from '../../fixtures/baseTest';

test.describe('Job Details Page', () => {
  test('should display correct job title for Senior Product Manager position', async ({ navigateToJobDetails }) => {
    const { jobDetailsPageWithTab } = navigateToJobDetails;
    const jobDetails = await jobDetailsPageWithTab.getJobDetails(0);
    expect(jobDetails.title).toBe('Sr. Director, Data Science');
  });
});
