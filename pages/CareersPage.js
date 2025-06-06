export class CareersPage {
    constructor(page) {
      this.page = page;
      this.currentJobOpeningsButton = page.locator("//a[@href='https://apply.workable.com/claritasrx/']");
    }
  
    async clickCurrentJobOpeningsButton() {
      await this.page.waitForLoadState('domcontentloaded');
      await this.currentJobOpeningsButton.scrollIntoViewIfNeeded();
      const [newTab] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.currentJobOpeningsButton.click()
      ]);
      await newTab.waitForLoadState();
      return newTab;
    }
  }
  