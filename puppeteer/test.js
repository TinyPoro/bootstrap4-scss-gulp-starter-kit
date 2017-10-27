const puppeteer = require('puppeteer');

(async() => {
    
    const browser = await puppeteer.launch({headless: false});
   
    const page = await browser.newPage();
    
    await page.goto('http://localhost:8080/?url=http://google.com&request=html,header,cookie&script={}');
   
    // let images = []
    
    // const totalThumbnailEles = await page.evaluate(() => {
        
    //     return document.querySelectorAll("#J_UlThumb>li").length
    // })

    // for (let i = 1; i <= totalThumbnailEles; i++) {
        
    //     await page.hover(`#J_UlThumb>li:nth-child(${i})`)
       
    //     await page.waitFor(3000)
       
    //     let newImg = await page.evaluate(() => {
    //         return document.querySelector("#J_ImgBooth").getAttribute('src')
    //     })
       
    //     images.push(newImg)
    // }

    
    // console.log(images)

    

    // await page.screenshot({path: 'example.png'});

    // await browser.close();
})();