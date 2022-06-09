// Web Scraping with puppeteer
const puppeteer = require("puppeteer");
const url = "https://codequiz.azurewebsites.net/";
const key = process.argv[2].toUpperCase();
if (!key) {
  throw "Please provide key";
}

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.click('input[type="button"]');
//   await page.screenshot({ path: "screenshot01.png" });
  console.log("key1", key);
  const htmlKey = await page.evaluate((key) => {
    const table = document
      .getElementsByTagName("tr")[1]
      .getElementsByTagName("td");
    console.log("key", key);
    let response;
    for (let i = 1; i < table.length; i++) {
      if (
        key ===
        document
          .getElementsByTagName("tr")
          [i].getElementsByTagName("td")[0]
          .getInnerHTML().replace(/\s/g, '')
      ) {
        response = document
          .getElementsByTagName("tr")
          [i].getElementsByTagName("td")[1]
          .getInnerHTML();
      }
    }
    return `${response} ${key}`;
  }, key);
  browser.close();
}
run();
