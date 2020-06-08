import Helper from '../utils/helper'
import ShoppingCart from '../pages/shoppingCart'

describe("Shopping cart Accesibility Test", () => {

    before(() => {
        ShoppingCart.open()
    })

    it('has no violations', () => {
        let results = Helper.runAccessibilityTest("ShoppingCart.csv")
        expect(results.violations.length, "Shopping Cart page has accessibilty issues").to.equal(0)
    })
})