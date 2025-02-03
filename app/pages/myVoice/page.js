import Header from "./header.js"
import Footer from "./footer.js"
import Content from "./content.js";

export default class MyVoice {
    constructor(page) {
        this.page = page;
 
        this.header = new Header(page);
        this.footer = new Footer(page);
        this.content = new Content(page);

        // Locators
    }
async openMyVoise() {
    await this.page.goto('https://dev.teleguard.com/en/myvoice');
    const error500Element = await this.page.locator('h2:has-text("Error 500: Internal Server")').count();
    if (error500Element > 0) {
        
        await this.page.reload();
    }
}
async openDropDownMenu(){
    const languageDropdownButton = await this.page.locator('.languages');;
    await languageDropdownButton.click();
}
}