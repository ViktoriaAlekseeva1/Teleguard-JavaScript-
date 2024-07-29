import { test, expect } from '@playwright/test';
import App from '../app/index.js';

test('Check logo on page Press', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.press.openPress();
    const newPage = await app.press.clickLogoPress();
    //Assert
    await expect(newPage).not.toHaveURL('https://dev.teleguard.com/en/press');
});

test('Check download first image', async ({ page }) => {//teleGuardLogo1
    const app = new App(page);
    const currentURL = page.url();
    //Actions
    await app.press.openPress();
    const newPage = await app.press.teleGuardLogo1();
    const newPageURL = newPage.url('https://dev.teleguard.com/images/tg_logo.jpg');
    
    //Assert
    expect(currentURL).not.toEqual(newPageURL);

});
test('Check download second image', async ({ page }) => {//teleGuardLogo2
    const app = new App(page);
    const currentURL = page.url();
    //Actions
    await app.press.openPress();
    const newPage = await app.press.teleGuardLogo2();
    const newPageURL = newPage.url('https://dev.teleguard.com/images/tg_logo.jpg');
    //Assert
    expect(currentURL).not.toEqual(newPageURL);

});
test('Download TeleGuardIcon', async ({ page }) => {//teleGuardIcon
    const app = new App(page);
    //Actions
    await app.press.openPress();
    const tg_icons = await app.press.TeleGuardIcon();
    //Assert
    await app.press.expectFileDownloadName(tg_icons, "tg_icons.zip");
    await tg_icons.delete();
});
test('Download TeleGuard Screenshots. IOS.', async ({ page }) => {//TeleGuard Screenshots. IOS.
    const app = new App(page);
    //Actions
    await app.press.openPress();
    const tg_sc_ios = await app.press.TeleGuardScreenshotsIOS();
    //Assert
    await app.press.expectFileDownloadName(tg_sc_ios, "tg_sc_ios.zip");
    await tg_sc_ios.delete();
});
test('Download TeleGuard Screenshots. Android.', async ({ page }) => {//TeleGuard Screenshots. Android.
    const app = new App(page);
    //Actions
    await app.press.openPress();
    const tg_sc_android = await app.press.TeleGuardScreenshotsAndroid();
    //Assert
    await app.press.expectFileDownloadName(tg_sc_android, "tg_sc_android.zip");
    await tg_sc_android.delete();
});