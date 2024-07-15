import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
export default class TermsOfUse {
    constructor(page) {
        this.page = page;

        this.header = new Header(page);
        this.footer = new Footer(page);
        

        // Locators
        this.termsOfUseLogo = this.page.getByRole('link', { name: 'logo Secure. Encrypted.' })
        this.linkTeleguardTermsOfUse = this.page.getByRole('link', { name: 'https://teleguard.com' })
        this.linkInfoTermOfUse = this.page.getByRole('link', { name: 'info@swisscows.com' })


    }

    async openTermsOfUse(){
        await this.page.goto('https://dev.teleguard.com/en/termsofuse');

    }
    async clickLogoPrivacyPage(){
        await this.termsOfUseLogo.click();

        const error500Element = await this.page.locator('.error-500').count();
        if (error500Element > 0) {
            await this.page.reload();
        }
        return this.page;

    }
    async clickLinkTeleguard() {
        await this.linkTeleguardTermsOfUse.click();
    }
    async clickLinkInfoTermsOfUsePage(){
        await this.linkInfoTermOfUse.click();
    }
}