# Playwright E2E Testing

## Setup Process
1. Installed Playwright using `npm init playwright@latest`.
2. Configured Playwright according to prompts.
3. Installed TypeScript and Jest using `npm install typescript jest`.

## Tests
### Login Test
- **Purpose:** Verify user login functionality.
- **Script:**
  ```typescript
  test('user login', async ({ page }) => {
      await page.goto('http://localhost:3000/login');
      await page.fill('input[name="username"]', 'testuser');
      await page.fill('input[name="password"]', 'password123');
      await page.click('button[type="submit"]');
      const loggedInText = await page.textContent('.welcome-message');
      expect(loggedInText).toBe('Welcome, testuser!');
  });