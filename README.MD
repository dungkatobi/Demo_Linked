# LinkedIn Easy Apply Automation (Playwright)

## 📌 Overview

This project automates the LinkedIn "Easy Apply" job application flow using Playwright with a scalable Page Object Model (POM) architecture.

It validates:

* Job search with Easy Apply filter
* Application form fields
* Required field enforcement
* File upload behavior
* Submit button state

---

## 🏗 Project Structure

```
/pages
  login.page.ts
  jobs.page.ts
  jobDetails.page.ts
  application.modal.ts

/fixtures
  base.fixture.ts

/tests
  easy-apply.spec.ts

playwright.config.ts
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone <your-repo-url>
cd <repo-name>
```

### 2. Install Dependencies

```
npm install
```

### 3. Install Playwright Browsers

```
npx playwright install
```

### 4. Install Allure Reporter

```
npm install -D allure-playwright
```

---

## 🔐 Environment Setup

Create a `.env` file:

```
USER_EMAIL=your_email
USER_PASSWORD=your_password
```

⚠️ Never commit this file.

---

## ▶️ Run Tests

### Run all tests

```
npx playwright test
```

### Run specific test

```
npx playwright test tests/easy-apply.spec.ts
```

### Run in headed mode

```
npx playwright test --headed
```

---

## 📱 Cross-Browser & Mobile

Configured in `playwright.config.ts`:

* Chrome (Chromium)
* Microsoft Edge
* Mobile (iPhone 13)

---

## 📊 Generate Allure Report

```
npx playwright test
npx allure generate ./allure-results --clean
npx allure open
```

---

## 🔁 Retry & Stability

* Retries enabled: `2`
* Soft assertions used to reduce test flakiness
* Trace enabled on retry

---

## 👥 Multi-User Testing

Supports multiple users via test data array.

---

## 🧠 Best Practices Used

* Page Object Model (POM)
* Custom Fixtures
* Soft Assertions
* Retry Mechanism
* Allure Reporting
* Cross-browser support

---

## ⚠️ Notes

* LinkedIn may block automation (CAPTCHA, bot detection)
* Use low frequency execution
* Prefer test accounts

---

## 👨‍💻 Author

Dung Tran
