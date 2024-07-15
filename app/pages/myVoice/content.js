export default class Content{
    constructor(page) {
        this.page = page;
        //Locators
        this.shopsContent = (name, index) => this.page.getByRole('link', { name }).nth(index)



    }


async clickShopContentLinks(name, index) {
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent("page"),
        this.shopsContent(name, index).click()
    ]);
    await newPage.waitForLoadState("domcontentloaded");
    return newPage;
}

}


