const locators = require("../../utils/locators");
let BasePage = require("../../lib/pages/basePage");

/**
 * Locators for the elements in this page
 * @type {string}
 */

const email = locators.email,
      passowrd = locators.passowrd,
      signIn = locators.signIn,
      emailTxt = locators.emailTxt,
      okButton = locators.okButton,
      passwordTxt = locators.passwordTxt,
      timeout = locators.timeout;

/**
 * Constructor for Login Page
 * @param webdriver
 * @constructor
 */
function LoginPage(webdriver) {
  BasePage.call(this, webdriver);
}

/**
 * BasePage and Constructor wiring
 * @type {BasePage}
 */
LoginPage.prototype = Object.create(BasePage.prototype);
LoginPage.prototype.constructor = LoginPage;

LoginPage.prototype.getTitle = async function () {
  const title = await this.driver.getTitle();
  return title;
};

LoginPage.prototype.userEmail = async function () {
  const clickUserEmail = await this.findById(email);
  await this.write(clickUserEmail, emailTxt);
  let isEnabled = await clickUserEmail.isEnabled();

  return await this.driver.wait(async function () {
    return isEnabled;
  }, timeout);
};

LoginPage.prototype.userPassword = async function () {
  const clickUserPassword = await this.findById(passowrd);
  await this.write(clickUserPassword, passwordTxt);
  let isEnabled = await clickUserPassword.isEnabled();

  return await this.driver.wait(async function () {
    return isEnabled;
  }, timeout);
};

LoginPage.prototype.signInButton = async function () {
  let signInButton = await this.findByCss(signIn);

  await this.elementIsEnabled(signInButton);

  const enabledState = await signInButton.isEnabled();
  const btnText = await signInButton.getAttribute('value');

  const btnResult = await this.driver.wait(async function () {
    return {
      text : btnText,
      state: enabledState
    }
  }, timeout);
  return btnResult;
};

LoginPage.prototype.clicksignInButton = async function () {
  let signInButton = await this.findByCss(signIn);
  await this.click(signInButton);
  let locator = await this.findByCss(okButton);
  await this.elementIsVisible(locator);
  return await this.driver.getCurrentUrl();
}

LoginPage.prototype.takeScreenShot = async function () {
  return await this.driver.takeScreenshot();
}
module.exports = LoginPage;


