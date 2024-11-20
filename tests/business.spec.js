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
  test('Contact us send form Basic page Bussines (form 1) ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.business.openBusiness();
    await app.business.form.fieldNameBusiness.pressSequentially('Business Basic');
    await app.business.form.fieldFirstNameBusines.pressSequentially('Business Basic');
    await app.business.form.fieldEmailBusiness.pressSequentially('test@test.com');
    await app.business.form.fieldCompanyBusiness.pressSequentially('Business Basic');
    await app.business.form.fieldNumberOfUsers.pressSequentially('<10');
    await app.business.form.fieldSelectTariff.pressSequentially('Basic');
    await app.business.form.fieldStreetHouseNumber.pressSequentially('Street 21');
    await app.business.form.fieldZipCodeCity.pressSequentially('343456');
    await app.business.form.fieldPhoneBusiness.pressSequentially('0678964587');
    await app.business.form.fieldCommentBusiness.pressSequentially('Test page Business Basic'); 
    await app.business.form.agreementCheckbox.check();
    await app.business.form.sendButton.click();
    //Assert
    await expect(app.business.form.headingSuccess).toBeVisible();
    await expect(app.business.form.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/contact-business?succeed=true");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Contact us send form Enterprise page Bussines (form 2) ', async ({ page }) => {
  const app = new App(page);
  //Actions
  await app.business.openBusiness();
  await app.business.form.fieldNameBusiness.pressSequentially('Business Enterprise');
  await app.business.form.fieldFirstNameBusines.pressSequentially('Business Enterprise');
  await app.business.form.fieldEmailBusiness.pressSequentially('test@test.com');
  await app.business.form.fieldCompanyBusiness.pressSequentially('Business Enterprise');
  await app.business.form.fieldNumberOfUsers.pressSequentially('<50');
  await app.business.form.fieldSelectTariff.pressSequentially('Enterprise');
  await app.business.form.fieldStreetHouseNumber.pressSequentially('Street 21');
  await app.business.form.fieldZipCodeCity.pressSequentially('343456');
  await app.business.form.fieldPhoneBusiness.pressSequentially('0678964587');
  await app.business.form.fieldCommentBusiness.pressSequentially('Test page Business Enterprise'); 
  await app.business.form.agreementCheckbox.check();
  await app.business.form.sendButton.click();
  //Assert
  await expect(app.business.form.headingSuccess).toBeVisible();
  await expect(app.business.form.buttonStartPageSuccess).toBeVisible();
  await expect(app.page).toHaveURL("https://dev.teleguard.com/en/contact-business?succeed=true");
  await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Contact us send form Pro page Bussines (form 3) ', async ({ page }) => {
  const app = new App(page);
  //Actions
  await app.business.openBusiness();
  await app.business.form.fieldNameBusiness.pressSequentially('Business Pro');
  await app.business.form.fieldFirstNameBusines.pressSequentially('Business Pro');
  await app.business.form.fieldEmailBusiness.pressSequentially('test@test.com');
  await app.business.form.fieldCompanyBusiness.pressSequentially('Business Pro');
  await app.business.form.fieldNumberOfUsers.pressSequentially('<100');
  await app.business.form.fieldSelectTariff.pressSequentially('Pro');
  await app.business.form.fieldStreetHouseNumber.pressSequentially('Street 21');
  await app.business.form.fieldZipCodeCity.pressSequentially('343456');
  await app.business.form.fieldPhoneBusiness.pressSequentially('0678964587');
  await app.business.form.fieldCommentBusiness.pressSequentially('Test page Business Pro'); 
  await app.business.form.agreementCheckbox.check();
  await app.business.form.sendButton.click();
  //Assert
  await expect(app.business.form.headingSuccess).toBeVisible();
  await expect(app.business.form.buttonStartPageSuccess).toBeVisible();
  await expect(app.page).toHaveURL("https://dev.teleguard.com/en/contact-business?succeed=true");
  await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Contact us send form Pro page Bussines >100 (form 4 without phone) ', async ({ page }) => {
  const app = new App(page);
  //Actions
  await app.business.openBusiness();
  await app.business.form.fieldNameBusiness.pressSequentially('Business Pro');
  await app.business.form.fieldFirstNameBusines.pressSequentially('Business Pro');
  await app.business.form.fieldEmailBusiness.pressSequentially('test@test.com');
  await app.business.form.fieldCompanyBusiness.pressSequentially('Business Pro');
  await app.business.form.fieldNumberOfUsers.pressSequentially('>100');
  await app.business.form.fieldSelectTariff.pressSequentially('Pro');
  await app.business.form.fieldStreetHouseNumber.pressSequentially('Street 21');
  await app.business.form.fieldZipCodeCity.pressSequentially('343456');
  await app.business.form.fieldCommentBusiness.pressSequentially('Test page Business Pro'); 
  await app.business.form.agreementCheckbox.check();
  await app.business.form.sendButton.click();
  //Assert
  await expect(app.business.form.headingSuccess).toBeVisible();
  await expect(app.business.form.buttonStartPageSuccess).toBeVisible();
  await expect(app.page).toHaveURL("https://dev.teleguard.com/en/contact-business?succeed=true");
  await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
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

