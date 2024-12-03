import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('User Pages', async ({ page }) => {
  // Home Page
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('link', { name: 'Musicians of Manoa Logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Feed' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create a Jam' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'john@foo.com' })).toBeVisible();

  // Check user pages
  await page.getByRole('link', { name: 'Feed' }).click();
  await expect(page.getByRole('heading', { name: 'Upcoming Jams' })).toBeVisible();
  await page.getByRole('link', { name: 'Create a Jam' }).click();
  await expect(page.getByRole('heading', { name: 'Jam Information' })).toBeVisible();
  await page.getByRole('link', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Search for...' })).toBeVisible();

  // Check search pages
  await expect(page.getByRole('heading', { name: 'Search for...' })).toBeVisible();
  await page.getByRole('link', { name: 'Search Profiles Profiles' }).click();
});
