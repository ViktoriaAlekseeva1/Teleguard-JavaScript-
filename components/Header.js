import { test, expect } from '@playwright/test';
import fs from'fs';
export default class Header{
    constructor(page) {
        this.page = page;

        this.allLinksNetwork = (index) => this.page.locator('.social-links > a').nth(index)
        this.allLinks = (name) => this.page.getByRole('link', { name: name, exact: true })
        this.storeLink = (id) => this.page.locator(`#app-${id}`)

        this.allLanguages = (name) => this.page.getByRole('link', { name: name }).first()
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
        this.linkGooglePlay = this.page.locator('#app-android')
        //header3
        this.linkBeta = this.page.locator('link', { name: 'Teleguard.com/beta-testing' })
        //apk header
        this.buttonApk = this.page.locator('link', { name: 'Download APK file' }).first()
        this.buttonPopup = this.page.locator('link', { name: 'Download APK file' }).nth(2)

        //social network

        this.linkTwitterHeader = this.page.locator('.social-links > a')
        this.linkFacebookHeader = this.page.locator('.social-links > a:nth-child(2)')
        this.linkIntagramHeader = this.page.locator('.social-links > a:nth-child(3)')
        this.linkVKHeader = this.page.locator('a:nth-child(4)')
        this.linkLinkedInHeader = this.page.locator('.social-links > a:nth-child(5)')


        //SwitchLanguages
        this.languageDropdownButton = this.page.locator('//*[@id="header"]/div/nav/div[2]/ul')
        this.English = this.page.locator('//*[@id="header"]/div/nav/div[2]/ul/li[1]/a')
        //await this.page.getByText('English Deutsch Français')
        this.Deutsch = this.page.locator('//*[@id="header"]/div/nav/div[2]/ul/li[2]/a')
        this.Deutsch = this.page.locator('link', { name: 'Deutsch' })
        this.Français = this.page.locator('link', { name: 'Français' })
        this.français = this.page.locator('link', { name: 'français' })
        this.Italiano = this.page.locator('link', { name: 'Italiano' })
        this.italiano = this.page.locator('link', { name: 'italiano' })
        this.Español = this.page.locator('link', { name: 'Español' })
        this.español = this.page.locator('link', { name: 'español' })
        this.Русский = this.page.locator('link', { name: 'Русский' })
        this.русский = this.page.locator('link', { name: 'русский' })
        this.Українська = this.page.locator('link', { name: 'Українська' })
        this.українська = this.page.locator('link', { name: 'українська' })
        this.English = this.page.locator('link', { name: 'English' })
    }


    
    async clickLinkHeader(link) {
        await this.allLinks(link).click()
    }
    async switchLanguages(name) { 
        await this.allLanguages(name).click()
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



    apkButtonHeader = async() => {
        await this.page.getByRole('link', { name: 'Download APK file' }).first().click();
        const downloadPromise = this.page.waitForEvent('download', { timeout: 600000 });
        await this.page.getByRole('link', { name: 'Download APK file' }).nth(2).click(); 
        const download = await downloadPromise;
        return download;
    }
    MSWindowsButtonHeader = async() => {
        const download1Promise = this.page.waitForEvent('download', { timeout: 600000 });
        await this.page.getByRole('link', { name: 'MS Windows (8.0+)' }).click();
        const download1 = await download1Promise;
        return download1;
    }
    MacOSButtonHeader = async() => {
        const download2Promise = this.page.waitForEvent('download', { timeout: 600000 });
        await this.page.getByRole('link', { name: 'MacOS' }).click();
        const download2 = await download2Promise;
        return download2;
    }
    LinuxDEB_ButtonHeader = async() => {
        await this.page.getByRole('link', { name: 'Linux', exact: true }).click();
        const download3Promise = this.page.waitForEvent('download', { timeout: 600000});
        await this.page.getByRole('link', { name: 'DOWNLOAD .DEB' }).click();
        const download3 = await download3Promise;
        return download3;
    }
    LinuxSnapStoreButtonHeader = async() => {
    await this.page.getByRole('link', { name: 'Linux', exact: true }).click();
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



