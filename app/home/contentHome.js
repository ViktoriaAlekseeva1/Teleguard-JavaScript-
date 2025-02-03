import { expect } from '@playwright/test';
export default class ContentHome {
    constructor(page) {
        this.page = page;
        //Locators
        this.buttonApkBenefits = this.page.locator('#benefits').getByRole('link', { name: 'Download APK file' })
        this.buttonPopupBenefits = this.page.getByRole('link', { name: 'Download APK file' }).nth(2)
    }
    apkButtonBenefits = async() => {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.locator('#benefits').getByRole('button', { name: 'Download APK file' }).click();
        await this.page.getByRole('link', { name: 'Download APK file' }).click();
        const download = await downloadPromise;
        return download;
    }
    MSWindowsButtonBenefits = async() => {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('button', { name: 'TeleGuard for WINDOWS *' }).click();
        await this.page.getByRole('link', { name: 'MS Windows (8.0+)' }).click();
        const download = await downloadPromise;
        return download;
    }
    MacOSButtonBenefits = async() => {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('link', { name: 'TeleGuard for Mac OS' }).click();
        const download = await downloadPromise;
        return download;
    }
    LinuxDEB_ButtonBenefits = async() => {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('button', { name: 'TeleGuard for LINUX' }).click();
        await this.page.getByRole('link', { name: 'DOWNLOAD .DEB' }).click({});
        const download = await downloadPromise;
        return download;
    }
    LinuxSnapStoreButtonBenefits = async() => {
    await this.page.getByRole('button', { name: 'TeleGuard for LINUX' }).click();
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.getByRole('link', { name: 'Get it from the Snap Store' }).click()
    ]);
    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
    }
}
