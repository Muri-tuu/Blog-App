import { test, expect } from '@playwright/test';

test('AI blog helper interaction', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await page.click('a[href="/ai-helper"]'); // Navigate to AI Helper page
    await page.fill('textarea[name="blog-content"]', 'Need help with this blog post.');
    await page.click('button[type="submit"]');
    const aiResponse = await page.textContent('.ai-response');
    expect(aiResponse).toContain('Here is some help for your blog post.');
});