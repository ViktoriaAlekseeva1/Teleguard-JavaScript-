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
        const downloadPromise = this.page.waitForEvent('download', { timeout: 600000 });
        await this.page.getByRole('link', { name: 'Download APK file' }).nth(2).click();
        await new Promise(resolve => setTimeout(resolve, 200000));
        const download = await downloadPromise;
        return download;
    }
    MSWindowsButtonBenefits = async() => {
        const download1Promise = this.page.waitForEvent('download', { timeout: 600000 });
        await this.page.getByRole('link', { name: 'TeleGuard for WINDOWS *' }).click();
        await new Promise(resolve => setTimeout(resolve, 200000));
        const download1 = await download1Promise;
        return download1;
    }
    MacOSButtonBenefits = async() => {
        const download2Promise = this.page.waitForEvent('download', { timeout: 600000 });
        await this.page.getByRole('link', { name: 'TeleGuard for Mac OS' }).click();
        await new Promise(resolve => setTimeout(resolve, 200000));
        const download2 = await download2Promise;
        return download2;
    }
    LinuxDEB_ButtonBenefits = async() => {
        await this.page.getByRole('link', { name: 'TeleGuard for LINUX' }).click();
        const download3Promise = this.page.waitForEvent('download', { timeout: 600000 });
        await this.page.getByRole('link', { name: 'DOWNLOAD .DEB' }).click();
        await new Promise(resolve => setTimeout(resolve, 200000));
        const download3 = await download3Promise;
        return download3;
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
