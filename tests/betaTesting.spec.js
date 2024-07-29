import { test, expect } from '@playwright/test';
import App from '../app/index.js';
import testDataBetaTestingHeader from '../app/data/betaTesting/testDataBetaTestingHeader.json' assert { type: 'json' };



for (const {locatorName, expectedUrl} of testDataBetaTestingHeader.switchLanguages) {
    test(`Check switch languages ${locatorName} in header BetaTesting page`, async ({ page }) => {//languages
      const app = new App(page);
      //Actions
      await app.betaTesting.openBetaTesting();
      await app.betaTesting.openDropDownMenu();
      await app.betaTesting.header.switchLanguages(locatorName)
      //Assert
      await expect(app.betaTesting.page).toHaveURL(expectedUrl);
      //await expect(app.businessPage.page.getByRole('list')).toHaveCount(7);
    });
    
}
test('Contact us send form page Beta Testing ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.betaTesting.openBetaTesting();
    await app.betaTesting.form.fieldTeleguardID.pressSequentially('DQ2SABC4Q');
    await app.betaTesting.form.fieldYourEmail.pressSequentially('test@test.com');
    await app.betaTesting.form.fieldDevice.pressSequentially('test1234');
    await app.betaTesting.form.fieldSystemVersion.pressSequentially('4.09.67');
    await app.betaTesting.form.fieldCountry.pressSequentially('Country Test');
    await app.betaTesting.form.fieldNumberOfTeleguard.pressSequentially('DQ2SABC$Q');
    await app.betaTesting.form.fieldFullName.pressSequentially('Full Name Test');
    await app.betaTesting.form.fieldComment.pressSequentially('TEST');
    await app.betaTesting.form.agreementCheckboxBetaTesting.hover();
    await app.betaTesting.form.agreementCheckboxBetaTesting.check(('{ force: true }'));
    await app.betaTesting.form.sendButtonBetaTesting.click();
    //Assert
    
    await expect(app.betaTesting.form.headingSuccess).toBeVisible();
    await expect(app.betaTesting.form.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/beta-testing?succeed=true");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Check link "privacy policy" on page Beta Testing', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.betaTesting.openBetaTesting();
    await app.betaTesting.form.LinkPrivacyPolicyBetaTesting();
    //Assert
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
})