/**
 * @param {Wait for text not exist by css} selector
 * combination of waitForElementVisible & assert.containsText.
 */

exports.command = function(selector, textValue) {
  const browser = this;

  browser
    .useCss()
    .waitForElementVisible(selector, 30000)
    .assert.not.containsText(selector, textValue);

  return this;
};
