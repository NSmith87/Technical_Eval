// fixtures/test-fixtures.ts
import { test as base, expect } from '@playwright/test';

export const credentials = {
  username: 'admin',
  password: 'password123',
};

export const test = base.extend<{
  credentials: typeof credentials;
  login: () => Promise<void>;
}>({
  credentials: async ({}, use) => {
    await use(credentials);
  },

  login: async ({ page }, use) => {
    await use(async () => {
      await page.goto('/');
      await page.getByRole('textbox', { name: 'Username' }).fill(credentials.username);
      await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
      await page.getByRole('button', { name: 'Sign in' }).click();
    });
  },
});

export { expect };
