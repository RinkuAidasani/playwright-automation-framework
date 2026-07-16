import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import users from '../test-data/users.json';

test.describe('Shopping Cart End-to-End Tests', () => {
    test('user can log in and add a product to the cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await loginPage.open();

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );

        await inventoryPage.verifyInventoryPageLoaded();
        await inventoryPage.addBackpackToCart();
        await inventoryPage.verifyCartCount('1');
        await inventoryPage.openCart();

        await cartPage.verifyCartPageLoaded();
        await cartPage.verifyBackpackIsInCart();
    });
});