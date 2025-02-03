import { expect } from '@playwright/test';
export default class Form {
    constructor(page) {
        this.page = page;
        

        //Locators
        this.categoryDropDown = this.page.locator('button').filter({ hasText: 'Please select request' })
        this.systemDropDown = this.page.locator('button').filter({ hasText: 'Operating system you use *' })
        this.bugCategoryInDropdown = this.page.getByLabel('Report a bug')
        this.IOScategoryInDropdown = this.page.getByLabel('iOS')
        this.deviceField = this.page.getByPlaceholder('Your gadget’s model * (')
        this.nameField = this.page.getByPlaceholder('Your Name *')
        this.emailField = this.page.getByPlaceholder('Your Email *')
        this.commentField = this.page.getByPlaceholder('Your Comments *')
        this.agreementCheckbox = this.page.getByLabel('I agree that my data will be')//('//*[@class="agreement"]/p')     //('//*[@id="Agreement"]')
        this.sendButton = this.page.getByRole('button', { name: 'send' })

        this.improvementCategoryInDropdown = this.page.getByLabel('Propose an improvement')
        this.AndroidCategoryInDropdown = this.page.getByLabel('Android')


        this.otherCategoryInDropdown = this.page.getByLabel('Other')
        this.windowsCategoryInDropdown = this.page.getByLabel('Windows')

    }
    async buttonSendHomePageChageColor(){
        const buttonLocator = this.sendButton;
        const colorBeforeHover = await buttonLocator.evaluate(button => {// Получите цвет кнопки до наведения
            return window.getComputedStyle(button).backgroundColor;
        });
        await buttonLocator.hover();
        const colorAfterHover = await buttonLocator.evaluate(button => {//Получите цвет кнопки после наведения
            return window.getComputedStyle(button).backgroundColor;
        });
        expect(colorBeforeHover).not.toBe(colorAfterHover);
    }
        //Contact us
    async ContactUs () {
            await this.page.locator('div').filter({ hasText: '/^Please select request category \*$/' }).click();
            await this.page.getByText('Report a bugPropose an').click();
            await this.page.locator('li').filter({ hasText: 'Report a bug' }).click();
            await this.page.locator('div').filter({ hasText: '/^Report a bug$/' }).click();
            await this.page.locator('div').filter({ hasText: '/^Operating system you use \*$/' }).click();
            await this.page.getByText('iOSAndroidWindows').click();
            await this.page.locator('div').filter({ hasText: '/^Android$/' }).click();
            await this.page.locator('li').filter({ hasText: 'iOS' }).click();
            await this.page.locator('div').filter({ hasText: '/^iOS$/' }).click();
            
    
            await this.page.getByPlaceholder('Your gadget’s model * (').click();
            await this.page.getByPlaceholder('Your gadget’s model * (').fill('test');
            await this.page.getByRole('button', { name: 'send' }).click();
         
            await this.page.locator('li').filter({ hasText: 'Propose an improvement' }).click();
            await this.page.locator('div').filter({ hasText: '/^Propose an improvement$/' }).click();
    
            await this.page.locator('div').filter({ hasText: '/^Android$/' }).click();
            await this.page.locator('li').filter({ hasText: 'Android' }).click();
            await this.page.locator('div').filter({ hasText: '/^Android$/' }).click();
    
            await this.page.locator('li').filter({ hasText: 'Other' }).click();
            await this.page.locator('div').filter({ hasText: '/^Other$/' }).click();
            await this.page.locator('div').filter({ hasText: '/^Operating system you use \*$/' }).click();
            await this.page.getByText('iOSAndroidWindows').click();
            await this.page.locator('div').filter({ hasText: '/^Android$/' }).click();
            await this.page.locator('li').filter({ hasText: 'Windows' }).click();
            await this.page.locator('div').filter({ hasText: '/^Windows$/' }).click();
    }
    async ContactUsSendForm () {
        await this.categoryDropDown.click();
        await this.bugCategoryInDropdown.click();
        await this.systemDropDown.click();
        await this.IOScategoryInDropdown.click();
        await this.deviceField.fill('7676');
        await this.nameField.pressSequentially('test');
        await this.emailField.pressSequentially('test@test.com');
        await this.commentField.pressSequentially('TEST');
        await this.agreementCheckbox.click();
        //await this.buttonSendHomePageChageColor();
        await this.sendButton.click();
    }
    async ContactUsSendForm2 (){
        await this.categoryDropDown.click();
        await this.improvementCategoryInDropdown.click();
        await this.systemDropDown.click();
        await this.AndroidCategoryInDropdown.click();
        await this.deviceField.pressSequentially('4343');
        await this.nameField.pressSequentially('test android');
        await this.emailField.pressSequentially('test@test.com');
        await this.commentField.pressSequentially('TEST android');
        await this.agreementCheckbox.click();
        //await this.buttonSendHomePageChageColor();
        await this.sendButton.click();

    }
    async ContactUsSendForm3 () {
        await this.categoryDropDown.click();
        await this.otherCategoryInDropdown.click();
        await this.systemDropDown.click();
        await this.windowsCategoryInDropdown.click();
        await this.deviceField.pressSequentially('2323');
        await this.nameField.pressSequentially('test windows');
        await this.emailField.pressSequentially('test@test.com');
        await this.commentField.pressSequentially('TEST windows');
        await this.agreementCheckbox.click();
        //await this.buttonSendHomePageChageColor();
        await this.sendButton.click();

    }

 
}