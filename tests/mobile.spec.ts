import { test, expect } from '../test-fixtures';

test('Login and interact with tasks', async ({ page, login }) => {
  await login(); // Use login from fixture

  // Navigate to mobile-specific app section
  await page.getByRole('button', { name: 'Mobile Application Native' }).click();

  // Fourth task
  await page.getByRole('heading', { name: 'To Do (1)' }).click();
  await page.getByRole('heading', { name: 'Push notification system' }).click();
  await page.locator('div').filter({ hasText: /^Feature$/ }).locator('span').click();

  // Fifth task
  await page.getByRole('heading', { name: 'In Progress (1)' }).click();
  await page.getByRole('heading', { name: 'Offline mode' }).click();
  await page.getByText('Feature').nth(1).click();
  await page.getByText('High Priority').click();

  // Sixth task
  await page.getByRole('heading', { name: 'Done (1)' }).click();
  await page.getByRole('heading', { name: 'App icon design' }).click();
  await page.getByText('Design', { exact: true }).click();
});