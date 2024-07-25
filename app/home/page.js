import { test, expect } from '@playwright/test';
import Form from './form';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ContentHome from './contentHome';
export default class Home {
    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);
        this.form = new Form(page);
        this.contentHome = new ContentHome(page);

        //Locators
        this.headingSuccess = this.page.getByRole('heading', { name: 'Success!' })
        this.buttonStartPageSuccess = this.page.getByRole('link', { name: 'start page' })
        this.images = this.page.locator('.home image')
        this.linkSwisscowsAG = this.page.getByRole('link', { name: 'Swisscows AG' })

    }
    async open() {
        await this.page.goto('https://dev.teleguard.com');
        const error500Element = await this.page.locator('h2:has-text("Error 500: Internal Server")').count();
        if (error500Element > 0) {
            
            await this.page.reload();
        }
    }
    async openDropDownMenu(){
        const languageDropdownButton = await this.page.locator('//*[@id="header"]/div/nav/div[1]/a');
        await languageDropdownButton.click();
    }

    async LinkAppStore () {
        
        await Promise.all([
            await this.page.locator('#app-ios').click(),
        ])
    }

    async GooglePlay () {
        
        await Promise.all([
            await this.page.locator('#app-android').click(),
        ])
    }


    async linkBetaTesting () {
        
        await this.page.getByRole('link', { name: 'Teleguard.com/beta-testing' }).click();
    }


    async ScreenshotsAndroid () {
        
        await this.page.getByRole('link', { name: 'Android', exact: true }).click();
        await this.page.getByRole('button').nth(1).click();
    }
    async ScreenshotsIOS () {
       
        await this.page.getByRole('link', { name: 'IOS', exact: true }).click();
        
    }
    async ScreenshotsWindows () {
      
        await this.page.getByRole('link', { name: 'Windows', exact: true }).click();
        
    }
    //Donatiom PayPal
    async DonateWithPayPal () {
       
        await this.page.getByRole('link', { name: 'Donate with PayPal' }).click();
    }

    async FAQ () {
        const error500Element = await this.page.locator('h2:has-text("Error 500: Internal Server")').count();
        if (error500Element > 0) {
            
            await this.page.reload();
        }
       
    }
    //Contact us 
    async ContactUs () {
        await this.page.locator('div').filter({ hasText: '/^Please select request category \*$/' }).click();
        await this.page.getByText('Report a bugPropose an').click();
        await this.page.locator('li').filter({ hasText: 'Report a bug' }).click();
        await this.page.locator('div').filter({ hasText: '/^Report a bug$/' }).click();
        await this.page.locator('div').filter({ hasText: '/^Operating system you use \*$/' }).click();
        await this.page.getByText('iOSAndroidWindows').click();
        await this.page.locator('div').filter({ hasText: '/^Android$/' }).click();
        await this.page.locator('li').filter({ hasText: 'iOS' }).click();
        await this.page.locator('div').filter({ hasText: '/^iOS$/' }).click();
        

        await this.page.getByPlaceholder('Your gadget’s model * (').click();
        await this.page.getByPlaceholder('Your gadget’s model * (').fill('test');
        await this.page.getByRole('button', { name: 'send' }).click();
     
        await this.page.locator('li').filter({ hasText: 'Propose an improvement' }).click();
        await this.page.locator('div').filter({ hasText: '/^Propose an improvement$/' }).click();

        await this.page.locator('div').filter({ hasText: '/^Android$/' }).click();
        await this.page.locator('li').filter({ hasText: 'Android' }).click();
        await this.page.locator('div').filter({ hasText: '/^Android$/' }).click();

        await this.page.locator('li').filter({ hasText: 'Other' }).click();
        await this.page.locator('div').filter({ hasText: '/^Other$/' }).click();
        await this.page.locator('div').filter({ hasText: '/^Operating system you use \*$/' }).click();
        await this.page.getByText('iOSAndroidWindows').click();
        await this.page.locator('div').filter({ hasText: '/^Android$/' }).click();
        await this.page.locator('li').filter({ hasText: 'Windows' }).click();
        await this.page.locator('div').filter({ hasText: '/^Windows$/' }).click();
    }
    async expectPageToHaveScreenshot(testInfo) {
    
        testInfo.snapshotSuffix = "";
        const imageElements = await this.images.all();
        for (const image of imageElements) {
          await image.scrollIntoViewIfNeeded();
          await expect(image).not.toHaveJSProperty("naturalWidth", 0);
        }
        await expect(this.page).toHaveScreenshot(`${testInfo.title}.png`, {
          fullPage: true,
        });
    }
    //linkSwisscowsAG
    async clickLinkSwisscowsAG(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.linkSwisscowsAG.click()
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        return newPage;

    }

}