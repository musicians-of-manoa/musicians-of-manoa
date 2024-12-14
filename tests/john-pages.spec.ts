import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  /* Home Page */
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('link', { name: 'Musicians of Manoa Logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Feed' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Search' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create a Jam' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Attending Jams' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'john@foo.com' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Find local musicians and' })).toBeVisible();

  /* Header Pages */
  await page.getByRole('link', { name: 'Feed' }).click();
  await expect(page.getByRole('heading', { name: 'Upcoming Jams' })).toBeVisible();
  await page.getByRole('link', { name: 'Search' }).click();
  await expect(page.getByRole('heading', { name: 'Search for...' })).toBeVisible();
  await page.getByRole('link', { name: 'Search Profiles Profiles' }).click();
  await expect(page.getByRole('heading', { name: 'Search Profiles' })).toBeVisible();
  await page.getByRole('link', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Search Jams Jams' }).click();
  await expect(page.getByRole('heading', { name: 'Search Jams' })).toBeVisible();
  await page.getByRole('link', { name: 'Attending Jams' }).click();
  await expect(page.getByRole('heading', { name: 'Attending Jams: No attended' })).toBeVisible();

  /* Footer Pages */
  await page.getByRole('link', { name: 'Musicians of Manoa Logo' }).click();
  await page.getByRole('link', { name: 'Singers' }).click();
  await expect(page.getByText('Discover Singers')).toBeVisible();
  await page.getByRole('link', { name: 'Musicians of Manoa Logo' }).click();
  await page.getByRole('link', { name: 'Guitarists' }).click();
  await expect(page.getByText('Discover Guitarists')).toBeVisible();
  await page.getByRole('link', { name: 'Musicians of Manoa Logo' }).click();
  await page.getByRole('link', { name: 'Producers' }).click();
  await expect(page.getByText('Discover Producers')).toBeVisible();
  await page.getByRole('link', { name: 'Musicians of Manoa Logo' }).click();
  await page.getByRole('link', { name: 'DJs' }).click();
  await expect(page.getByText('Discover DJs')).toBeVisible();

  /* User Options */
  await page.getByRole('button', { name: 'john@foo.com' }).click();
  await expect(page.getByRole('link', { name: 'View/Edit Profile' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign Out' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Change Password' })).toBeVisible();
  await page.getByRole('link', { name: 'View/Edit Profile' }).click();
  await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
  await page.getByRole('button', { name: 'john@foo.com' }).click();
  await page.getByRole('link', { name: 'Change Password' }).click();
  await page.goto('http://localhost:3000/auth/change-password');
  await expect(page.getByRole('heading', { name: 'Change Password' })).toBeVisible();
  await page.getByRole('button', { name: 'john@foo.com' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
  await expect(page.getByRole('heading', { name: 'Do you want to sign out?' })).toBeVisible();
});
