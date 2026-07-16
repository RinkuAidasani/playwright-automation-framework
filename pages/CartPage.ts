import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartTitle: Locator;
    readonly backpackItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartTitle = page.locator('.title');
        this.backpackItem = page.getByText('Sauce Labs Backpack', {
            exact: true
        });
    }

    async verifyCartPageLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(/cart/);
        await expect(this.cartTitle).toHaveText('Your Cart');
    }

    async verifyBackpackIsInCart(): Promise<void> {
        await expect(this.backpackItem).toBeVisible();
    }
}