const selectorCnt = require ('../data/selectors.json').counter;
const expectedDCF = require ('../data/expected.json').defaultCounterFunctionality;
const inputNumber = require ('./../helpers/inputNumber');

describe('Default counter functionality', function () {

    it('TC-040 Subtract 1 gives -1', function () {
        browser.url('');
        const button = $$(selectorCnt.blackBtn)[0];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC040);
    })

    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorCnt.blackBtn)[5];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValueTC041);
    })

    it('TC-042 LLF accept 1', function () {
        inputNumber('left', expectedDCF.inputMin);
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-0432 ULF accept 9', function () {
        inputNumber('right', expectedDCF.inputMax);
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
        browser.refresh();
        inputNumber('left', expectedDCF.inputMin);
        inputNumber('right', expectedDCF.inputMin);
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
        expect(actual).toEqual(+expectedDCF.countValueTC041);
    })

});