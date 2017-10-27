const puppeteer = require('puppeteer');

(async() => {
    
    const browser = await puppeteer.launch();
   
    const page = await browser.newPage();
    
    await page.goto('http://localhost:8080/?url=http://google.com&request=html,header,cookie&script={}');
   
    // let images = []
    
    const preEle = await page.evaluate(() => {
        
        return document.querySelectorAll("pre")[0].innerHTML;
    })
    
    const preObj = await JSON.parse(preEle);

    console.log(preObj);

    await page.screenshot({path: 'example.png'});

    await browser.close();
})();