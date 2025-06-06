export class HomePage {
    constructor(page) {
      this.page = page;
      this.footerCareersLink = page.locator("//a[text()='Careers']");
    }
  
    async goto() {
      try {
        await this.page.goto('https://www.claritasrx.com/', {
          timeout: 60000, 
          waitUntil: 'domcontentloaded'
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
  