const puppeteer = require('puppeteer');


const automation = async(res) => {
    const browser = await puppeteer.launch({headless: false});

    try {
        
        const page = await browser.newPage();
        await page.goto('https://google.com');
        await page.type('.gLFyf','datasphere');
        await page.evaluate(() => {
        document.querySelector('input[name=btnK]').click();
        });
        await page.screenshot({ path: 'example.png' });
        res.send("Hello from automation")
        
    } catch (e) {
        console.log(e);
        res.send(e);
        
    } finally {
        await browser.close();
    }

    
};

module.exports = {automation};

// (async () => {
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     await page.goto('https://google.com');
//     await page.type('.gLFyf','datasphere');
//     await page.evaluate(() => {
//       document.querySelector('input[name=btnK]').click();
//       });
//     await page.screenshot({ path: 'example.png' });
//     await browser.close();
//   })();