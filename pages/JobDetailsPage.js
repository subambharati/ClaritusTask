export class JobDetailsPage {
    constructor(page) {
      this.page = page;
      this.viewJobButton = page.locator("//a[@data-ui='open-jobs-button']");
      this.jobListItems = page.locator("//li[@data-ui='job']");
      this.cookieConsent = page.locator('[data-ui="cookie-consent"]');
      this.acceptButton = page.locator('button:has-text("Accept all")');
      this.jobTitle = "//h3[@data-ui='job-title']";
      this.jobDepartment = "//span[@data-ui='job-department']";
      this.jobLocation = "//div[@data-ui='job-location']";
      this.jobType = "//span[@data-ui='job-type']";
    }
  
    async handleCookiePopup() {
      await this.cookieConsent.waitFor({ state: 'visible', timeout: 30000 });
      if (await this.cookieConsent.isVisible()) {
        await this.acceptButton.waitFor({ state: 'visible' });
        await this.acceptButton.click();
        await this.cookieConsent.waitFor({ state: 'hidden', timeout: 5000 });
      }
    }
  
    async clickViewJob() {
      await this.handleCookiePopup();
      await this.viewJobButton.scrollIntoViewIfNeeded();
      await this.viewJobButton.click();
    }

    async ClickJob(index) {
      const jobItem = this.jobListItems.nth(index);
      await jobItem.scrollIntoViewIfNeeded();
      await jobItem.waitFor({ state: 'visible' });
      await jobItem.click();
    }

    async getJobDetails(index = 0) {
      const jobItem = this.jobListItems.nth(index);
      return {
        title: await jobItem.locator(this.jobTitle).textContent(),
        department: await jobItem.locator(this.jobDepartment).textContent(),
        location: await jobItem.locator(this.jobLocation).textContent(),
        type: await jobItem.locator(this.jobType).textContent()
      };
    }
  }
  