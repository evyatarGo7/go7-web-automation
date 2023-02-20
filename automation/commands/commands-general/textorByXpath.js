/**
 * @param {String} selector
 * Get element text value by xpath and print it to the console
 */

exports.command = function (selector) {
  const browser = this;
  browser
    .useXpath()
    .waitForElementVisible(selector, 30000)
    .getText(selector, function (result) {
      const myValue = result.value;
      console.log('This is the text you need >>>>>>>>>>>>>: '+myValue);
    })
    .pause();
  return this;
};