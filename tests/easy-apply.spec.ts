import { test, expect } from '../fixtures/base.fixture';

const users = [
  { email: process.env.USER_EMAIL || '', password: process.env.USER_PASSWORD || '' }
];

test.describe.configure({ retries: 2 });

for (const user of users) {
  test(`Easy Apply Test - ${user.email}`, async ({ loginPage, jobsPage, jobDetailsPage, applicationModal }) => {
    await loginPage.goto();
    await loginPage.login(user.email, user.password);

    await jobsPage.goto();
    await jobsPage.searchJob('QA Engineer');
    await jobsPage.filterEasyApply();
    await jobsPage.openFirstJob();

    await jobDetailsPage.clickEasyApply();

    await applicationModal.validateFieldsSoft();
    await applicationModal.validateSubmitDisabled();
    await applicationModal.uploadFile('tests/sample.pdf');
  });
}