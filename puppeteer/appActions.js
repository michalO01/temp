const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: false, args: ['--start-maximized'], defaultViewport: null,
   //  executablePath: '/usr/bin/google-chrome-stable'
     executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
     });
    const page = await browser.newPage();
    const url = "http://localhost:8080/";
    const title = "Some title";
    const detail = "Some detail";

    await page.goto(url);

    //locators
    const titleInput = "[placeholder='Title']";
    const detailInput = "[placeholder='Detail']";
    const submitBtn = "button[class*='btn-primary']";

    //Set inputs
    await page.waitForSelector(titleInput);
    await page.type(titleInput, title);
    await page.type(detailInput, detail);

    //Submit
    await page.waitForSelector(submitBtn);
    await page.click(submitBtn);
})();