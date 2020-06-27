describe('Complex Counter App', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Page title is Complex Counter App', function () { //define test title by passing a string
            browser.url('https://likejean.github.io/homework-5/'); //open baseUrl
            const title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
        })

    });

    describe('Elements exist', function () {

        it('TC-002 Header', function () {
            const header = $('h1').isDisplayed();
            expect(header).toEqual(true);
        })

        it('TC-003 Total Result', function () {
            const header = $('h3.total-count').isDisplayed();
            expect(header).toEqual(true);
        })

        it('TC-004 Counter Name', function () {
            const header = $$('h3')[1].isDisplayed();
            expect(header).toEqual(true);
        })

    });

});