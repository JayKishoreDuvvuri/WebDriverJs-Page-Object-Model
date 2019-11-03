const { By, Key, until } = require('selenium-webdriver');

 function BasePage(webdriver) {
  this.driver = webdriver;

  let driver = this.driver;
  let actions = driver.actions({ bridge: true });

  // Visit Website
  this.visit = async function (Url) {
      return await driver.get(Url);
  };

  // Maximize window
  this.openApp = async function () {
    await driver.manage().window().maximize();
    await driver.manage().deleteAllCookies();
  };

  // Quit current session
  this.quit = async function () {
      return await driver.quit();
  };

  // wait and find a specific element with it's id
  this.findById = async function (id) {
      await driver.wait(until.elementLocated(By.id(id)), 10000, 'wait for ID element');
      return await driver.findElement(By.id(id));
  };

  // wait and find a specific element with it's CSS Selector
  this.findByCss = async function (css) {
      await driver.wait(until.elementLocated(By.css(css)), 20000, 'wait for Css element');
      return await driver.findElement(By.css(css));
  };

  // wait and find a specific element with it's Classname
  this.findByclassName = async function (className) {
      await driver.wait(until.elementLocated(By.className(className)), 10000, 'wait for className element');
      return await driver.findElement(By.className(className));
  };

  // wait and find a specific element with it's XPath
  this.findByXpath = async function (xpath) {
      await driver.wait(until.elementLocated(By.xpath(xpath)), 10000, 'wait for Xpath element');
      return await driver.findElement(By.xpath(xpath));
  };

  // wait and find an array of elements with it's XPath
  this.findAll = async function (xpath) {
      await driver.wait(until.elementsLocated(By.xpath(xpath)), 10000, 'wait for Xpath element');
      return await driver.findElements(By.xpath(xpath));
  };

  this.click = async function (element) {
      return await driver.executeScript("return arguments[0].click();", element);
  };

  this.write = async function (element, txt) {
     return await element.sendKeys(txt);
  };

  this.elementIsVisible = async function (locator) {
      var isElementVisible = await locator.getCssValue("height");
      while (!(isElementVisible)) {
          return await driver
              .wait(until.elementIsVisible(locator), 30000);
      }
      return isElementVisible;
  };

  this.elementIsEnabled = async function (locator) {
      var isElementEnabled = await locator.getCssValue("height");
      while (!(isElementEnabled)) {
          return await driver
              .wait(until.elementIsEnabled(locator), 30000);
      }
      return isElementEnabled;
  };
};

module.exports = BasePage;
