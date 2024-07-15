import { test, expect } from '@playwright/test';
import App from '../app/index.js';
test('Check logo on page TermsOfUse', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.termsOfUse.openTermsOfUse();
    const newPage = await app.termsOfUse.clickLogoPrivacyPage();
    //Assert
    await expect(newPage).not.toHaveURL('https://dev.teleguard.com/en/termsofuse');
});
test('Check link Teleguard on page TermsOfUse', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.termsOfUse.openTermsOfUse();
    const newPage = await app.termsOfUse.clickLinkTeleguard();
    //Assert
    await expect(newPage).not.toHaveURL('https://dev.teleguard.com/en/termsofuse');
});
test ('Click link Info on page TermsOfUse', async ({ page }) => {
    const app = new App(page);
    await app.termsOfUse.openTermsOfUse();
    await app.termsOfUse.clickLinkInfoTermsOfUsePage();
    //Assert
    //expect(popup).toBeDefined();
    
    await expect(page.locator('a[href="mailto:info@swisscows.com"]')).toHaveAttribute('href', 'mailto:info@swisscows.com');
});
