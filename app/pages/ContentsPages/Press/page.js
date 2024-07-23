import { test, expect } from '@playwright/test';
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export default class Press {
    constructor(page) {
        this.page = page;

        this.header = new Header(page);
        this.footer = new Footer(page);
        

        // Locators
        this.pressLogo = this.page.getByRole('link', { name: 'logo Secure. Encrypted.' })
        this.textError = this.page.locator('.error-500');
    }
    async clickLogoPress(){
        await this.pressLogo.click();

        const error500Element = await this.page.locator('.error-500').count();
        if (error500Element > 0) {
            await this.page.reload();
        }
        return this.page;
    }

    async openPress (){
        await this.page.goto('https://dev.teleguard.com/en/press');
    }
    teleGuardLogo1 = async() => {
        await expect(this.page.locator('.press-img').first()).toBeVisible();
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.locator('.press-info > a').first().click();
        const page1 = await page1Promise;
        return page1;
    }
    teleGuardLogo2 = async() => {
        await expect(this.page.locator('div:nth-child(2) > .press-img')).toBeVisible();
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.locator('div:nth-child(2) > .press-info > a').click();
        const page1 = await page1Promise;
        return page1;
    }
    TeleGuardIcon = async() => {
        await expect(this.page.locator('div:nth-child(3) > .press-img')).toBeVisible();
        const download2Promise = this.page.waitForEvent('download');
        await this.page.locator('div:nth-child(3) > .press-info > a').click();
        const download2 = await download2Promise;
        return download2;
    }
    expectFileDownloadName = async(download, name) => {
        expect(download.suggestedFilename()).toBe(name);
    }
    TeleGuardScreenshotsIOS = async() => {
        await expect(this.page.locator('div:nth-child(4) > .press-img')).toBeVisible();
        const download2Promise = this.page.waitForEvent('download');
        await this.page.locator('div:nth-child(4) > .press-info > a').click();
        const download2 = await download2Promise;
        return download2;
    }
    TeleGuardScreenshotsAndroid = async() => {
        await expect(this.page.locator('div:nth-child(5) > .press-img')).toBeVisible();
        const download2Promise = this.page.waitForEvent('download');
        await this.page.locator('div:nth-child(5) > .press-info > a').click();
        const download2 = await download2Promise;
        return download2;
    }
    


}