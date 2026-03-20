import { Page } from '@playwright/test';

export class JobsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.linkedin.com/jobs');
  }

  async searchJob(keyword: string) {
    const searchBox = this.page.getByRole('textbox', { name: 'Search by title, skill, or company' })
    await searchBox.fill(keyword);
    await searchBox.press('Enter');
    await this.page.waitForTimeout(3000);
  }

  async filterEasyApply() {
    try {
      const easyApplyFilter = this.page.getByRole('button', { name: 'Easy Apply' });
      await easyApplyFilter.waitFor({ state: 'visible', timeout: 5000 });
      await easyApplyFilter.click();
      await this.page.waitForTimeout(2000);
    } catch {
      console.log('Easy Apply filter not found');
    }
  }

  async openFirstJob() {
    const jobs = await this.page.locator('.jobs-search-results__list-item').all();
    if (jobs.length === 0) throw new Error('No jobs found');
    await jobs[0].click();
  }
}