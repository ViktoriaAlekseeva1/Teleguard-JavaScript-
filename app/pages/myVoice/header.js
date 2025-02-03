
export default class Header{
    constructor(page) {
        this.page = page;
        //Locators

        //this.allLanguages = (name) => this.page.getByRole('link', { name: name }).first()
        this.allLanguages = (name) => this.page.getByText(name).first();
        this.shopsHeader = (link) => this.page.locator('#header').getByRole('link', { name: link });
  
    }
    
    async switchLanguagesMyVoise(name) { 
        await this.allLanguages(name).click()
    }
    async buttonTeleguard (){
        await this.page.getByRole('link', { name: 'TELEGUARD', exact: true }).click();
    }


    async clickShopHeaderLinks(link) {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent("page"),
            await this.shopsHeader(link).click()
        ]);
        await newPage.waitForLoadState("domcontentloaded");
        return newPage;
    }


}
    


