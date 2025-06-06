export class CareersPage {
    constructor(page) {
      this.page = page;
      this.seeAllOpeningsButton = page.locator("//a[@href='https://apply.workable.com/claritasrx/']");
    }
  
    async clickSeeAllOpenings() {
      await this.page.waitForLoadState('domcontentloaded');
      await this.seeAllOpeningsButton.scrollIntoViewIfNeeded();
      const [newTab] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.seeAllOpeningsButton.click()
      ]);
      await newTab.waitForLoadState();
      return newTab;
    }
  }
  