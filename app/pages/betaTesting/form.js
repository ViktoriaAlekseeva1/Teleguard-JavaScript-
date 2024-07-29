import { test, expect } from '@playwright/test';
export default class Form{
    constructor(page) {
        this.page = page;

    //Locators
    this.fieldTeleguardID = this.page.locator('//*[@id="Form_ID"]')
    this.fieldYourEmail = this.page.locator('//*[@id="Form_Email"]')
    this.fieldDevice = this.page.locator('//*[@id="Form_Device"]')
    this.fieldSystemVersion = this.page.locator('//*[@id="Form_OS"]')
    this.fieldCountry = this.page.locator('//*[@id="Form_Country"]')
    this.fieldNumberOfTeleguard = this.page.locator('//*[@id="Form_NumberContacs"]')
    this.fieldFullName = this.page.locator('//*[@id="Form_Name"]')
    this.fieldComment = this.page.locator('//*[@id="Form_Comments"]')
    this.agreementCheckboxBetaTesting = this.page.locator('//*[@class="agreement"]/p')//('//*[@id="Form_Agreement"]')
    this.sendButtonBetaTesting = this.page.locator('//*[@class="container"]/div/form/button')
    this.linkPrivacyPolicy = this.page.locator('//*[@class="agreement"]/p/a')
    

    this.headingSuccess = this.page.getByRole('heading', { name: 'Success!' })
    this.buttonStartPageSuccess = this.page.getByRole('link', { name: 'start page' })


    }
    async JoinTeleguardBetaTesting () {
        await page.getByPlaceholder('Teleguard ID *').click();
        await page.getByPlaceholder('Device *').click();
        await page.getByPlaceholder('Country *').click();
        await page.getByPlaceholder('Your Email *').click();
        await page.getByPlaceholder('System, Version *').click();
        await page.getByPlaceholder('Number of TeleGuard contacts').click();
        await page.getByPlaceholder('Full Name').click();
        await page.getByPlaceholder('Comment').click();
        await page.getByLabel('I agree that my data will be').click();
        await page.getByRole('button', { name: 'send' }).click();
    
    }
    async LinkPrivacyPolicyBetaTesting (){
        await this.page.goto('https://dev.teleguard.com/en/beta-testing')
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: 'privacy policy', exact: true }).click();
        const page1 = await page1Promise;
    }
    async waitForSuccessPageLoad() {
        await this.headingSuccess.waitFor({ state: 'visible' }); // Ожидание видимости заголовка успешности
    }
}

