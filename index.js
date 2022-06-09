const puppeteer = require('puppeteer');

const url = "https://codequiz.azurewebsites.net/";

async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    console.log(url)

    let urls = await page.evaluate(() => {
        let results = [];
        console.log("here")
        let items = document.querySelectorAll('input');
        // items.forEach((item) => {
        //     results.push({
        //         url:  item.getAttribute('href'),
        //         text: item.innerText,
        //     });
        // });
        console.log("test",items)
        return results;
    })
    browser.close();
    return urls;
}
run();