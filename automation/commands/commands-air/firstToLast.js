// Compare an element in the first result to the same element in the last result
// Reccomended for sorting
// Selector: the element you wish to compare
// substring: if the element is a date||time substring will get the left digits only e.g. xx:yy will be xx
// testedComp: the functionality you are testing to be added to error&success MSGes.

exports.command =  function(selector, substring, testedComp) {
    const browser = this;
    const first = '[data-testid=\'search-results-list\'] > li:nth-child(1) ';
    const last = '[data-testid=\'search-results-list\'] > li:nth-child(15) ';

//------
    browser
    .useCss()
    .waitForElementVisible(first + selector, 30000)
    .getText(first + selector, function (firstVal){
        browser
        .useCss()
        .waitForElementVisible(last + selector, 30000)
        .getText(last + selector, function (lastVal){

            firstVal = firstVal.value;
            lastVal = lastVal.value;

            if (substring){
                firstVal = firstVal.substring(0,2)
                lastVal = lastVal.substring(0,2)
            }

            firstVal = parseInt(firstVal.replace(/\D/g,''));
            lastVal = parseInt(lastVal.replace(/\D/g,''));

            if (firstVal > lastVal){
                browser.assert.fail('FAILED while testing: ' + testedComp + ` First Result Value:_${firstVal}  Last Result Value:_${lastVal}`)
            }
            else if (firstVal <= lastVal){
                console.log("✔ " + testedComp + ` First Result Value:_${firstVal}  Last Result Value:_${lastVal}`)
            }


        });
    });

//-------
    return this;
};

