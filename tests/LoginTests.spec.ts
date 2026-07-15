import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

test.describe('SauceDemo Login Tests', () => {
    test('valid user can log in', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );
        await loginPage.verifySuccessfulLogin();
    });

    test('invalid credentials show an error', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(
            users.invalidUser.username,
            users.invalidUser.password
        );
        await loginPage.verifyLoginFailed();
    });

    test('locked-out user cannot log in', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login(
            users.lockedUser.username,
            users.lockedUser.password
        );
        await loginPage.verifyLoginFailed();
    });
});