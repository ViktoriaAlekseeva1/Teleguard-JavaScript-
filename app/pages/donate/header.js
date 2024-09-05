export default class Header{
    constructor(page) {
        this.page = page;
        
        //Locators
        this.allLanguages = (name) => this.page.getByRole('link', { name: name }).first()
        this.textError = this.page.locator('h2:has-text("Error 500: Internal Server")')
        
        //SwitchLanguages
        this.English = this.page.locator('//*[@class="header--donation"]/div/div/div/div[1]/a')
        this.Deutsch = this.page.locator('link', { name: 'Deutsch' })
        this.Français = this.page.locator('link', { name: 'Français' })
        this.Italiano = this.page.locator('link', { name: 'Italiano' })
        this.Español = this.page.locator('link', { name: 'Español' })
        this.Русский = this.page.locator('link', { name: 'Русский' })
        this.Українська = this.page.locator('link', { name: 'Українська' })

    }
    async switchLanguages(name) { 
        await this.allLanguages(name).click()
    }
    async logoDonate () {
        await this.page.getByRole('link', { name: 'TeleGuard' }).click();
    }







}