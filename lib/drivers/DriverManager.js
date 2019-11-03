const chrome = require('selenium-webdriver/chrome');
let options = new chrome.Options();
options.addArguments('disable-infobars');
options.setUserPreferences({ credential_enable_service: false });
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
var webdriver = require('selenium-webdriver');

/** Builds WebDriver object for tests */
var buildDriver = function() {
  return new webdriver.Builder()
  .setChromeOptions(options)
  .forBrowser('chrome')
  .build();
};

module.exports.buildDriver = buildDriver;

