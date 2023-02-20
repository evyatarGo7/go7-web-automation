/**
 * @param {Wait for text by css} selector
 * combination of waitForElementVisible & assert.containsText.
 */

const globals = require("../../nightwatch.globals");
const pageLogin = require("../../pages/page-login");
exports.command = function() {
  const browser = this;

  browser
      // Go to CRS login page
      .url(globals.urls.login)
      // Accept all cookies
      .waitAndClickByCss(pageLogin.selectors.loginForm.acceptAllCookiesButton)
      // Add company code
      .waitAndSetValueByCss(pageLogin.selectors.loginForm.companyCode, browser.globals.CRS_COMPANY_CODE)
      // Add username
      .waitAndSetValueByCss(pageLogin.selectors.loginForm.userName, browser.globals.CRS_USERNAME)
      // Add password
      .waitAndSetValueByCss(pageLogin.selectors.loginForm.password, browser.globals.CRS_PASSWORD)
      // Click on send button
      .waitAndClickByXpath(pageLogin.selectors.loginForm.sendButton)

  return this;
};
