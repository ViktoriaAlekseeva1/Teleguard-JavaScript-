import { test, expect } from '@playwright/test';
import App from '../app/index.js';

test('apkButtonHeader', async ({ page }) => {//apkFileHeader
    test.setTimeout(600000);

    const app = new App(page);
    //Actions
    await app.home.open();
    const apkFile = await app.home.header.apkButtonHeader();
    //Assert
    await app.home.header.expectFileDownloadName(apkFile, "teleguard-latest.apk");
    //await app.home.header.expectFileSizeToBeGreaterThan(apkFile, 500000000000000);
    await apkFile.delete({ timeout: 600000 });
});
test('MSWindowsButtonHeader', async ({ page }) => {//MSWindowsButtonHeader
    test.setTimeout(600000);
    const app = new App(page);
    //Actions
    await app.home.open();
    const windowsFile = await app.home.header.MSWindowsButtonHeader ();
    //Assert
    await app.home.header.expectFileDownloadName(windowsFile, "teleguard-desktop-latest.exe");
    //await app.home.header.expectFileSizeToBeGreaterThan(apkFile, 500000000000000);
    await windowsFile.delete({ timeout: 600000 });
});
test('MacOSButtonHeader', async ({ page }) => {//MacOSButtonHeader
    test.setTimeout(600000);
    const app = new App(page);
    //Actions
    await app.home.open();
    const MacOSFile = await app.home.header.MacOSButtonHeader ();
    //Assert
    await app.home.header.expectFileDownloadName(MacOSFile, "teleguard-desktop-latest.dmg");
    //await app.home.header.expectFileSizeToBeGreaterThan(apkFile, 500000000000000);
    await MacOSFile.delete({ timeout: 600000 });
});
test('LinuxDEB_ButtonHeader', async ({ page }) => {//LinuxDEB_ButtonHeader
    test.setTimeout(600000);
    const app = new App(page);
    //Actions
    await app.home.open();
    const LinuxDebFile = await app.home.header.LinuxDEB_ButtonHeader ();
    //Assert
    await app.home.header.expectFileDownloadName(LinuxDebFile, "teleguard-desktop-latest.deb");
    //await app.home.header.expectFileSizeToBeGreaterThan(apkFile, 500000000000000);
    await LinuxDebFile.delete({ timeout: 600000 });
});
test('LinuxSnapStoreButtonHeader', async ({ page }) => {//LinuxSnapStoreButtonHeader
    const app = new App(page);
    const currentURL = page.url();
    //Actions
    await app.home.open();
    const newPage = await app.home.header.LinuxSnapStoreButtonHeader();
    const newPageURL = newPage.url('https://snapcraft.io/teleguard-desktop');
    //Assert
    expect(currentURL).not.toEqual(newPageURL);

});
//benefits download
test('apkButtonBenefits', async ({ page }) => {//apkFileBenefits
    test.setTimeout(600000);
    const app = new App(page);
    //Actions
    await app.home.open();
    const apkFile = await app.home.contentHome.apkButtonBenefits();
    //Assert
    await app.home.header.expectFileDownloadName(apkFile, "teleguard-latest.apk");
    //await app.home.header.expectFileSizeToBeGreaterThan(apkFile, 500000000000000);
    await apkFile.delete({ timeout: 600000 });
});
test('MSWindowsButtonBenefits', async ({ page }) => {//MSWindowsButtonBenefits
    test.setTimeout(600000);
    const app = new App(page);
    //Actions
    await app.home.open();
    const windowsFile = await app.home.contentHome.MSWindowsButtonBenefits ();
    //Assert
    await app.home.header.expectFileDownloadName(windowsFile, "teleguard-desktop-latest.exe");
    //await app.home.header.expectFileSizeToBeGreaterThan(apkFile, 500000000000000);
    await windowsFile.delete({ timeout: 600000 });
});
test('MacOSButtonBenefits', async ({ page }) => {//MacOSButtonBenefits
    test.setTimeout(600000);
    const app = new App(page);
    //Actions
    await app.home.open();
    const MacOSFile = await app.home.contentHome.MacOSButtonBenefits();
    //Assert
    await app.home.header.expectFileDownloadName(MacOSFile, "teleguard-desktop-latest.dmg");
    //await app.home.header.expectFileSizeToBeGreaterThan(apkFile, 500000000000000);
    await MacOSFile.delete();
});
test('LinuxDEB_ButtonBenefits', async ({ page }) => {//LinuxDEB_ButtonBenefits
    test.setTimeout(600000);
    const app = new App(page);
    //Actions
    await app.home.open();
    const LinuxDebFile = await app.home.contentHome.LinuxDEB_ButtonBenefits();
    //Assert
    await app.home.header.expectFileDownloadName(LinuxDebFile, "teleguard-desktop-latest.deb");
    //await app.home.header.expectFileSizeToBeGreaterThan(apkFile, 500000000000000);
    await LinuxDebFile.delete({ timeout: 600000 });
});
test('LinuxSnapStoreButtonBenefits', async ({ page }) => {//LinuxSnapStoreButtonBenefits
    const app = new App(page);
    const currentURL = page.url();
    //Actions
    await app.home.open();
    const newPage = await app.home.contentHome.LinuxSnapStoreButtonBenefits();
    const newPageURL = newPage.url('https://snapcraft.io/teleguard-desktop');
    //Assert
    expect(currentURL).not.toEqual(newPageURL);

});