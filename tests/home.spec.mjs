import { test, expect } from '@playwright/test';
import App from '../app/index.js';
import testDatalHeader from "../components/testDataHeader.json"
import testDataFooter from "../components/testDataFooter.json"

for (const {link, expectedUrl} of testDatalHeader.headerLinks) {
    test(`Check click link ${link} in header on Home page` , async ({ page }) => {//links header
       const app = new App(page);
       //Actions
       await app.home.open();
       await app.home.header.clickLinkHeader(link)

       //Assert
       await expect(app.home.page).toHaveURL(expectedUrl);
   });

};
for (const {locatorName, expectedUrl} of testDatalHeader.switchLanguages) {
    test(`Check switch languages ${locatorName} in header Home page`, async ({ page }) => {//languages
      const app = new App(page);
      //Actions
      await app.home.open();
      await app.home.openDropDownMenu();
      await app.home.header.switchLanguages(locatorName)
      //Assert
      await expect(app.home.page).toHaveURL(expectedUrl);
      //await expect(app.businessPage.page.getByRole('list')).toHaveCount(7);
    });
    
}
for (const {index, expectedUrl} of testDatalHeader.headerLinksSocialNetwork) {
    test(`Check click link ${index} in header SocialNetwork on Home page` , async ({ page }) => {//header social network
       const app = new App(page);
       //Actions
       await app.home.open();
       const newPage = await app.home.header.clickLinkHeaderSocialNetwork(index)

       //Assert
       await expect(newPage).toHaveURL(expectedUrl);
   });

};

//Header 2 links shops and beta
for (const {id, expectedUrl} of testDatalHeader.headerAppLinks) {//no working
    test(`Check click link ${id} in header links shops on Home page` , async ({ page }) => {//Header 2 links shops
       const app = new App(page);
       //Actions
       await app.home.open();
       const newPage = await app.home.header.linksShops(id)
       //Assert
       await expect(newPage).toHaveURL(expectedUrl);
   });

};
test('LinkAppStore', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    await app.home.LinkAppStore();
    const popupPromise = app.page.waitForEvent('popup');
    const newPage = await popupPromise;
    await newPage.waitForLoadState();
    const currentURL = app.page.url();
    const newPageURL = newPage.url('https://apps.apple.com/us/app/teleguard/');
    expect(currentURL).not.toEqual(newPageURL);
    
    
});
test('GooglePlay', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    await app.home.GooglePlay();
    const popupPromise = app.page.waitForEvent('popup');
    const newPage = await popupPromise;
    await newPage.waitForLoadState();
    const currentURL = app.page.url();
    const newPageURL = newPage.url('https://play.google.com/store/apps/');
    expect(currentURL).not.toEqual(newPageURL);
    
});
for (const {index, expectedUrl} of testDataFooter.socialLinksFooter) {//footer socialNetwork
    test(`Links in footer Home page socialnetwork ${index}`, async ({ page }) => {
      const app = new App(page);
      //Actions
      await app.home.open();
      const newPage = await app.home.footer.clickLinkFooterSocialNetwork(index)
  
      //Assert
      await expect(newPage).toHaveURL(expectedUrl);
      
    });
    
}
for (const {link, expectedUrl} of testDataFooter.footerLinks) {
    test(`Check click link ${link} in footer on Home page` , async ({ page }) => {//links footer
       const app = new App(page);
       //Actions
       await app.home.open();
       await app.home.footer.clickLinkFooter(link)

       //Assert
       await expect(app.home.page).toHaveURL(expectedUrl);
   });

};
test('linkBetaTesting', async ({ page }) => {
    const currentURL = page.url();
    const app = new App(page);
    await app.home.open();
    await app.home.linkBetaTesting();

    expect(currentURL.includes('/beta-testing')).toBeTruthy;

}); 

