import { expect, test } from '@playwright/test';

test('correct initial UI', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading').first()).toHaveText('Who will be telling stories?')

	await expect (await page.getByRole('radio')).toHaveCount(2);
	await expect (page.getByLabel('Someone else will')).toBeVisible();
	await expect (page.getByLabel('I will')).toBeVisible();

	const continueButton = page.getByRole('button', { name:  "Continue" })
	await expect(continueButton).toBeVisible()
	await expect(continueButton).toBeDisabled()
});

test('clicking on a radio enables the button', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('radio').first().click();
	await expect(page.getByRole('button', { name:  "Continue" })).toBeEnabled()
});

test('continuing with "Someone else will" brings you to the recipient info step', async ({ page }) => {
	await page.goto('/');

	await page.getByLabel('Someone else will').click()
	await page.getByRole('button', { name:  "Continue" }).click();

	await expect(page.getByRole('heading').first()).toHaveText('Who is this for?')
});


test('continuing with "I will" brings you to the book step', async ({ page }) => {
	await page.goto('/');

	await page.getByLabel('I will').click()
	await page.getByRole('button', { name:  "Continue" }).click();

	await expect(page.getByRole('heading').first()).toHaveText('How many books would you like?')
});
