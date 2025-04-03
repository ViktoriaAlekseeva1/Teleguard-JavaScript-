
export default class Form{
    constructor(page) {
        this.page = page;

    //Locators
    this.fieldTeleguardID = this.page.locator('//input[@placeholder="Teleguard ID *"]')
    this.fieldYourEmail = this.page.locator('//input[@placeholder="Your Email *"]')
    this.fieldDevice = this.page.locator('//input[@placeholder="Device *"]')
    this.fieldSystemVersion = this.page.locator('//input[@placeholder="System, Version *"]')
    this.fieldCountry = this.page.locator('//input[@placeholder="Country *"]')
    this.fieldNumberOfTeleguard = this.page.locator('//input[@placeholder="Number of TeleGuard contacts (approx.)"]')
    this.fieldFullName = this.page.locator('//input[@placeholder="Full Name"]')
    this.fieldComment = this.page.locator('//textarea[@name="comments"]') 
    this.agreementCheckboxBetaTesting = this.page.locator('input[name="agreement"]')
    this.sendButtonBetaTesting = this.page.locator('//button[@type="submit"]')
    this.linkPrivacyPolicy = this.page.locator('//*[@class="agreement"]/p/a')

    

    this.headingSuccess = this.page.getByRole('heading', { name: 'Success!' })
    this.buttonStartPageSuccess = this.page.getByRole('link', { name: 'start page' })


    }
    async JoinTeleguardBetaTesting () {
        await this.fieldTeleguardID.fill('DQ2SABC4Q');
        await this.fieldYourEmail.fill('test@test.com');
        await this.fieldDevice.fill('test1234');
        await this.fieldSystemVersion.fill('4.09.67');
        await this.fieldCountry.fill('Country Test');
        await this.fieldNumberOfTeleguard.fill('DQ2SABC$Q');
        await this.fieldFullName.fill('Full Name Test');
        await this.fieldComment.fill('TEST');
        await this.agreementCheckboxBetaTesting.click();
        await this.sendButtonBetaTesting.click();
    }
    
    async LinkPrivacyPolicyBetaTesting() {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.getByRole('link', { name: 'privacy policy', exact: true }).click()
        ]);
        return newPage;
    }

    async waitForSuccessPageLoad() {
        await this.headingSuccess.waitFor({ state: 'visible' }); // Ожидание видимости заголовка успешности
    }
}