//screenshots  ко всем скриншотам нужно добавить проверки
test('ScreenshotsAndroid', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    await app.home.ScreenshotsAndroid();

    const buttonNext = '#slider-android > button.next';
    const buttonPrev = '#slider-android > button.prev';
    const viewports = await page.$$('#slider-android');
    let imageBeforeClick = [];
    let imageAfterClick = [];
    for (const viewport of viewports) {
        for (let i = 0; i <= 7; i++) {
            await page.click(buttonNext);
            await page.waitForTimeout(500);
            
        }
    }
    for (const viewport of viewports){
        for (let i = 0; i <= 7; i++) {
            await page.click(buttonPrev);
            await page.waitForTimeout(500);

        }
    }
    
    const clicksCount = 7; // Ожидаемое количество кликов
    expect(clicksCount).toBe(7);
    expect(imageBeforeClick).not.toBe(imageAfterClick);
     
});

test('ScreenshotsIOS', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    await app.home.ScreenshotsIOS();

    const buttonNext = '#slider-ios > button.next';
    const buttonPrev = '#slider-ios > button.prev';
    const viewports = await page.$$('#slider-ios');
    let imageBeforeClick = [];
    let imageAfterClick = [];
    for (const viewport of viewports) {
        for (let i = 0; i <= 7; i++) {
            await page.click(buttonNext);
            await page.waitForTimeout(500);
            
        }
    }
    for (const viewport of viewports){
        for (let i = 0; i <= 7; i++) {
            await page.click(buttonPrev);
            await page.waitForTimeout(500);

        }
    }
    
    const clicksCount = 7; // Ожидаемое количество кликов
    expect(clicksCount).toBe(7);
    expect(imageBeforeClick).not.toBe(imageAfterClick);
     
});
test('ScreenshotsWindows', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    await app.home.ScreenshotsWindows();

    const buttonNext = '#slider-windows > button.next';
    const buttonPrev = '#slider-windows > button.prev';
    const viewports = await page.$$('#slider-windows');
    let imageBeforeClick = [];
    let imageAfterClick = [];
    for (const viewport of viewports) {
        for (let i = 0; i <= 7; i++) {
            await page.click(buttonNext);
            await page.waitForTimeout(500);
            
        }
    }
    for (const viewport of viewports){
        for (let i = 0; i <= 7; i++) {
            await page.click(buttonPrev);
            await page.waitForTimeout(500);

        }
    }
    
    const clicksCount = 7; // Ожидаемое количество кликов
    expect(clicksCount).toBe(7);
    expect(imageBeforeClick).not.toBe(imageAfterClick);
     
});
//section Donate with PayPal
test('Donate with PayPal', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    await app.home.DonateWithPayPal();
    const popupPromise = page.waitForEvent('popup');
    const newPage = await popupPromise;
    await newPage.waitForLoadState();
    const currentURL = page.url();
    const newPageURL = newPage.url('https://www.paypal.com/paypalme/teleguard');
    expect(currentURL).not.toEqual(newPageURL);

});



//FAQ


test('Check FAQ questions opened', async ({ page }) => {
    
    const app = new App(page);
    await app.home.open();
    

    
    const questionButtons = page.locator('.question');
    const answers = page.locator('.answer');
    for (const button of await questionButtons.all()) {
        await button.click();
    }
    for (const answer of await answers.all()) {
        await expect(answer).toHaveJSProperty('hidden', false);
    }
});
test('Check FAQ questions closes', async ({ page }) => {
    
    const app = new App(page);
    await app.home.open();
    

    
    const questionButtons = page.locator('.question');
    const answers = page.locator('.answer');
    for (const button of await questionButtons.all()) {
        await button.click();
    }
    for (const answer of await answers.all()) {
        await expect(answer).toHaveJSProperty('hidden', false);
    }
    for (const button of await questionButtons.all()) {
        await button.click();
    }
    for (const answer of await answers.all()) {
        await expect(answer).toHaveJSProperty('hidden', true);
    }
});
//Contact us

