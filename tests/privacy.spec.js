import { test, expect } from '@playwright/test';
import App from '../app/index.js';

test('Check logo on page Imprint', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.privacyPolicy.openPrivacy();
    const newPage = await app.privacyPolicy.clickLogoPrivacyPage();
    //Assert
    await expect(newPage).not.toHaveURL('https://dev.teleguard.com/en/privacy');
});
test ('Click link support1 on page Privacy', async ({ page }) => {
    const app = new App(page);
    await app.privacyPolicy.openPrivacy();
    await app.privacyPolicy.clickLinkSupportPrivacyPage1();
    //Assert
    //expect(popup).toBeDefined();
    await expect(page.locator('a[href="mailto:support@teleguard.com"]').first()).toHaveAttribute('href', 'mailto:support@teleguard.com');
});
test ('Click link support2 on page Privacy', async ({ page }) => {
    const app = new App(page);
    await app.privacyPolicy.openPrivacy();
    await app.privacyPolicy.clickLinkSupportPrivacyPage2();
    //Assert
    //expect(popup).toBeDefined();
    await expect(page.locator('a[href="mailto:support@teleguard.com"]')).toHaveAttribute('href', 'mailto:support@teleguard.com');
});
test ('Click link support3 on page Privacy', async ({ page }) => {
    const app = new App(page);
    await app.privacyPolicy.openPrivacy();
    await app.privacyPolicy.clickLinkSupportPrivacyPage3();
    //Assert
    //expect(popup).toBeDefined();
    await expect(page.locator('a[href="mailto:support@teleguard.com"]')).toHaveAttribute('href', 'mailto:support@teleguard.com');
});
test ('Click link support4 on page Privacy', async ({ page }) => {
    const app = new App(page);
    await app.privacyPolicy.openPrivacy();
    await app.privacyPolicy.clickLinkSupportPrivacyPage4();
    //Assert
    //expect(popup).toBeDefined();
    await expect(page.locator('a[href="mailto:support@teleguard.com"]')).toHaveAttribute('href', 'mailto:support@teleguard.com');
});
test('Check link TeleguardImprint on page Privacy', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.privacyPolicy.openPrivacy();
    const newPage = await app.privacyPolicy.clickLinkTeleguargImprintPrivacyPage();
    //Assert
    await expect(newPage).not.toHaveURL('https://dev.teleguard.com/en/privacy');
});
test ('Click link Info on page Privacy', async ({ page }) => {
    const app = new App(page);
    await app.privacyPolicy.openPrivacy();
    await app.privacyPolicy.clickLinkInfoPrivacyPage();
    //Assert
    //expect(popup).toBeDefined();
    
    await expect(page.locator('a[href="mailto:info@swisscows.com"]')).toHaveAttribute('href', 'mailto:info@swisscows.com');
});
