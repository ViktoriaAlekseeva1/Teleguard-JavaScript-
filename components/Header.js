import { test, expect } from '@playwright/test';
import fs from'fs';
export default class Header{
    constructor(page) {
        this.page = page;

        this.allLinksNetwork = (index) => this.page.locator('.social-links > a').nth(index);

        //this.allLanguages = (name) => this.page.locator('li').filter({ hasText: name })
        this.allLinks = (name) => this.page.getByRole('link', { name: name })
        //this.allLinks = (name) => this.page.getByRole('link', { name: name, exact: true })
        this.storeLink = (id) => this.page.locator(`#app-${id}`)

        this.allLanguages = (name) => this.page.getByText(name).first();
        //this.allLanguages = this.page.locator('.languages')
        //Locators
        this.linkBenefits = this.page.locator('//*[@id="menu"]/li[1]/a')
        this.linkFAQ = this.page.locator('//*[@id="menu"]/li[3]/a')
        this.linkContacts = this.page.locator('//*[@id="menu"]/li[4]/a')
        this.linkDonate = this.page.locator('link', { name: 'Donate', exact: true });//*[@id="menu"]/li[5]/a
        this.buttonDonatePayPal = this.page.locator('link', { name: 'Donate with PayPal' })//*[@id="donation"]/div/div/div[1]/a
        this.linkBusiness = this.page.locator('//*[@id="menu"]/li[6]/a')
        this.LogoBusiness = this.page.locator('//*[@id="header"]/div/div/a/img')
        this.linkMyVOICE = this.page.locator('//*[@id="menu"]/li[7]/a')
        //header2
        this.linkAppStore = this.page.locator('#app-ios')
        this.linkGooglePlay = this.page.locator('//*[@id="app-android"]')
        //header3
        this.linkBeta = this.page.locator('link', { name: 'Teleguard.com/beta-testing' })
        //apk header
        //this.buttonApk = this.page.locator('link', { name: 'Download APK file' }).first()
        this.buttonApk = this.page.getByRole('button', { name: 'Download APK file' }).first()//locator('//*[@class="download-apk download-apk-button download-buttons"]')
        this.buttonPopup = this.page.locator('link', { name: 'Download APK file' }).nth(2)

        //social network

        this.linkTwitterHeader = this.page.locator('.social-links > a')
        this.linkFacebookHeader = this.page.locator('.social-links > a:nth-child(2)')
        this.linkIntagramHeader = this.page.locator('.social-links > a:nth-child(3)')
        this.linkVKHeader = this.page.locator('a:nth-child(4)')
        this.linkLinkedInHeader = this.page.locator('.social-links > a:nth-child(5)')



    }
    
    async clickLinkHeader(link) {
        await this.allLinks(link).click();
    }
    async clickLinkMoreInfo () {
        const link = await this.page.getByRole('link', { name: 'ver 3.4.0 Organize' });
        await link.click();
        
    }
    /*      
    async buttonBusinessChageColor(){
        const buttonLocator = this.linkBusiness;
        await buttonLocator.waitFor();
        const colorBeforeHover = await buttonLocator.evaluate(button => {// Получите цвет кнопки до наведения
            return window.getComputedStyle(button).backgroundColor;
        });
        await buttonLocator.hover({ timeout: 5000 });
        const colorAfterHover = await buttonLocator.evaluate(button => {//Получите цвет кнопки после наведения
            return window.getComputedStyle(button).backgroundColor;
        });
        expect(colorBeforeHover).not.toBe(colorAfterHover);
    }
    async buttonMyVoiceChageColor(){
        const buttonLocator = this.linkMyVOICE;
        const colorBeforeHover = await buttonLocator.evaluate(button => {// Получите цвет кнопки до наведения
            return window.getComputedStyle(button).backgroundColor;
        });
        await buttonLocator.hover({ timeout: 5000 });
        const colorAfterHover = await buttonLocator.evaluate(button => {//Получите цвет кнопки после наведения
            return window.getComputedStyle(button).backgroundColor;
        });
        expect(colorBeforeHover).not.toBe(colorAfterHover);
    }
    */
    async checkButtonHoverColorChange(buttonLocator) {
        await expect(buttonLocator).toBeVisible(); // Проверяем, что кнопка видима
    
        // Получаем цвет ДО наведения
        const colorBefore = await buttonLocator.evaluate(el => 
            window.getComputedStyle(el).backgroundColor
        );
    
        // Наводим курсор
        await buttonLocator.hover();
        await this.page.waitForTimeout(500); // Ждем анимацию (если есть)
    
        // Проверяем изменение цвета
        await expect(buttonLocator).not.toHaveCSS('background-color', colorBefore);
    }
    
    async buttonBusinessChangeColor() {
        await this.checkButtonHoverColorChange(this.page.getByRole('link', { name: 'Business' }));
    }
    
    async buttonMyVoiceChangeColor() {
        await this.checkButtonHoverColorChange(this.page.getByRole('link', { name: 'MyVOICE' }));
    }

    async switchLanguagesHome(name) { 
        await this.allLanguages(name).click();
    }

    async clickLinkHeaderSocialNetwork(iconName) {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent("page"),
            await this.allLinksNetwork(iconName).click()
          ]);
          await newPage.waitForLoadState("domcontentloaded");
          return newPage;
  
    }
    async clickStoreLink(id) {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent("page"),
            await this.storeLink(id).click()
          ]);
          await newPage.waitForLoadState("domcontentloaded");
          return newPage;
        
    }




    apkButtonHeader = async() => {//old method
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('button', { name: 'Download APK file' }).first().click();
        await this.page.getByRole('link', { name: 'Download APK file' }).click();
        const download = await downloadPromise;
        return download;
    }
        
       /*
    async apkButtonHeader() { //new method
        const downloadPromise = this.page.waitForEvent('download');  // Ожидание скачивания
        const pagePromise = this.page.waitForEvent('popup'); // Ожидание нового окна
    
        await this.buttonApk.click(); // Кликаем по кнопке через локатор
    
        const newPage = await pagePromise.catch(() => null); // Ловим popup, если он есть
        const download = await downloadPromise; // Ловим скачивание
    
        return { newPage, download }; 
    }
        */
    MSWindowsButtonHeader = async() => {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('button', { name: 'MS Windows (8.0+)' }).click();
        await this.page.getByRole('link', { name: 'MS Windows (8.0+)' }).click();
        const download = await downloadPromise;

        return download;
    }
    MacOSButtonHeader = async() => {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('link', { name: 'MacOS' }).click();
        const download = await downloadPromise;
        return download;
    }
    LinuxDEB_ButtonHeader = async() => {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('button', { name: 'Linux', exact: true }).click();
        await this.page.getByRole('link', { name: 'DOWNLOAD .DEB' }).click();
        const download = await downloadPromise;
        return download;
    }
    LinuxSnapStoreButtonHeader = async() => {
    await this.page.getByRole('button', { name: 'Linux', exact: true }).click();
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.getByRole('link', { name: 'Get it from the Snap Store' }).click()
        
    ]);
    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
    }


    expectFileDownloadName = async(download, name) => {
        expect(download.suggestedFilename()).toBe(name);
    }
    expectFileSizeToBeGreaterThan = async (download, sizeByte) => {//no working
        const filePath = (await download.path()).toString();
        expect((await fs.promises.stat(filePath)).size).toBeGreaterThan(sizeByte);
    }

    



  
}



