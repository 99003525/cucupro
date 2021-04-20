const { Given, When, Then ,And} = require('cucumber');
const expect = require('chai').expect;
const { Builder, By, Key, until } = require('selenium-webdriver');

Given('The web browser is launched' ,function () {  
    return console.log('PASS = browser open');  
  }); 
 
When('Hit The web Page URL',async () => {
    browser.get('https://lttswebframework.azurewebsites.net',10000);
    return console.log('PASS = webpage launched'); 
});

Then('Verify The Current Page URL', async () => {
    const url = await browser.driver.getCurrentUrl();
    console.log('URL = ', url);
    await expect(url).to.be.equal("https://lttswebframework.azurewebsites.net");
});

Then('Verify The Page Title', async () => {
    browser.wait(5000);
    const title = await browser.driver.getTitle();
    console.log('TITLE = ', title);
    await expect(title).to.be.equal("Ltts-webframework demo application");
});

 Then('Click on the menu ', async()=>{
    await  browser.driver.findElement(By.xpath("//*[@data-name='menu']")).click();
 });