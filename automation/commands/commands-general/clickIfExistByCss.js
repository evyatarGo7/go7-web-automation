/**
 * @param {String} selector
 * clickIfExistByCss
 */

exports.command = function(selector) {
  const browser = this;

  browser
    .element('css selector', selector, (isExist) => {                      // Click if exist
      if (isExist.status === 0) {
        browser
          .waitAndClickByCss(selector);
      }
    });

  return this;
};