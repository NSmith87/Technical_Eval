import { test, expect } from '../test-fixtures';

test('Login and interact with tasks', async ({ page, login }) => {
  await login(); // Use login from fixture

  // Web-specific navigation and assertions
  await page.getByRole('button', { name: 'Web Application Main web' }).click();

  // First task
  await page.getByRole('heading', { name: 'To Do (2)' }).click();
  await page.getByRole('heading', { name: 'Implement user authentication' }).click();
  await page.getByText('Feature').first().click();
  await page.getByText('High Priority').first().click();

  // Second task
  await page.getByRole('heading', { name: 'To Do (2)' }).click();
  await page.getByRole('heading', { name: 'Fix navigation bug' }).click();
  await page.getByText('Bug', { exact: true }).click();

  // Third task
  await page.getByRole('heading', { name: 'In Progress (1)' }).click();
  await page.getByRole('heading', { name: 'Design system updates' }).click();
  await page.getByText('Design', { exact: true }).click();
});
