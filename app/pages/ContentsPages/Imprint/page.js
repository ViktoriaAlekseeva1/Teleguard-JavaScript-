import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
export default class Imprint {
    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);

        // Locators
        this.linkSupport = this.page.getByRole('link', { name: 'support@teleguard.com' });
        this.linkCompanySwisscows = this.page.getByRole('link', { name: 'company.swisscows.ch' })
        this.imprintLogo = this.page.getByRole('link', { name: 'logo Secure. Encrypted.' })
        this.textError = this.page.locator('.error-500');
    }


    async clickLogoImpintPage(){
        await this.imprintLogo.click();

        const error500Element = await this.page.locator('.error-500').count();
        if (error500Element > 0) {
            await this.page.reload();
        }
        return this.page;

    }
    async clickLinkSupportImprintPage() {
        await this.linkSupport.click();

    }


    async clickLinkCompanySwisscowsImpintPage(){
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),    
            this.linkCompanySwisscows.click(),
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        return newPage;

    }

    async openImprint(){
        await this.page.goto('https://dev.teleguard.com/en/imprint');

            

    }


}