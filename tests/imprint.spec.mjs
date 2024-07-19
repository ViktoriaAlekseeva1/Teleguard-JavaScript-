import { test, expect } from '@playwright/test';
import App from '../app/index.js';

test ('Click link support on page Imprint', async ({ page }) => {
const app = new App(page);
await app.imprint.openImprint();
await app.imprint.clickLinkSupportImprintPage();
//Assert
//expect(popup).toBeDefined();
await expect(page.locator('a[href="mailto:support@teleguard.com"]').first()).toHaveAttribute('href', 'mailto:support@teleguard.com');

});
test('Check link "company.swisscows.ch" on page Imprint', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.imprint.openImprint();
    const newPage = await app.imprint.clickLinkCompanySwisscowsImpintPage();
    //Assert
    await expect(newPage).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Check logo on page Imprint', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.imprint.openImprint();
    const newPage = await app.imprint.clickLogoImpintPage();
    //Assert
    await expect(newPage).not.toHaveURL('https://dev.teleguard.com/en/imprint');
});
