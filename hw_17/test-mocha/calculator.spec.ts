import { Calculator } from "../Calculator";
import assert from "assert"

describe("Calculator tests Addition", function () {
    it("When positive numbers", function () {
        const calculator = new Calculator({ x: 2, y: 6 }, '+')
        const result = calculator.execute()
        assert.equal(result, 8, "Test failed")
    })


    it("When negative numbers", function () {
        const calculator = new Calculator({ x: -2, y: -6 }, '+')
        const result = calculator.execute()
        assert.equal(result, -8, "Test failed")
    })

    it("When first argument is null", function () {
        const calculator = new Calculator({ x: null, y: -2 }, '+')
        const result = calculator.execute()
        assert.equal(result, undefined, "Test failed")
    })

    it("When second argument is null", function () {
        const calculator = new Calculator({ x: 5, y: null }, '+')
        const result = calculator.execute()
        assert.equal(result, undefined, "Test failed")
    })

    it("When both arguments are null", function () {
        const calculator = new Calculator({ x: null, y: null }, '+')
        const result = calculator.execute()
        assert.equal(result, undefined, "Test failed")
    })


    it("When float numbers", function () {
        const calculator = new Calculator({ x: 3.41, y: 511.5 }, '+')
        const result = calculator.execute()
        assert.equal(result, 514.91, "Test failed")
    })

    it("When second argument is 0", function () {
        const calculator = new Calculator({ x: -2, y: 0 }, '+')
        const result = calculator.execute()
        assert.equal(result, -2, "Test failed")
    })

})

describe("Calculator tests Substruction", function () {
    it("when first is positive and smaller", function () {
        const calculator = new Calculator({ x: 2, y: 6 }, '-')
        const result = calculator.execute()
        assert.equal(result, -4, "Test failed")
    })

    it("when negative numbers", function () {
        const calculator = new Calculator({ x: -2, y: -6 }, '-')
        const result = calculator.execute()
        assert.equal(result, 4, "Test failed")
    })

    it("When float numbers", function () {
        const calculator = new Calculator({ x: 66.3, y: 1.3 }, '-')
        const result = calculator.execute()
        assert.equal(result, 65.0, "Test failed")
    })

    it("When second argument is 0", function () {
        const calculator = new Calculator({ x: 66, y: 0 }, '-')
        const result = calculator.execute()
        assert.equal(result, 66, "Test failed")
    })

    it("When first argument is 0", function () {
        const calculator = new Calculator({ x: 0, y: 1.3 }, '-')
        const result = calculator.execute()
        assert.equal(result, -1.3, "Test failed")
    })
})