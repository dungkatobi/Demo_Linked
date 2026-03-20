import { Page, expect } from '@playwright/test';

export class ApplicationModal {
  constructor(private page: Page) {}

  get nameField() {
    return this.page.locator('input[name="name"]');
  }

  get emailField() {
    return this.page.locator('input[type="email"]');
  }

  get uploadField() {
    return this.page.locator('input[type="file"]');
  }

  get submitBtn() {
    return this.page.locator('button:has-text("Submit")');
  }

  async validateFieldsSoft() {
    await expect.soft(this.nameField).toBeVisible();
    await expect.soft(this.emailField).toBeVisible();
    await expect.soft(this.uploadField).toBeVisible();
  }

  async validateSubmitDisabled() {
    await expect.soft(this.submitBtn).toBeDisabled();
  }

  async uploadFile(path: string) {
    await this.uploadField.setInputFiles(path);
  }
}