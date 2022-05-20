const {test,expect}=require('@playwright/test');

test('abTesting', async ({browser}) => {
  const context=await browser.newContext();
  const page =await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/");
  await expect(page).toHaveTitle("The Internet");
  await page.locator("[href='/abtest']").click();
  await page.locator("a[target='_blank']").click();
  // await expect(page).toContain("Test Control");
  // await page.click("a[normalize-space()='A/B Testing']");
});