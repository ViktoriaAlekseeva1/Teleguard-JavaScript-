import { expect } from '@playwright/test';
export default class ContentHome {
    constructor(page) {
        this.page = page;
        //Locators
        this.buttonApkBenefits = this.page.locator('#benefits').getByRole('link', { name: 'Download APK file' })
        this.buttonPopupBenefits = this.page.getByRole('link', { name: 'Download APK file' }).nth(2)
    }
    apkButtonBenefits = async() => {
        await this.page.locator('#benefits').getByRole('link', { name: 'Download APK file' }).click();
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('link', { name: 'Download APK file' }).nth(2).click();
        const download = await downloadPromise;
        await download.saveAs('teleguard-latest.apk');
        return download;
    }
    MSWindowsButtonBenefits = async() => {
        const downloadPromise = this.page.waitForEvent('download',);
        await this.page.getByRole('link', { name: 'TeleGuard for WINDOWS *' }).click();
        const download = await downloadPromise;
        await download.saveAs('teleguard-desktop-latest.exe');
        return download;
    }
    MacOSButtonBenefits = async() => {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('link', { name: 'TeleGuard for Mac OS' }).click();
        const download = await downloadPromise;
        await download.saveAs('teleguard-desktop-latest.dmg');
        return download;
    }
    LinuxDEB_ButtonBenefits = async() => {
        await this.page.getByRole('link', { name: 'TeleGuard for LINUX' }).click();
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('link', { name: 'DOWNLOAD .DEB' }).click();
        const download = await downloadPromise;
        await download.saveAs('teleguard-desktop-latest.deb');
        return download;
    }
    LinuxSnapStoreButtonBenefits = async() => {
    await this.page.getByRole('link', { name: 'TeleGuard for LINUX' }).click();
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.getByRole('link', { name: 'Get it from the Snap Store' }).click()
    ]);
    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
    }
}
