const { test, expect } = require('@playwright/test');


test('teleguard', async ({ page }) => {
    await page.goto('https://dev.teleguard.con/en');
});

