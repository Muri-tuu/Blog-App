import { test, expect } from '@playwright/test';

test('user login', async ({ page }) => {
    await page.goto('http://localhost:3000/login'); // Adjust URL as needed
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    const loggedInText = await page.textContent('.welcome-message');
    expect(loggedInText).toBe('Welcome, testuser!');
});