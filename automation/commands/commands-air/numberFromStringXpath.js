/**
 * @param {String} selector
 * extract only numbers from a string
 */

exports.command = function (selector) {
    const browser = this;
    browser
    .useXpath()
    .waitForElementVisible(selector, 5000)
    return browser.getText(selector, function (result) {
        result.value.replace(/^\D+/g, '');
        console.log(result.value.replace(/^\D+/g, ''));
    });
};