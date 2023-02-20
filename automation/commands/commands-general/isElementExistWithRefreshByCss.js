/**
 * @param {isElementExistWithRefresh} selector
 * Refresh the browser every time interval until find element
 */

const globals = require("../../nightwatch.globals");
exports.command = function(selector, numberOfTimesToRun, waitInterval) {
  const browser = this;
  let numberOfTimes = 0;

    browser.element('css selector', selector, isVisibleDone);

    function isVisibleDone(result) {
        if (result.status !== 0 && numberOfTimes < numberOfTimesToRun) {
            numberOfTimes++;
            browser
                .pause(waitInterval)
                .refresh()
                .element('css selector', selector, isVisibleDone);
        } else {
            console.log(selector + ' found as expected');

            if (result.status !== 0) {
                console.log(selector + ' could not be found after ' + numberOfTimesToRun + ' attempts');
                browser.process.exit();
            } else {
                console.log(selector + ' found as expected');
            }

            return this;
    }
  }
};
