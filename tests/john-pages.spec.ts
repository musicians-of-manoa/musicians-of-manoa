import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('User Pages', async ({ page }) => {
  // Debugging
//  const cookies = await page.context().cookies();
//  console.log('Cookies:', cookies);
//  const localStorage = await page.evaluate(() => JSON.stringify(window.localStorage));
//  console.log('Local Storage:', localStorage);

  // Home Page
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('link', { name: 'Musicians of Manoa Logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Feed' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create a Jam' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Attending Jams' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'john@foo.com' })).toBeVisible();

  // Check user pages
  await page.getByRole('link', { name: 'Feed' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Upcoming Jams' })).toBeVisible();
  await page.getByRole('link', { name: 'Create a Jam' }).click();
  await expect(page.getByRole('heading', { name: 'Jam Information' })).toBeVisible();
  await page.getByRole('link', { name: 'Attending Jams' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Attending Jams: No attended jams yet.' })).toBeVisible();

  // Check search pages
  await page.getByRole('link', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Search for...' })).toBeVisible();
  await page.getByRole('link', { name: 'Search Profiles Profiles' }).click();
});
