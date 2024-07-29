import { test, expect } from '@playwright/test';
export default class Form {
    constructor(page) {
        this.page = page;
        

        //Locators
        this.categoryDropDown = this.page.locator('div').filter({ hasText: /^Please select request category \*$/ })
        this.systemDropDown = this.page.locator('div').filter({ hasText: /^Operating system you use \*$/ })
        this.bugCategoryInDropdown = this.page.locator('li').filter({ hasText: 'Report a bug' })
        this.IOScategoryInDropdown = this.page.locator('li').filter({ hasText: 'iOS' })
        this.deviceField = this.page.locator('//*[@id="Device"]')
        this.nameField = this.page.locator('//*[@id="Name"]')
        this.emailField = this.page.locator('//*[@id="Email"]')
        this.commentField = this.page.getByPlaceholder('Your Comments *')
        this.agreementCheckbox = this.page.locator('input[id="Agreement"]')     //('//*[@id="Agreement"]')
        this.sendButton = this.page.locator('//*[@id="contacts"]/div/form/button')

        this.improvementCategoryInDropdown = this.page.locator('li').filter({ hasText: 'Propose an improvement' })
        this.AndroidCategoryInDropdown = this.page.locator('li').filter({ hasText: 'Android' })


        this.otherCategoryInDropdown = this.page.locator('li[data-select-option-value="Other"]')
        this.windowsCategoryInDropdown = this.page.locator('li').filter({ hasText: 'Windows' })

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

 
}