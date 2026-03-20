import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { JobsPage } from '../pages/jobs.page';
import { JobDetailsPage } from '../pages/jobDetails.page';
import { ApplicationModal } from '../pages/application.modal';

// Define fixture types
type MyFixtures = {
  loginPage: LoginPage;
  jobsPage: JobsPage;
  jobDetailsPage: JobDetailsPage;
  applicationModal: ApplicationModal;
};

//  Extend with types
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  jobsPage: async ({ page }, use) => {
    await use(new JobsPage(page));
  },

  jobDetailsPage: async ({ page }, use) => {
    await use(new JobDetailsPage(page));
  },

  applicationModal: async ({ page }, use) => {
    await use(new ApplicationModal(page));
  }
});

export const expect = test.expect;