import { expect, test } from '@playwright/test';

test('Browser tab should have a matching title', async ({ page }) => {
  await page.goto('https://localhost:3000/');
  await expect(page).toHaveTitle(/React Template/);
});
