import Form from "./form.js";
import Footer from "../../../components/Footer.js";
import Header from "../../../components/Header.js";
export default class BetaTesting {
    constructor(page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);
        this.form = new Form(page);
        //Locators
        this.textError = this.page.locator('h2:has-text("Error 500: Internal Server")')
        //this.dropDownMenu = this.page.locator('//*[@id="header"]/div/nav/div[2]/ul')
       //SwitchLanguages
       this.allLanguages = (name) => this.page.getByText(name).first();

    }
    async openBetaTesting() {
        await this.page.goto('https://dev.teleguard.com/en/beta-testing');
        const error500Element = await this.textError.count();
        if (error500Element > 0) {
            await this.page.reload();
        }
    }
    async openDropDownMenuBetaTesting(){
        const languageDropdownButton = await this.page.locator('//*[@id="header"]/div/nav/div[1]');
        await languageDropdownButton.click();

    }
    async logoBetaTesting () {
        await this.page.getByRole('link', { name: 'logo' }).click();
    }
    
    async switchLanguagesBetaTesting(name) { 
        await this.allLanguages(name).click();
    }
}