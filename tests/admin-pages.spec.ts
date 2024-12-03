import { test, expect } from '@playwright/test';

test.use({
  storageState: 'admin-auth.json',
});

test('Admin Pages', async ({ page }) => {
  // Home Page
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('link', { name: 'Musicians of Manoa Logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Feed' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create a Jam' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'admin@foo.com' })).toBeVisible();

  // Check user pages
  await page.getByRole('link', { name: 'Feed' }).click();
  await expect(page.getByRole('heading', { name: 'Upcoming Jams' })).toBeVisible();
  await page.getByRole('link', { name: 'Create a Jam' }).click();
  await expect(page.getByRole('heading', { name: 'Jam Information' })).toBeVisible();
  await page.getByRole('link', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Search for...' })).toBeVisible();

  // Check admin-only pages
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'List of Users' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Edit Jams (Admin)' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit Experience Levels' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit Musical Goals' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit Musical Tastes' })).toBeVisible();
  await page.getByRole('button', { name: 'Edit Musical Goals' }).click();
  await expect(page.getByRole('heading', { name: 'Editing Musical Goals' })).toBeVisible();
});