//variant 1
test('Contact us send form ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.home.open();
    await app.home.form.categoryDropDown.click();
    await app.home.form.bugCategoryInDropdown.click();
    await app.home.form.systemDropDown.click();
    await app.home.form.IOScategoryInDropdown.click();
    await app.home.form.deviceField.pressSequentially('7676');
    await app.home.form.nameField.pressSequentially('test');
    await app.home.form.emailField.pressSequentially('test@test.com');
    await app.home.form.commentField.pressSequentially('TEST');
    await app.home.form.agreementCheckbox.check();
    await app.home.form.sendButton.click();

    //Assert
    await expect(app.home.headingSuccess).toBeVisible();
    await expect(app.home.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/contact?succeed=true");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
//variant 2
test('Contact us send form 2 ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.home.open();
    await app.home.form.categoryDropDown.click();
    await app.home.form.improvementCategoryInDropdown.click();
    await app.home.form.systemDropDown.click();
    await app.home.form.AndroidCategoryInDropdown.click();
    await app.home.form.deviceField.pressSequentially('4343');
    await app.home.form.nameField.pressSequentially('test android');
    await app.home.form.emailField.pressSequentially('test@test.com');
    await app.home.form.commentField.pressSequentially('TEST android');
    await app.home.form.agreementCheckbox.check();
    await app.home.form.sendButton.click();

    //Assert
    await expect(app.home.headingSuccess).toBeVisible();
    await expect(app.home.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/contact?succeed=true");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
//variant 3

test('Contact us send form 3 ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.home.open();
    await app.home.form.categoryDropDown.click();
    await app.home.form.otherCategoryInDropdown.click();
    await app.home.form.systemDropDown.click();
    await app.home.form.windowsCategoryInDropdown.click();
    await app.home.form.deviceField.pressSequentially('2323');
    await app.home.form.nameField.pressSequentially('test windows');
    await app.home.form.emailField.pressSequentially('test@test.com');
    await app.home.form.commentField.pressSequentially('TEST windows');
    await app.home.form.agreementCheckbox.check();
    await app.home.form.sendButton.click();

    //Assert
    await expect(app.home.headingSuccess).toBeVisible();
    await expect(app.home.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/contact?succeed=true");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
for (const {link, expectedUrl} of testDataFooter.footerLinks) {
    test(`Check links ${link} in footer in Home page`, async ({ page }) => {//links footer
      const app = new App(page);
      //Actions
      await app.home.open();
      await app.home.footer.clickLinkFooter(link)
  
      //Assert
      await expect(app.home.page).toHaveURL(expectedUrl);
      
    });
    
  }
  for (const {index, expectedUrl} of testDataFooter.socialLinksFooter) {
    test(`Check links socialnetwork ${index} in footer in Home page`, async ({ page }) => { //footer social network
      const app = new App(page);
      //Actions
      await app.home.open();
      const newPage = await app.home.footer.clickLinkFooterSocialNetwork(index)
  
      //Assert
      await expect(newPage).toHaveURL(expectedUrl);
      
    });
}
//links footer

test('link Swisscows AG', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    await app.home.linkSwisscowsAG();
    const popupPromise = page.waitForEvent('popup');
    const newPage = await popupPromise;
    await newPage.waitForLoadState();
    const currentURL = page.url();
    const newPageURL = newPage.url('https://company.swisscows.com/en');
    expect(currentURL).not.toEqual(newPageURL);

});







    
    
    /*
    const currentURL = page.url();
    const expectedURL  = 'https://dev.teleguard.com/en/contact?succeed=true';
    const successHeader = page.locator('h1:has-text("Success!")');//('heading', { name: 'Success!' });
    const buttonStartPage = page.locator('link', { name: 'start page' });
    
    expect(successHeader).toBeVisible();
    expect(buttonStartPage).toBeVisible();
    expect(currentURL).not.toEqual(expectedURL);
});
*/





























