const selectorCnt = require ('../data/selectors.json').counter;

    function inputNumber (str, value) {
        if (str === "left") {
            if ($(selectorCnt.lowerLimitField).isDisplayed()) {
                $(selectorCnt.lowerLimitField).click();
            }
            $(selectorCnt.lowerInputField).click();
            browser.keys('Backspace');
            browser.keys(value);
        } else {
            if ($(selectorCnt.upperLimitField).isDisplayed()) {
                $(selectorCnt.upperLimitField).click();
            }
            $(selectorCnt.upperInputField).click();
            browser.keys('Backspace');
            browser.keys(value);
        }
    }

module.exports = inputNumber;