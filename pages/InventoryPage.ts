import { expect, Page } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) { }

    async verifyInventoryLoaded() {
        await expect(this.page).toHaveURL(/inventory/);
    }

}