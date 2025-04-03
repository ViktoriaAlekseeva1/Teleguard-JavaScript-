import { test, expect } from '@playwright/test';
import fs from'fs';
export default class Footer{
    constructor(page) {
        this.page = page;
        // this.allLinksNetworkFooter = (index) => this.page.locator('.col > .social-links > a').nth(index)
        this.allLinksNetworkFooter = (index) => {const correctedIndex = index >= 3 ? index + 1 : index;
            return this.page.locator('.col > .social-links > a').nth(correctedIndex);}
        this.allLinksFooter = (link) => this.page.getByRole('link', { name: link, exact: true });
    


        //Locators
        this.TwitterFooter = this.page.locator('link', { icon: '.col > .social-links > a' })
        this.FacebookFooter = this.page.locator('link', { icon: '.col > .social-links > a:nth-child(2)' })
        this.IntagramFooter = this.page.locator('link', { icon: '.col > .social-links > a:nth-child(3)' })
        this.VKFooter = this.page.locator('link', { icon: '.col > .social-links > a:nth-child(4)' })
        this.LinkedInFooter = this.page.locator('link', { icon: '.col > .social-links > a:nth-child(5)' })
    
    }
    allLinksNetworkFooter(index) {
        this.page.locator(`.col > .social-links > a:nth-child(${index})`);
    }

    async clickLinkFooter(link) {
        await this.allLinksFooter(link).click()
    }

    async scrollToBottom() {
        await this.page.evaluate(() => {
          window.scrollTo(0, document.body.scrollHeight);
        });
    }
    async clickLinkFooterSocialNetwork(index) {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent("page"),
            await this.scrollToBottom(),
            await this.allLinksNetworkFooter(index).click()
        ]);
          await newPage.waitForLoadState("domcontentloaded");
          return newPage;
  
    }

 
    /*
        //links footer
    //impint
    async linkImprint (){
        await this.page.getByRole('link', { name: 'Imprint' }).click();
        await this.page.getByRole('link', { name: 'logo Secure. Encrypted.' }).click();
    }

    async linkPrivacyPolicy (){
        await this.page.getByText('TeleGuard has an unambiguous');
    }

    async linkTermsOfUse (){
        await this.page.getByRole('link', { name: 'Terms of use' }).click();
    }

    async linkPress (){
        await this.page.getByRole('link', { name: 'Press' }).click();
    }

    async linkBetaTestingFooter (){
        await this.page.getByRole('link', { name: 'Beta Testing' }).click();
    }

    async linkSwisscowsAG (){
        await this.page.getByRole('link', { name: 'Swisscows AG' }).click();
    }

    //social network footer
    async TwitterFooter () {
        
        await this.page.locator('.col > .social-links > a').first().click();
    }

    async FacebookFooter () {
       
        await this.page.locator('.col > .social-links > a:nth-child(2)').click();
    }

    async IntagramFooter () {
        
        await this.page.locator('.col > .social-links > a:nth-child(3)').click();
    }

    async VKFooter () {//???????????????????????????????????????????????????????????????????????????????????????????
        
        await this.page.locator('.col > .social-links > a:nth-child(4)').click();
    }

    async LinkedInFooter () {
       
        await this.page.locator('.col > .social-links > a:nth-child(5)').click();
    } 
    */  
 
}

 
