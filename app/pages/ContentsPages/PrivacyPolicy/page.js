import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export default class PrivacyPolicy {
    constructor(page) {
        this.page = page;

        this.header = new Header(page);
        this.footer = new Footer(page);
        

        // Locators
        /*
        this.privacyLogo = this.page.getByRole('link', { name: 'logo Secure. Encrypted.' })
        this.linkSupportPrivacy1 = this.page.locator('p').filter({ hasText: 'Users can unsubscribe from' }).getByRole('link');
        this.linkSupportPrivacy2 = this.page.locator('p').filter({ hasText: 'We offer you the opportunity' }).getByRole('link');
        this.linkSupportPrivacy3 = this.page.locator('p').filter({ hasText: 'Children\'s privacy You assure' }).getByRole('link');
        this.linkTeleguardImprint = this.page.getByRole('link', { name: 'teleguard.com/en/imprint,' });
        this.linkSupportPrivacy4 = this.page.locator('li').filter({ hasText: 'via email to support@' }).getByRole('link');
        this.linkInfoPrivacy = this.page.getByRole('link', { name: 'info@swisscows.com' });
        */
        this.linkSupportPrivacy1 = this.page.locator('p', { hasText: 'Users can unsubscribe from' }).locator('a[href="mailto:support@teleguard.com"]');
        this.linkSupportPrivacy2 = this.page.locator('p', { hasText: 'We offer you the opportunity' }).locator('a[href="mailto:support@teleguard.com"]');
        this.linkSupportPrivacy3 = this.page.locator('p', { hasText: 'Children\'s privacy You assure' }).locator('a[href="mailto:support@teleguard.com"]');
        this.linkSupportPrivacy4 = this.page.locator('li', { hasText: 'via email to support@' }).locator('a[href="mailto:support@teleguard.com"]');
        this.linkTeleguardImprint = this.page.getByRole('link', { name: 'teleguard.com/en/imprint,' });
        this.linkInfoPrivacy = this.page.locator('a[href="mailto:info@swisscows.com"]');

    }


    async openPrivacy(){
        await this.page.goto('https://dev.teleguard.com/en/privacy');

    }
    async clickLogoPrivacyPage(){
        await this.privacyLogo.click();

        const error500Element = await this.page.locator('.error-500').count();
        if (error500Element > 0) {
            await this.page.reload();
        }
        return this.page;

    }
    async clickLinkSupportPrivacyPage1() {
        await this.linkSupportPrivacy1.click();

    }
    async clickLinkSupportPrivacyPage2() {
        await this.linkSupportPrivacy2.click();

    }
    async clickLinkSupportPrivacyPage3() {
        await this.linkSupportPrivacy3.click();

    }
    async clickLinkTeleguargImprintPrivacyPage(){
        await this.linkTeleguardImprint.click();

        const error500Element = await this.page.locator('.error-500').count();
        if (error500Element > 0) {
            await this.page.reload();
        }
        return this.page;

    }
    async clickLinkSupportPrivacyPage4() {
        await this.linkSupportPrivacy4.click();

    }
    async clickLinkInfoPrivacyPage() {
        await this.linkInfoPrivacy.click();

    }
}

