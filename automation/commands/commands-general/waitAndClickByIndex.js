/**
 * @param {Wait for element and click} selector
 * combination of waitForElementVisible & click by index
 */

exports.command = function(selector, indexNumber) {
  const browser = this;

  browser
    .waitForElementVisible(selector, 30000)
    .click({selector: selector, index: indexNumber})

  return this;
};
