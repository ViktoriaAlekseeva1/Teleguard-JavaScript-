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
      await app.business.openDropDownMenuBusiness();
      await app.business.header.switchLanguagesBusiness(locatorName)
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
  for (const {index, expectedUrl} of testData.socialLinksFooter) {
    test(`Check links socialnetwork ${index} in footer in Business page`, async ({ page }) => { //footer social network
      const app = new App(page);
      //Actions
      await app.business.openBusiness();
      const newPage = await app.business.footer.clickLinkFooterSocialNetwork(index)
      //Assert
      await expect(newPage).toHaveURL(expectedUrl);
      
    });
    
  }
  test('Contact us send form Basic page Bussines (form 1) ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.business.openBusiness();
    await app.business.form.ContactUsBusiness1();
    //Assert
    await expect(app.business.form.headingSuccess).toBeVisible();
    await expect(app.business.form.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/success");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Contact us send form Enterprise page Bussines (form 2) ', async ({ page }) => {
  const app = new App(page);
  //Actions
  await app.business.openBusiness();
  await app.business.form.ContactUsBusiness2();
  //Assert
  await expect(app.business.form.headingSuccess).toBeVisible();
  await expect(app.business.form.buttonStartPageSuccess).toBeVisible();
  await expect(app.page).toHaveURL("https://dev.teleguard.com/en/success");
  await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Contact us send form Pro page Bussines (form 3) ', async ({ page }) => {
  const app = new App(page);
  //Actions
  await app.business.openBusiness();
  await app.business.form.ContactUsBusiness3();
  //Assert
  await expect(app.business.form.headingSuccess).toBeVisible();
  await expect(app.business.form.buttonStartPageSuccess).toBeVisible();
  await expect(app.page).toHaveURL("https://dev.teleguard.com/en/success");
  await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Contact us send form Pro page Bussines >100 (form 4 without phone) ', async ({ page }) => {
  const app = new App(page);
  //Actions
  await app.business.openBusiness();
  await app.business.form.ContactUsBusiness4WithoutPhone();
  //Assert
  await expect(app.business.form.headingSuccess).toBeVisible();
  await expect(app.business.form.buttonStartPageSuccess).toBeVisible();
  await expect(app.page).toHaveURL("https://dev.teleguard.com/en/success");
  await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Check link "data protection" on page Business', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.business.openBusiness();
    const newPage = await app.business.form.LinkDataProtection();
    //Assert
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en/');
    await expect(newPage).toHaveURL("https://dev.teleguard.com/en/privacy");
});

test('Check logo on page Business', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.business.openBusiness();
    await app.business.header.logoBusinessPage();
    //Assert
    await expect(page).not.toHaveURL('https://dev.teleguard.com/en/business');
    await expect(page).toHaveURL('https://dev.teleguard.com/en');
});

  /*
  //expectVideoToPlay
  test('Check Video', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.business.openBusiness();
    await app.business.header.expectVideoToPlay();
    //Assert
    await expect(app.business.page).toHaveURL('/business/');
  });
  */

