export class HomePage {
    constructor(page) {
      this.page = page;
      this.footerCareersLink = page.locator("//a[text()='Careers']");
    }
  
    async goto() {
      try {
        await this.page.goto('https://www.claritasrx.com/', {
          timeout: 60000, // Increase timeout to 60 seconds
          waitUntil: 'domcontentloaded' // Wait for DOM content to load instead of full page load
        });
      } catch (error) {
        console.error('Failed to navigate to homepage:', error);
        throw error;
      }
    }
  
    async clickCareers() {
      await this.footerCareersLink.scrollIntoViewIfNeeded();
      await this.footerCareersLink.click();
    }
  }
  