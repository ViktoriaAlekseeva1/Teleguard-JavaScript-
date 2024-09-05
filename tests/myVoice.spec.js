import { test, expect } from '@playwright/test';
import App from '../app/index.js';
import testDataMyVoiseHeader from '../app/data/myvoise/testDataMyVoiseHeader.json' assert { type: 'json' };
import testDataFooter from '../components/testDataFooter.json' assert { type: 'json' };

for (const {locatorName, expectedUrl} of testDataMyVoiseHeader.switchLanguagesMyVoise) {
    test(`Check switch languages ${locatorName} in header Home page My voise`, async ({ page }) => {//languages
      const app = new App(page);
      //Actions
      await app.myVoice.openMyVoise();
      await app.myVoice.openDropDownMenu();
      await app.myVoice.header.switchLanguages(locatorName)
      //Assert
      await expect(app.myVoice.page).toHaveURL(expectedUrl);
      //await expect(app.businessPage.page.getByRole('list')).toHaveCount(7);
    });
}
test('check button Teleguard', async ({page}) => {
    const expectedUrlInTest = "https://dev.teleguard.com/en";
    const app = new App(page);
    //Action
    await app.myVoice.openMyVoise();
    await app.myVoice.header.buttonTeleguard();
    //Assert
    await expect(app.myVoice.page).toHaveURL(expectedUrlInTest);

})
for (const {link, expectedUrl} of testDataMyVoiseHeader.linksShopMyVoise) {
    test(`Check shops header${link} MyVoice page`, async ({ page }) => {//links shops header
      const app = new App(page);
      //Action
      await app.myVoice.openMyVoise();
      const newPage = await app.myVoice.header.clickShopHeaderLinks(link);
      //Assert
      await expect(newPage).toHaveURL(expectedUrl);
    });
}
for (const { name, index, expectedUrl} of testDataMyVoiseHeader.linksContentShopMyVoise) {
    test(`Check shops content${name} MyVoice page`, async ({ page }) => {//links shops content
      const app = new App(page);
      //Action
      await app.myVoice.openMyVoise();
      const newPage = await app.myVoice.content.clickShopContentLinks( name, index);
      //Assert
      await expect(newPage).toHaveURL(expectedUrl);
    });
}

for (const {link, expectedUrl} of testDataFooter.footerLinks) {
  test(`Check footer links ${link} MyVoice page`, async ({ page }) => {          //links footer
    const app = new App(page);
    //Actions
    await app.myVoice.openMyVoise();
    await app.myVoice.footer.clickLinkFooter(link);
    //Assert
    await expect(app.myVoice.page).toHaveURL(expectedUrl);
    
  });
  
}

for (const {index, expectedUrl} of testDataFooter.socialLinksFooter) {
  test(`Check links socialnetwork ${index} in footer in MyVoice page`, async ({ page }) => { //footer social network
    const app = new App(page);
    //Actions
    await app.myVoice.openMyVoise();
    const newPage = await app.myVoice.footer.clickLinkFooterSocialNetwork(index)

    //Assert
    await expect(newPage).toHaveURL(expectedUrl);
    
  });
  
}