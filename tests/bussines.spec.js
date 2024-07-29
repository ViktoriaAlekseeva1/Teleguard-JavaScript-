import { test, expect } from '@playwright/test';
import App from '../app/index.js';
import testData from '../app/data/bussines/testData.json' assert { type: 'json' };

for (const {locatorName, expectedUrl} of testData.headerLinks) {
    test(`Check click link ${locatorName} in header on Business page` , async ({ page }) => {//links header
       const app = new App(page);
       //Actions
       await app.business.openBusiness();
       await app.business.header.clickLinkHeader(locatorName)
       //Assert
       await expect(app.business.page).toHaveURL(expectedUrl);
   });

}
for (const {locatorName, expectedUrl} of testData.switchLanguages) {
    test(`Check switch languages ${locatorName} in header in Business page`, async ({ page }) => {// languages
      const app = new App(page);
      //Actions
      await app.business.openBusiness();
      await app.business.openDropDownMenu();
      await app.business.header.switchLanguages(locatorName)
      //Assert
      await expect(app.business.page).toHaveURL(expectedUrl);
      //await expect(app.businessPage.page.getByRole('list')).toHaveCount(7);
    });
    
  }
  
  for (const {locatorNameBussines, expectedUrl} of testData.linksFooter) {
    test(`Check links ${locatorNameBussines} in footer in Business page`, async ({ page }) => {//links footer
      const app = new App(page);
      //Actions
      await app.business.openBusiness();
      await app.business.footer.clickLinkFooter(locatorNameBussines)
      //Assert
      await expect(app.business.page).toHaveURL(expectedUrl);
      
    });
    
  }
  for (const {index, expectedUrl} of testData.socialLinksFooter) {//no working
    test(`Check links socialnetwork ${index} in footer in Business page`, async ({ page }) => { //footer social network
      const app = new App(page);
      //Actions
      await app.business.openBusiness();
      const newPage = await app.business.footer.clickLinkFooterSocialNetwork(index)
      //Assert
      await expect(newPage).toHaveURL(expectedUrl);
      
    });
    
  }
