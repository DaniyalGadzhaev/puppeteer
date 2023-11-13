const puppeteer = require('puppeteer');

const executePuppeteer = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1800, height: 900 });

    await page.goto('https://www.google.com');

    await page.type('textarea[type=search]', 'qa engineering');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(3000);

    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
};


executePuppeteer();