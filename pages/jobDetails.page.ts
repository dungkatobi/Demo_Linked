import { Page, expect } from '@playwright/test';

export class JobDetailsPage {
  constructor(private page: Page) {}

  async clickEasyApply() {
    const btn = this.page.locator('button:has-text("Easy Apply")');
    await expect(btn).toBeVisible();
    await btn.click();
  }
}

export default JobDetailsPage;