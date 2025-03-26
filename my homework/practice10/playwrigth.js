import { test, expect } from '@playwright/test';

test('Facebook Login - validate error for invalid credentials', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').fill('johndoe@gmail.com');
  await page.getByTestId('royal-pass').fill('john1234');
  await page.getByTestId('royal-login-button').click();

  await expect(page.locator('._9ay7')).toBeVisible();
  await page.waitForTimeout(5000);
});


/*
Go to 'https://www.facebook.com/'
Click on "Create new account" link
Validate the url contains "login"
*/


/*
Go to 'https://www.facebook.com/'
Fill username as 'johndoe@gmail.com'
Fill password as 'john1234'
Click on "Log In"
Validate "The password you've entered is incorrect." error message is visible
*/
import { test, expect } from '@playwright/test';
test('Facebook Login - validate error for invalid credentials', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').fill('johndoe@gmail.com');
  await page.getByTestId('royal-pass').fill('john1234');
  await page.getByTestId('royal-login-button').click();
  await expect(page.locator('._9ay7')).toBeVisible();
});
test('Facebook Login - validate "Create new account" link', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('open-registration-form-button').click();
  expect(page.url().includes('login')).toBeTruthy();
});
/*
Go to 'https://www.facebook.com/'
Click on "Create new account" link
Validate the url contains "login"
*/
/*
Go to 'https://www.facebook.com/'
Fill username as 'johndoe@gmail.com'
Fill password as 'john1234'
Click on "Log In"
Validate "The password you’ve entered is incorrect." error message is visible
*/

// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ['json', {  outputFile: 'test-results.json' }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});