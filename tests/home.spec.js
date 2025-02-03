import { test, expect } from '@playwright/test';
import App from '../app/index.js';
import testDataHeader from '../components/testDataHeader.json' assert { type: 'json' }
import testDataFooter from '../components/testDataFooter.json' assert { type: 'json' }

for (const { link, expectedUrl } of testDataHeader.headerLinks) {
    test(`Check click link ${link} in header on Home page`, async ({ page }) => {//links header
        const app = new App(page);
        //Actions
        await app.home.open();
        await app.home.header.buttonBusinessChangeColor();
        await app.home.header.buttonMyVoiceChangeColor();
        await app.home.header.clickLinkHeader(link);

        //Assert
        await expect(app.home.page).toHaveURL(expectedUrl);
    });

};

for (const { locatorName, expectedUrl } of testDataHeader.switchLanguages) {
    test(`Check switch languages ${locatorName} in header Home page`, async ({ page }) => {//languages
        const app = new App(page);
        //Actions
        await app.home.open();
        await app.home.openDropDownMenuHome();
        await app.home.header.switchLanguagesHome(locatorName)
        //Assert
        await expect(app.home.page).toHaveURL(expectedUrl);
        //await expect(app.businessPage.page.getByRole('list')).toHaveCount(7);
    });

}
for (const { index, expectedUrl } of testDataHeader.headerLinksSocialNetwork) {
    test(`Check click link ${index} in header SocialNetwork on Home page`, async ({ page }) => {//header social network
        const app = new App(page);
        //Actions
        await app.home.open();
        const newPage = await app.home.header.clickLinkHeaderSocialNetwork(index)
        //Assert
        await expect(newPage).toHaveURL(expectedUrl);
    });

};
for (const { id, expectedUrl } of testDataHeader.headerAppLinks) {
    test(`Check click link ${id}store in header on Home page`, async ({ page }) => {//Header 2 links shops App Store, Google Play
        const app = new App(page);
        //Actions
        await app.home.open();
        const newPage = await app.home.header.clickStoreLink(id);
        //Assert
        await expect(newPage).toHaveURL(expectedUrl);
    });
}
test('link More info', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    await app.home.header.clickLinkMoreInfo();
    //Assert
    await expect(app.home.page).toHaveURL('https://dev.teleguard.com/en#new-feature');
});




/*
test('linkBetaTesting', async ({ page }) => {
    const currentURL = page.url();
    const app = new App(page);
    await app.home.open();
    await app.home.linkBetaTesting();

    expect(currentURL.includes('/beta-testing')).toBeTruthy;

});
*/

//screenshots  ко всем скриншотам нужно добавить проверки
test('ScreenshotsAndroid', async ({ page }) => {//НЕ РАБОТАЕТ НУЖНО ПЕРЕДЕЛАТЬ
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
    for (const viewport of viewports) {
        for (let i = 0; i <= 7; i++) {
            await page.click(buttonPrev);
            await page.waitForTimeout(500);

        }
    }
    const clicksCount = 7; // Ожидаемое количество кликов
    expect(clicksCount).toBe(7);
    expect(imageBeforeClick).not.toBe(imageAfterClick);

});

test('ScreenshotsIOS', async ({ page }) => {//НЕ РАБОТАЕТ НУЖНО ПЕРЕДЕЛАТЬ
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
    for (const viewport of viewports) {
        for (let i = 0; i <= 7; i++) {
            await page.click(buttonPrev);
            await page.waitForTimeout(500);

        }
    }
    const clicksCount = 7; // Ожидаемое количество кликов
    expect(clicksCount).toBe(7);
    expect(imageBeforeClick).not.toBe(imageAfterClick);

});
test('Check text appears on scroll', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    await app.home.checkElementsVisibleOnScroll();
})
test('ScreenshotsWindows', async ({ page }) => {//НЕ РАБОТАЕТ НУЖНО ПЕРЕДЕЛАТЬ
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
    for (const viewport of viewports) {
        for (let i = 0; i <= 7; i++) {
            await page.click(buttonPrev);
            await page.waitForTimeout(500);

        }
    }
    const clicksCount = 7; // Ожидаемое количество кликов
    expect(clicksCount).toBe(7);
    expect(imageBeforeClick).not.toBe(imageAfterClick);

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
        await expect(answer).toBeVisible();
    }
    for (const button of await questionButtons.all()) {
        await button.click();
    }
    for (const answer of await answers.all()) {
        await expect(answer).toBeHidden();
    }
});
//Contact us

//variant 1
test('Contact us send form ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.home.open();
    await app.home.form.ContactUsSendForm();
    //Assert
    await expect(app.home.headingSuccess).toBeVisible();
    await expect(app.home.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/success");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});

//variant 2
test('Contact us send form 2 ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.home.open();
    await app.home.form.ContactUsSendForm2();
    //Assert
    await expect(app.home.headingSuccess).toBeVisible();
    await expect(app.home.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/success");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});
//variant 3

test('Contact us send form 3 ', async ({ page }) => {
    const app = new App(page);
    //Actions
    await app.home.open();
    await app.home.form.ContactUsSendForm3();
    //Assert
    await expect(app.home.headingSuccess).toBeVisible();
    await expect(app.home.buttonStartPageSuccess).toBeVisible();
    await expect(app.page).toHaveURL("https://dev.teleguard.com/en/success");
    await expect(app.page).not.toHaveURL('https://dev.teleguard.com/en');
});

for (const { index, expectedUrl } of testDataFooter.socialLinksFooter) {
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

for (const { link, expectedUrl } of testDataFooter.footerLinks) {
    test(`Check click link ${link} in footer on Home page`, async ({ page }) => {//links footer: Imprint, Privacy Policy, Terms of Use, Press, Bete Testing.
        const app = new App(page);
        //Actions
        await app.home.open();
        await app.home.footer.clickLinkFooter(link)
        //Assert
        await expect(app.home.page).toHaveURL(expectedUrl);
    });

};


test('link Swisscows AG', async ({ page }) => {
    const app = new App(page);
    await app.home.open();
    const newPage = await app.home.clickLinkSwisscowsAG();
    //Assert
    await expect(newPage).not.toHaveURL('https://company.swisscows.com/en');
});

test('Check disaine home page', async ({ page }, testInfo) => {
    const app = new App(page);
    await app.home.open();
    //Assert
    await app.home.expectPageToHaveScreenshot(testInfo)

});


/*
test('Check button Icon Top Scroll color change on hover', async ({ page }) => {//no working
    const app = new App(page);
    //Actions
    await app.home.open();
    await app.home.iconTopScrollChangeColor();

});
*/

































