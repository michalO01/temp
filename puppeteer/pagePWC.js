const puppeteer = require('puppeteer');


(async() => {
    const browser = await puppeteer.launch({headless: false, args: ['--start-maximized'], defaultViewport: null,
     executablePath: '/usr/bin/google-chrome-stable'
    // executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
     });
    const page = await browser.newPage();
    const url = "https://www.pwc.com/";

    await page.goto(url);
    console.log("open page: " + url);

    //locators
    const industriesTab = "//a[@role='tab']/span[contains(text(), 'Industries')]";
    const servicesTab = "//a[@role='tab']/span[contains(text(), 'Services')]";
    const todaysIssuesTab = "//a[@role='tab']/span[contains(text(), 'issues')]";

    //Clicks on tabs
    await page.waitForXPath(industriesTab);
    var element = await page.$x(industriesTab);
    await element[0].click()

    await page.waitForXPath(servicesTab);
    var element = await page.$x(servicesTab);
    await element[0].click()

    await page.waitForXPath(todaysIssuesTab);
    var element = await page.$x(todaysIssuesTab);
    await element[0].click()

    await page.close();

    console.log("script done");
})();