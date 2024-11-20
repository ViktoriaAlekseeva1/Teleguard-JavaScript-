import { test, expect } from '@playwright/test';
import App from '../app/index.js';
import testDataDonation from '../app/data/donate/testDataDonation.json' assert { type: 'json' };



for (const { locatorName, expectedUrl } of testDataDonation.switchLanguagesDonate) {
    test(`Check switch languages ${locatorName} in header Donate page`, async ({ page }) => {//languages
        const app = new App(page);
        //Actions
        await app.donate.openDonate();
        await app.donate.openDropDownMenuDonate();
        await app.donate.header.switchLanguages(locatorName)
        //Assert
        await expect(app.donate.page).toHaveURL(expectedUrl);
        //await expect(app.businessPage.page.getByRole('list')).toHaveCount(7);
    });

}
//section Donate with PayPal
test('Donate with PayPal', async ({ page }) => {
    const app = new App(page);
    await app.donate.openDonate();
    const page1Promise = page.waitForEvent('popup');
    await app.donate.content.DonateWithPayPal();
    const page1 = await page1Promise;
    await expect(page1).toHaveTitle(/Donate/);
    const donateButton = page1.getByRole('button', { name: 'Donate with PayPal' }); 
    await expect(donateButton).toBeVisible();

    
});
test('Donate with via Card', async ({ page }) => {
    const app = new App(page);
    await app.donate.openDonate();
    const page1Promise = page.waitForEvent('popup');
    await app.donate.content.DonateViaCard();
    const page1 = await page1Promise;
    await expect(page1).toHaveTitle(/Swisscows AG/);
    const donateText = page1.locator('text="Donate to TeleGuard"');
    await expect(donateText).toBeVisible();
    const donateForm = page1.locator('div').filter({ hasText: 'Pay with cardOr pay with cardEmailCard informationCVCCardholder nameCountry or' }).nth(3); 
    await expect(donateForm).toBeVisible();
});
test('Check logo on page Donate', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.donate.openDonate();
    await app.donate.header.logoDonate();
    //Assert
    await expect(page).not.toHaveURL('https://dev.teleguard.com/en/donation');
    await expect(page).toHaveURL('https://dev.teleguard.com/en');
});
