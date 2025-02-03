import { test, expect } from '@playwright/test';
import App from '../app/index.js' assert { type: 'json' };
import testDataBetaTestingHeader from '../app/data/betaTesting/testDataBetaTestingHeader.json' assert { type: 'json' };

for (const { id, locatorName, expectedUrl} of testDataBetaTestingHeader.switchLanguages) {
    test(`${id} Check switch languages ${locatorName} in header BetaTesting page`, async ({ page }) => {//languages
      const app = new App(page);
      //Actions
      await app.betaTesting.openBetaTesting();
      await app.betaTesting.openDropDownMenuBetaTesting();
      await app.betaTesting.switchLanguagesBetaTesting(locatorName)
      //Assert
      await expect(app.betaTesting.page).toHaveURL(expectedUrl);
      //await expect(app.businessPage.page.getByRole('list')).toHaveCount(7);
    });
    
}
test('Contact us send form page Beta Testing ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.betaTesting.openBetaTesting();
    await app.betaTesting.form.JoinTeleguardBetaTesting();
    //Assert
    await expect(app.betaTesting.form.headingSuccess).toBeVisible();
    await expect(app.betaTesting.form.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/success");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
test('Check link "privacy policy" on page Beta Testing', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.betaTesting.openBetaTesting();
    const newPage = await app.betaTesting.form.LinkPrivacyPolicyBetaTesting()
    //Assert
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
    await expect(newPage).toHaveURL("https://dev.teleguard.com/en/privacy");
});
//LOGO
test('Check logo on page Beta Testing', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.betaTesting.openBetaTesting();
    await app.betaTesting.header.logoBetaTesting();
    //Assert
    await expect(page).not.toHaveURL('https://dev.teleguard.com/en/beta-testing');
    await expect(page).toHaveURL('https://dev.teleguard.com/en');
});