
export default class Form{
    constructor(page) {
        this.page = page;
            //Locators
    this.fieldNameBusiness = this.page.locator('//input[@placeholder="Name *"]')
    this.fieldFirstNameBusines = this.page.locator('//input[@placeholder="First name *"]')
    this.fieldEmailBusiness = this.page.locator('//input[@placeholder="Email address *"]')
    this.fieldCompanyBusiness = this.page.locator('//input[@placeholder="Company *"]')
    this.fieldNumberOfUsers = this.page.locator('//button[@role="combobox"]').filter({ hasText: 'Number of users' });
    this.fieldSelectTariff = this.page.locator('//button[@role="combobox"][2]').filter({ hasText: 'Select tariff' });
    this.fieldStreetHouseNumber = this.page.locator('//input[@placeholder="Street, house number *"]')
    this.fieldZipCodeCity = this.page.locator('//input[@placeholder="Zip code, city *"]')
    this.fieldPhoneBusiness = this.page.locator('//input[@placeholder="Phone"]')
    this.fieldCommentBusiness = this.page.locator('//textarea[@name="comments"]')
    this.agreementCheckbox = this.page.locator('input[name="agreement"]')
    this.sendButton = this.page.locator('//button[@ type="submit"]')

    this.headingSuccess = this.page.getByRole('heading', { name: 'Success!' })
    this.buttonStartPageSuccess = this.page.getByRole('link', { name: 'start page' })
    }



    async ContactUsBusiness1 () {
        await this.fieldNameBusiness.fill('Business Basic');
        await this.fieldFirstNameBusines.fill('Business Basic');
        await this.fieldEmailBusiness.fill('test@test.com');
        await this.fieldCompanyBusiness.fill('Business Basic');
        await this.page.locator('button').filter({ hasText: 'Number of users *' }).click();
        await this.page.getByRole('listbox').click();
        await this.page.locator('button').filter({ hasText: '<' }).click();
        await this.page.getByLabel('< 10', { exact: true }).click();
        await this.fieldSelectTariff.click();
        await this.page.getByRole('option', { name: 'Basic' }).click();
        await this.fieldStreetHouseNumber.fill('Street 21');
        await this.fieldZipCodeCity.fill('343456');
        await this.fieldPhoneBusiness.fill('0678964587');
        await this.fieldCommentBusiness.fill('Test page Business Basic'); 
        await this.agreementCheckbox.click();
        await this.sendButton.click();
    }
    async ContactUsBusiness2 () {
        await this.fieldNameBusiness.fill('Business Enterprise');
        await this.fieldFirstNameBusines.fill('Business Enterprise');
        await this.fieldEmailBusiness.fill('test@test.com');
        await this.fieldCompanyBusiness.fill('Business Enterprise');
        await this.page.locator('button').filter({ hasText: 'Number of users *' }).click();
        await this.page.getByRole('listbox').click();
        await this.page.locator('button').filter({ hasText: '<' }).click();
        await this.page.getByLabel('< 50', { exact: true }).click();
        await this.fieldSelectTariff.click();
        await this.page.getByRole('option', { name: 'Enterprise' }).click();
        await this.fieldStreetHouseNumber.fill('Street 213');
        await this.fieldZipCodeCity.fill('343456');
        await this.fieldPhoneBusiness.fill('0678964587');
        await this.fieldCommentBusiness.fill('Test page Business Enterprise'); 
        await this.agreementCheckbox.click();
        await this.sendButton.click();
    }
    async ContactUsBusiness3(){
        await this.fieldNameBusiness.pressSequentially('Business Pro');
        await this.fieldFirstNameBusines.pressSequentially('Business Pro');
        await this.fieldEmailBusiness.pressSequentially('test@test.com');
        await this.fieldCompanyBusiness.pressSequentially('Business Pro');
        await this.page.locator('button').filter({ hasText: 'Number of users *' }).click();
        await this.page.getByRole('listbox').click();
        await this.page.locator('button').filter({ hasText: '<' }).click();
        await this.page.getByLabel('< 100').click();
        await this.fieldSelectTariff.click();
        await this.page.getByRole('option', { name: 'Pro' }).click();
        await this.fieldStreetHouseNumber.pressSequentially('Street 21');
        await this.fieldZipCodeCity.pressSequentially('343456');
        await this.fieldPhoneBusiness.pressSequentially('0678964587');
        await this.fieldCommentBusiness.pressSequentially('Test page Business Pro'); 
        await this.agreementCheckbox.click();
        await this.sendButton.click();
    }
    async ContactUsBusiness4WithoutPhone() {
        await this.fieldNameBusiness.pressSequentially('Business Pro');
        await this.fieldFirstNameBusines.pressSequentially('Business Pro');
        await this.fieldEmailBusiness.pressSequentially('test@test.com');
        await this.fieldCompanyBusiness.pressSequentially('Business Pro');
        await this.page.locator('button').filter({ hasText: 'Number of users *' }).click();
        await this.page.getByRole('listbox').click();
        await this.page.locator('button').filter({ hasText: '<' }).click();
        await this.page.getByLabel('> 100').click();
        await this.fieldSelectTariff.click();
        await this.page.getByRole('option', { name: 'Pro' }).click();
        await this.fieldStreetHouseNumber.pressSequentially('Street 21');
        await this.fieldZipCodeCity.pressSequentially('343456');
        await this.fieldCommentBusiness.pressSequentially('Test page Business Pro'); 
        await this.agreementCheckbox.click();
        await this.sendButton.click();
    }
    async LinkDataProtection(){
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.getByRole('link', { name: 'data protection', exact: true }).click()
        ]);
        return newPage;
    }




}