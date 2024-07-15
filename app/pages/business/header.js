import { test, expect } from '@playwright/test';
export default class Header{
    constructor(page) {
        this.page = page;
        //Locators
        this.allLinks = (name) => this.page.getByRole('link', { name: name })
        this.allLanguages = (name) => this.page.getByRole('link', { name: name }).first()
        

        
        
    }

    async clickLinkHeader(name) {
       await this.allLinks(name).click()
    }
    async switchLanguages(name) { 
        await this.allLanguages(name).click()
    }

    async logoBusinessPage () {
        await this.page.getByRole('link', { name: 'logo' }).click();
    }

}