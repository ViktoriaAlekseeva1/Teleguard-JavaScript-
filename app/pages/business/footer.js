
export default class Footer{
    constructor(page) {
        this.page = page;

        this.allLinks = (name) => this.page.getByRole('link', { name: name })
        //this.allLinksNetworkFooter = (index) => this.page.getByRole('link', { icon: index }).nth(index)
        //this.allLinksNetworkFooter = (index) => this.page.locator('.col > .social-links > a').nth(index)
        this.allLinksNetworkFooter = (index) => {
            const correctedIndex = index >= 3 ? index + 1 : index; // Пропускаем VK
            return this.page.locator('.col > .social-links > a').nth(correctedIndex);
        };
        

    //Locators
    
    this.Imprint = this.page.locator('link', { name: 'Imprint' })
    this.PrivacyPolicy = this.page.locator('link', { name: 'Privacy Policy' })
    this.TermsOfUse = this.page.locator('link', { name: 'Terms of use' })
    this.Press = this.page.locator('link', { name: 'Press' })
    this.BetaTesting = this.page.locator('link', { name: 'Beta Testing' })
    this.SwisscowsAG = this.page.locator('link', { name: 'SwisscowsAG' })


    this.TwitterFooter = this.page.locator('link', { icon: '.col > .social-links > a' })
    this.FacebookFooter = this.page.locator('link', { icon: '.col > .social-links > a:nth-child(2)' })
    this.IntagramFooter = this.page.locator('link', { icon: '.col > .social-links > a:nth-child(3)' })
    this.VKFooter = this.page.locator('link', { icon: '.col > .social-links > a:nth-child(4)' })
    this.LinkedInFooter = this.page.locator('link', { icon: '.col > .social-links > a:nth-child(5)' })

}
async clickLinkFooter(name) {
    await this.allLinks(name).click()
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
async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
}
}

