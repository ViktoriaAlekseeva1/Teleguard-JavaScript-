import Content from "./content"
import Header from "./header"
export default class Donate {
    constructor(page) {
        this.page = page;
        this.header = new Header(page)
        this.content = new Content(page)
        //this.footer = new Footer(page)

        
    //Locators
    this.dropDownMenu = this.page.locator('//*[@class="header--donation"]/div/div/div/div[1]/a')
    this.textError = this.page.locator('h2:has-text("Error 500: Internal Server")')
    }

    async openDonate() {
        await this.page.goto('https://dev.teleguard.com/en/donation');
        const error500Element = await this.textError.count();
        if (error500Element > 0) {
            await this.page.reload();
        }
    }
    async openDropDownMenuDonate(){
        const languageDropdownButton = await this.page.locator('//*[@class="header--donation"]/div/div/div/div[1]/a');
        await languageDropdownButton.click();
    }

    
}

        



    

