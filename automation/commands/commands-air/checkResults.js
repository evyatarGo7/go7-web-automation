//selector : the selector of the element you want to verify its content
//expand : boolean > if true the card will expand to chack the more details section
//textValue : the expected content of the selector

//the selector is checked for its value in all the results card available in the view max-15


const showMoreLess = '.kFRNCC > button'
//as in text content
const Oneworld = ['Finnair', 'American Airlines', 'British Airways', 'Iberia', 'Multiple Airlines']
const SkyTeam = ['KLM', 'Delta', 'Air France', 'Multiple Airlines']
const StarAlliance = ['Turkish Airlines', 'Swiss', 'TAP Portugal', 'Lufthansa', 'Multiple Airlines']
const alliances = ['Oneworld', 'SkyTeam', 'Star Alliance'] //as in data-testid



exports.command = async function(selector, expand, textValue) {
    const browser = this;
//------
    console.log('Expand >> '+ expand)
    console.log('TextValue >>' + textValue)
    if (expand){
        //check how many result cards display
        const resElements = await browser.findElements('[data-testid=search-results-list]>li');
        const resCount = resElements.length;
        for (let i = 1; i < resCount; i++){
            let index = `[data-testid=search-results-list]>li:nth-child(${i}) `;
            browser
            .waitAndClickByCss(index + showMoreLess)
            .waitForTextByCss(index + selector, textValue)
            .waitAndClickByCss(index + showMoreLess)
        }
    }





    else if (!expand){
        //check how many result cards display
        const resElements = await browser.findElements('[data-testid=search-results-list]>li');
        const resCount = resElements.length;



        if (alliances.includes(textValue)){

            for (let i = 1; i <= resCount; i++){
                let index = `[data-testid=search-results-list]>li:nth-child(${i}) `;
                browser
                .useCss()
                .waitForElementVisible(index + selector, 30000)
                .getText(index + selector, function (result) {
                    const myValue = result.value;
                    switch (textValue){
                        case 'Oneworld':
                            browser.expect(Oneworld).includes(myValue);
                            break;
                        case 'SkyTeam':
                            browser.expect(SkyTeam).includes(myValue);
                            break;
                        case 'Star Alliance':
                            browser.expect(StarAlliance).includes(myValue);
                            break;
                    }
                })
            }

        }




        else {
            for (let i = 1; i <= resCount; i++){
                let index = `[data-testid=search-results-list]>li:nth-child(${i}) `;
                browser
                .useCss()
                .waitForElementVisible(index + selector, 30000)
                .getText(index + selector, function (result) {
                    const myValue = result.value;
                    browser.expect(myValue).contains(textValue || 'Multiple Airlines')
                })

            }
        }
    }
//-------
    return this;
};
