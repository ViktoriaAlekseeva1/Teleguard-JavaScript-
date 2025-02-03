import { expect } from '@playwright/test';
import Form from './form.js';
import Footer from '../../components/Footer.js';
import Header from '../../components/Header.js';
import ContentHome from './contentHome.js';
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
        this.iconTopScroll = this.page.locator('#scroll-top').getByRole('img')
        this.elementLocatorfocusOnPrivacy = this.page.getByRole('heading', { name: 'focus on privacy' });
        this.element1 = this.page.locator('div').filter({ hasText: 'Practical, modern messenger' }).nth(3)
        this.element2 = this.page.locator('div').filter({ hasText: 'Independent company under' }).nth(3)
        this.element3 = this.page.locator('div').filter({ hasText: 'Complex encryption system for' }).nth(3)
        this.element4 = this.page.locator('div').filter({ hasText: 'All servers are located in' }).nth(3)
        this.element5 = this.page.locator('div').filter({ hasText: 'No storage of user data on' }).nth(3)
        this.element6 = this.page.locator('div').filter({ hasText: 'No connection to a telephone' }).nth(3)
        this.element7 = this.page.locator('div').filter({ hasText: 'Practical, modern messenger' }).nth(2)

    }
    async open() {
        await this.page.goto('https://dev.teleguard.com');
        const error500Element = await this.page.locator('h2:has-text("Error 500: Internal Server")').count();
        if (error500Element > 0) {
            
            await this.page.reload();
        }
    }
    async openDropDownMenuHome(){
        const languageDropdownButton = await this.page.locator('.languages');
        await languageDropdownButton.click();
    }
    /*
    async iconTopScrollChangeColor(){ //no working
        await this.linkSwisscowsAG.scrollIntoViewIfNeeded();
        const buttonLocator = this.iconTopScroll;
        const colorBeforeHover = await buttonLocator.evaluate(button => {// Получите цвет кнопки до наведения
            return window.getComputedStyle(button).backgroundColor;
        });
        await buttonLocator.hover();
        await this.page.waitForTimeout(500);
        const colorAfterHover = await buttonLocator.evaluate(button => {//Получите цвет кнопки после наведения
            return window.getComputedStyle(button).backgroundColor;
        });
        expect(colorBeforeHover).not.toBe('rgba(0, 0, 0, 0)'); // Проверка, что цвет не прозрачен
        expect(colorAfterHover).not.toBe('rgba(0, 0, 0, 0)'); // Проверка, что цвет после наведения не прозрачен
        expect(colorBeforeHover).not.toBe(colorAfterHover);

    }
        */

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

    async FAQ () {
        const error500Element = await this.page.locator('h2:has-text("Error 500: Internal Server")').count();
        if (error500Element > 0) {
            
            await this.page.reload();
        }
       
    }
    async checkElementsVisibleOnScroll (){
        const elements = [
            this.elementLocatorfocusOnPrivacy,
            this.element1,
            this.element2,
            this.element3,
            this.element4,
            this.element5,
            this.element6,
            this.element7
        ];
        for (const element of elements) {
            // Прокрутка до элемента, если он не видим
            await element.scrollIntoViewIfNeeded();
            // Убедитесь, что элемент видим
            await expect(element).toBeVisible();


        }


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
    async clickLinkMoreInfo(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.linkMoreInfo.click()
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        return newPage;

    }


}