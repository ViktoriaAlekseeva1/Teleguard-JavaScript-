import { test, expect } from '@playwright/test';
import App from '../app/index.js';

test.describe("Dowload", () => {
    test.describe.configure({ mode: "default" });
test('apkButtonHeader', async ({ page }) => {//apkFileHeader
    const app = new App(page);
    //Actions
    await app.home.open();
    const apkFile = await app.home.header.apkButtonHeader();
    //Assert
    await app.home.header.expectFileDownloadName(apkFile, "teleguard-latest.apk");
    const downloadURL = await apkFile.url();
    expect(downloadURL).toEqual('https://pub.teleguard.com/teleguard-latest.apk');
    await apkFile.delete();
});
test('MSWindowsButtonHeader', async ({ page }) => {//MSWindowsButtonHeader
    const app = new App(page);
    //Actions
    await app.home.open();
    const windowsFile = await app.home.header.MSWindowsButtonHeader ();
    //Assert
    await app.home.header.expectFileDownloadName(windowsFile, "teleguard-desktop-latest.exe");
    const downloadURL = await windowsFile.url();
    expect(downloadURL).toEqual('https://pub.teleguard.com/teleguard-desktop-latest.exe');
    await windowsFile.delete();
});
test('MacOSButtonHeader', async ({ page }) => {//MacOSButtonHeader
    const app = new App(page);
    //Actions
    await app.home.open();
    const MacOSFile = await app.home.header.MacOSButtonHeader ();
    //Assert
    await app.home.header.expectFileDownloadName(MacOSFile, "teleguard-desktop-latest.dmg");
    const downloadURL = await MacOSFile.url();
    //console.log(downloadURL)
    expect(downloadURL).toEqual('https://pub.teleguard.com/teleguard-desktop-latest.dmg');
    await MacOSFile.delete();
});
test('LinuxDEB_ButtonHeader', async ({ page }) => {//LinuxDEB_ButtonHeader
     const app = new App(page);
    //Actions
    await app.home.open();
    const LinuxDebFile = await app.home.header.LinuxDEB_ButtonHeader ();
    //Assert
    await app.home.header.expectFileDownloadName(LinuxDebFile, "teleguard-desktop-latest.deb");
    const downloadURL = await LinuxDebFile.url();
    expect(downloadURL).toEqual('https://pub.teleguard.com/teleguard-desktop-latest.deb');
    await LinuxDebFile.delete();
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
    const app = new App(page);
    //Actions
    await app.home.open();
    const apkFile = await app.home.contentHome.apkButtonBenefits();
    //Assert
    await app.home.header.expectFileDownloadName(apkFile, "teleguard-latest.apk");
    const downloadURL = await apkFile.url();
    expect(downloadURL).toEqual('https://pub.teleguard.com/teleguard-latest.apk');
    await apkFile.delete();
});
test('MSWindowsButtonBenefits', async ({ page }) => {//MSWindowsButtonBenefits
    const app = new App(page);
    //Actions
    await app.home.open();
    const windowsFile = await app.home.contentHome.MSWindowsButtonBenefits ();
    //Assert
    await app.home.header.expectFileDownloadName(windowsFile, "teleguard-desktop-latest.exe");
    const downloadURL = await windowsFile.url();
    expect(downloadURL).toEqual('https://pub.teleguard.com/teleguard-desktop-latest.exe');
    await windowsFile.delete();
});
test('MacOSButtonBenefits', async ({ page }) => {//MacOSButtonBenefits
    const app = new App(page);
    //Actions
    await app.home.open();
    const MacOSFile = await app.home.contentHome.MacOSButtonBenefits();
    //Assert
    await app.home.header.expectFileDownloadName(MacOSFile, "teleguard-desktop-latest.dmg");
    const downloadURL = await MacOSFile.url();
    expect(downloadURL).toEqual('https://pub.teleguard.com/teleguard-desktop-latest.dmg');
    await MacOSFile.delete();
});
test('LinuxDEB_ButtonBenefits', async ({ page }) => {//LinuxDEB_ButtonBenefits
    const app = new App(page);
    //Actions
    await app.home.open();
    const LinuxDebFile = await app.home.contentHome.LinuxDEB_ButtonBenefits();
    //Assert
    await app.home.header.expectFileDownloadName(LinuxDebFile, "teleguard-desktop-latest.deb");
    const downloadURL = await LinuxDebFile.url();
    expect(downloadURL).toEqual('https://pub.teleguard.com/teleguard-desktop-latest.deb');
    await LinuxDebFile.delete();
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
});

