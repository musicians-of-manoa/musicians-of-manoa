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
  await page.getByRole('button', { name: 'admin@foo.com' }).click();
  await expect(page.getByRole('link', { name: 'View/Edit Profile' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign Out' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Change Password' })).toBeVisible();

  // Check admin-only pages
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('heading', { name: 'Admin Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'List of Users' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Edit Jams (Admin)' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit Experience Levels' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit Musical Goals' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit Musical Tastes' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Edit Jams (Admin)' })).toBeVisible();
  await page.getByRole('button', { name: 'Edit Experience Levels' }).click();
  await expect(page.getByRole('heading', { name: 'Editing Musical Experiences' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: 'Edit Musical Goals' }).click();
  await expect(page.getByRole('heading', { name: 'Editing Musical Goals' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: 'Edit Musical Tastes' }).click();
  await expect(page.getByRole('heading', { name: 'Editing Musical Tastes' })).toBeVisible();
});
