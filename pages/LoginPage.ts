import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly txtUsername: Locator;
    readonly txtPassword: Locator;
    readonly btnLogin: Locator;
    readonly lblProducts: Locator;
    readonly lblError: Locator;

    constructor(page: Page) {
        this.page = page;

        this.txtUsername = page.locator('#user-name');
        this.txtPassword = page.locator('#password');
        this.btnLogin = page.locator('#login-button');

        this.lblProducts = page.locator('.title');
        this.lblError = page.locator('[data-test="error"]');
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }

    async verifySuccessfulLogin() {
        await expect(this.lblProducts).toHaveText('Products');
    }

    async verifyLoginFailed() {
        await expect(this.lblError).toBeVisible();
    }
}