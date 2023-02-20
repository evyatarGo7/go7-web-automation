/**
 * backSpace
 * Since clearValue not always working, I created a function that literally emulate
 * key-press on the back_space button.
 * selector is clicked and delete value (pressing BACKSPACE button str.length + 1 times
 */

 exports.command = function(numberOfTimes) {
  const browser = this;

  for (let i = 0; i < numberOfTimes.length + 1; i++) {
    // browser.sendKeys(browser.Keys.BACK_SPACE);
    browser.perform(function(){
      const actions = this.actions({async: true});
      return actions
        .sendKeys(Keys.BACK_SPACE);
    });
  }

  return this;
};