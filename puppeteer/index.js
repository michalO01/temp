const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: false, args: ['--start-maximized'], defaultViewport: null});
    const page = await browser.newPage();
    await page.goto("https://www.objectivity.co.uk/");

    const serviceBtn = "a[href='/services/'][class*='dropdown-toggle']";

    var url = await page.url();
    console.log(url);

    await page.waitForSelector(serviceBtn);

    const grabHeadLine = await page.evaluate(() => {
        const text = document.querySelector("a[href='/services/'][class*='dropdown-toggle']");
       // console.log(serviceBtn + "test");
        return text.textContent;
    });

    console.log(grabHeadLine);

    await page.click(serviceBtn);

    await page.waitForSelector(serviceBtn);

    url = await page.url();
    console.log(url);

    await browser.close();
})();