import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { CareersPage } from '../pages/CareersPage.js';
import { JobDetailsPage } from '../pages/JobDetailsPage.js';
import { JobFormPage } from '../pages/JobFormPage.js';
// Extend the base test with custom fixtures
export const test = base.extend({
  // Define fixtures that will be available in all tests
  homepage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  careersPage: async ({ page }, use) => {
    await use(new CareersPage(page));
  },
  jobDetailsPage: async ({ page }, use) => {
    await use(new JobDetailsPage(page));
  },
  jobFormPage: async ({ page }, use) => {
    await use(new JobFormPage(page));
  },

  // create page objects with a new tab
  createPageWithTab: async ({}, use) => {
    await use({
      createJobDetailsPage: (tab) => new JobDetailsPage(tab),
      createJobFormPage: (tab) => new JobFormPage(tab)
    });
  },

  // Common navigation steps
  navigateToJobDetails: async ({ homepage, careersPage, createPageWithTab }, use) => {
    // Go to homepage and click Careers
    await homepage.goto();
    await homepage.clickCareers();

    // Click on Currrent Job Openings, opens new tab
    const jobListTab = await careersPage.clickCurrentJobOpeningsButton();

    // Navigate to job details
    const jobDetailsPageWithTab = createPageWithTab.createJobDetailsPage(jobListTab);
    await jobDetailsPageWithTab.clickViewJob();

    await use({ jobListTab, jobDetailsPageWithTab });
  }
});

export { expect } from '@playwright/test'; 