import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly productsTitle: Locator;
    readonly backpackAddButton: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsTitle = page.locator('.title');
        this.backpackAddButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        );
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    async verifyInventoryPageLoaded(): Promise<void> {
        await expect(this.page).toHaveURL(/inventory/);
        await expect(this.productsTitle).toHaveText('Products');
    }

    async addBackpackToCart(): Promise<void> {
        await this.backpackAddButton.click();
    }

    async verifyCartCount(expectedCount: string): Promise<void> {
        await expect(this.cartBadge).toHaveText(expectedCount);
    }

    async openCart(): Promise<void> {
        await this.cartLink.click();
    }
}