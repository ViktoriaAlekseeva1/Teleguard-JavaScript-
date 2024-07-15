import { test, expect } from '@playwright/test';
export default class Form{
    constructor(page) {
        this.page = page;

    //Locators
    this.fieldNameBusiness = this.page.locator('//*[@id="Name"]')
    this.fieldFirstNameBusines = this.page.locator('//*[@id="First name"]')
    this.fieldEmailBusiness = this.page.locator('//*[@id="Email"]')
    this.fieldCompanyBusiness = this.page.locator('//*[@id="Company"]//div[2]')
    this.fieldNumberOfUsers = this.page.locator('//*[@id="contacts"]/div/form/fieldset[3]/div[1]/div')
    this.fieldSelectTariff = this.page.locator('//*[@id="contacts"]/div/form/fieldset[3]/div[2]/div')
    this.fieldStreetHouseNumber = this.page.locator('//*[@id="Street"]//div[2]')
    this.fieldZipCodeCity = this.page.locator('//*[@id="City"]//div[2]')
    this.fieldPhoneBusiness = this.page.locator('//*[@id="Phone"]//div[2]')
    this.fieldCommentBusiness = this.page.locator('//*[@id="contacts"]/div/form/textarea//div[2]')
    this.agreementCheckbox = this.page.locator('//*[@id="Agreement"]')
    this.sendButton = this.page.locator('//*[@id="contacts"]/div/form/button')

    }
    async ContactUsBusiness () {
        await page.goto('https://dev.teleguard.com/en');
        await this.page.getByPlaceholder('Name *', { exact: true }).click();
        await this.page.getByPlaceholder('First name *').click();
        await this.page.getByPlaceholder('Email address *').click();
        await this.page.getByPlaceholder('Company *').click();
        await this.page.getByText('Number of users *').click();
        await this.page.getByText('Select tariff *').click();
        await this.page.getByPlaceholder('Street, house number *').click();
        await this.page.getByPlaceholder('Zip code, city *').click();
        await this.page.getByPlaceholder('Phone').click();
        await this.page.getByPlaceholder('Comment *').click();
        await this.page.getByLabel('I agree that my data will be').check();
        await this.page.getByRole('button', { name: 'send' }).click();
    }

}