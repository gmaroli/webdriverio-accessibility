import Helper from '../utils/helper'
import HomePage from '../pages/home'


let testTitle = ''

describe("Home Page Accessibilty Test", () => {

    before(() => {
        HomePage.open()
    })

    it("has no violations", () => {
        let results = Helper.runAccessibilityTest("HomePage.csv")
        expect(results.violations.length, "Home page has accessibilty issues").to.equal(0)
    })
})