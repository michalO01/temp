const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: false, args: ['--start-maximized'], defaultViewport: null,
     executablePath: '/usr/bin/google-chrome-stable' });
    const page = await browser.newPage();
    const url = "https://dev-learninglab.ti.pwc.co.uk/";
    const login = "rypsf1j36kj00001@mailinator.com";
    const password = "Test1234567!";

    await page.goto(url);

    //locators
    const loginBtn = "//span[text()='Log In']";
    const emailInput = "#initEmail";
    const nextBtn = "//button[contains(text(), 'Next')]";
    const passwordInput = "input[type='password']";
    const sublitBtn = "//button[contains(text(), 'Submit')]";

    //login page
    await page.waitForXPath(loginBtn);
    var element = await page.$x(loginBtn);
    await element[0].click();

    //login input page
    await page.waitForSelector(emailInput);
    await page.type(emailInput, login);
    await page.waitForXPath(nextBtn);
    element = await page.$x(nextBtn);
    await element[0].click();

    //password input page
    await page.waitForSelector(passwordInput);
    await page.type(passwordInput, password);
    await page.waitForXPath(sublitBtn);
    element = await page.$x(sublitBtn);
    await element[0].click();




})();