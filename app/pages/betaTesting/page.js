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
        this.dropDownMenu = this.page.locator('//*[@id="header"]/div/nav/div[2]/ul')
       //SwitchLanguages
        this.dropDownMenu = this.page.locator('//*[@id="header"]/div/nav/div[2]/ul')
        this.English = this.page.locator('//*[@id="header"]/div/nav/div[1]/a')
        //await this.page.getByText('English Deutsch Français')
        //this.Deutsch = this.page.locator('//*[@id="header"]/div/nav/div[2]/ul/li[2]/a')
        this.Deutsch = this.page.locator('link', { name: 'Deutsch' })
        this.Français = this.page.locator('link', { name: 'Français' })
        //this.français = this.page.locator('link', { name: 'français' })
        this.Italiano = this.page.locator('link', { name: 'Italiano' })
        //this.italiano = this.page.locator('link', { name: 'italiano' })
        this.Español = this.page.locator('link', { name: 'Español' })
        //this.español = this.page.locator('link', { name: 'español' })
        this.Русский = this.page.locator('link', { name: 'Русский' })
        //this.русский = this.page.locator('link', { name: 'русский' })
        this.Українська = this.page.locator('link', { name: 'Українська' })
        //this.українська = this.page.locator('link', { name: 'українська' })
        //this.English = this.page.locator('link', { name: 'English' })

    }
    async openBetaTesting() {
        await this.page.goto('https://dev.teleguard.com/en/beta-testing');
        const error500Element = await this.textError.count();
        if (error500Element > 0) {
            await this.page.reload();
        }
    }
    async openDropDownMenu(){
        const languageDropdownButton = await this.page.locator('//*[@id="header"]/div/nav/div[1]/a');
        await languageDropdownButton.click();

        
        /*
        const languages = await this.page.locator(optionsLocator).innerTexts();
        for (const { locatorName, expectedURL } of testData) {
            if (option.includes(optionText)) {
                await this.page.click(`text=${option}`);
                return;
            }
        */

    }
}