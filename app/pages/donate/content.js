export default class Content {
    constructor(page) {
        this.page = page;
        //Locators
    }
        //Donatiom PayPal
    async DonateWithPayPal () {
        await this.page.getByRole('img', { name: 'Donate via PayPal' }).click();
    }
    //Donate via Card
    async DonateViaCard (){
        await this.page.getByRole('link', { name: 'Donate via card' }).click();

    }
}
