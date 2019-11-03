const chai = require("chai"),
  fs = require("fs"),
  expect = chai.expect,
  LoginPage = require("./../lib/pages/loginPage"),
  DriverManager = require('./../lib/drivers/DriverManager'),
  locators = require("./../utils/locators");
  var timestamp = new Date().getTime();

const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

let loginPage, driver;
const mochaTimeout = locators.mochaTimeout,
  baseUrl = locators.baseUrl,
  loginUrl = locators.loginUrl,
  buttonText = locators.buttonText,
  title = locators.title;

// ### 1. Launch the Application
// ### 2. Enter user email address 
// ### 3. Enter User password
// ### 4. Click on the Submit Button
// ### 5. User is navigated to Home Page
// ### 6. Take a Screen shot of the page

describe("Login Test", async function () {
  this.timeout(mochaTimeout);

  before(async function () {
    driver = DriverManager.buildDriver();
    loginPage = new LoginPage(driver);
    await loginPage.visit(baseUrl);
    await loginPage.openApp();
  });


  it("Enter user email address in the email field and check the field is enabled", async function () {
    let isEnabled = await loginPage.userEmail();
    expect(isEnabled).to.be.true;
  });

  it("Enter user password in the password field and check the field is enabled", async function () {
    let isEnabled = await loginPage.userPassword();
    expect(isEnabled).to.be.true;
  });

  it("Verify sign in button state is enabled", async function () {
    const result = await loginPage.signInButton();
    expect(result.text).to.equal(buttonText);
    expect(result.state).to.be.true;
  });

  it("Click on sign in button and verify the url", async function () {
    const url = await loginPage.clicksignInButton();
    expect(url).to.equal(loginUrl);
  });

  it("Check the title of the page", async function () {
    const getTitle = await loginPage.getTitle();
    expect(getTitle).to.include(title);
  });

  it("Take a screenshot after user logged in to the application", async function () {
    return await loginPage.takeScreenShot().then(data => {
     let screenshotPath = `Screenshots/${timestamp}.png`;
      console.log(`Saving Screenshot as: ${screenshotPath}`);
      fs.writeFileSync(screenshotPath, data, "base64");
    });
  });

  after(async function () {
    await loginPage.quit();
  });
});
