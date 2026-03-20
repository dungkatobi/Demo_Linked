import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.linkedin.com/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('#username', email);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
    await this.page.waitForLoadState('load');
  }
}