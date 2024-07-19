import { test, expect } from '@playwright/test';

test('create a new post', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await page.click('a[href="/create-post"]'); // Navigate to create post page
    await page.fill('textarea[name="post-content"]', 'This is a test post!');
    await page.click('button[type="submit"]');
    const postContent = await page.textContent('.post-content');
    expect(postContent).toBe('This is a test post!');
});