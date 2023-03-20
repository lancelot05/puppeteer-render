const puppeteer = require("puppeteer");
require("dotenv").config();

const automation = async (res) => {
  const browser = await puppeteer.launch({
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    headless: false,
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });
    await page.goto("https://google.com");
    await page.type(".gLFyf", "datasphere");
    await page.evaluate(() => {
      document.querySelector("input[name=btnK]").click();
    });
    res.send("Hello from automation");
  } catch (e) {
    console.log(e);
    res.send(e);
  } finally {
    await browser.close();
  }
};

module.exports = { automation };

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
