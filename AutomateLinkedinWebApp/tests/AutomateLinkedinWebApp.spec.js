const {test,expect}=require('@playwright/test');
//Define the test Properties
var context=null;
var page=null;
//TODO - add tests

//TODO - Step1: Launch the browser
test('Launch Linkedin Web Application', async ({browser}) => {
  context=await browser.newContext();
  page =await context.newPage();
  await page.goto("https://www.linkedin.com/");
  await expect(page).toHaveTitle("LinkedIn: Log In or Sign Up");
});

//TODO - Step2: Login to the application 
test('Login to the application', async ({browser}) => {
  await page.locator("#session_key").type('shadyahmed01091997@outlook.com');
  await page.locator("#session_password").type('P@ssw0rd#11');
  await page.locator("button.sign-in-form__submit-button").click();
  console.log(await page.locator("div.t-16.t-black.t-bold").textContent());
  expect(await page.locator("div.t-16.t-black.t-bold").textContent()).toHaveText("Welcome, Shady!");
});

//TODO - Step3: Add new post 
test('Add new post', async ({browser}) => {
  await page.locator("#ember37").click();
  // await page.locator("div[class='ql-editor ql-blank']").type('Hello Shady From Playwright Test');
});