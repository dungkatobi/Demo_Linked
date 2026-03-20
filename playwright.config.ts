import { config } from 'dotenv';
config();

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    browserName: 'chromium',
    trace: 'on-first-retry',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
     { name: 'msedge', use: { channel: 'msedge' } },
     { name: 'iphone', use: { ...devices['iPhone 13'] } }
  ]
});
