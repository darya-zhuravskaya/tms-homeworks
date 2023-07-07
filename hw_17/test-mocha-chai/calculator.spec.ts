import { Calculator } from "../Calculator";
import {expect} from "chai"

describe("Calculator tests Multiplication", function(){
    it ("When positive numbers", function(){
        const calculator = new Calculator({x:2, y:6}, '*')
        const result = calculator.execute()
        expect(result,"Test failed").equal(12)
    })

    it ("When negative numbers", function(){
        const calculator = new Calculator({x:-2, y:-6}, '*')
        const result = calculator.execute()
        expect(result,"Test failed").equal(12)
    })

    it ("When float numbers", function(){
        const calculator = new Calculator({x:2.1, y:33.5}, '*')
        const result = calculator.execute()
        expect(result,"Test failed").equal(70.35)
    })

    it ("When one of arguments is 0", function(){
        const calculator = new Calculator({x:2.1, y:0}, '*')
        const result = calculator.execute()
        expect(result,"Test failed").equal(0)
    })

    it ("When second argument is null", function(){
        const calculator = new Calculator({x:2.1, y:null}, '*')
        const result = calculator.execute()
        expect(result,"Test failed").equal(undefined)
    })
})

describe("Calculator tests Division", function(){
    it ("When positive numbers", function(){
        const calculator = new Calculator({x:6, y:2}, '/')
        const result = calculator.execute()
        expect(result,"Test failed").equal(3)
    })

    it ("When negative numbers", function(){
        const calculator = new Calculator({x:-6, y:-2}, '/')
        const result = calculator.execute()
        expect(result,"Test failed").equal(3)
    })

    it ("When dividing by a bigger number", function(){
        const calculator = new Calculator({x:1, y:2}, '/')
        const result = calculator.execute()
        expect(result, "Test failed").equal(0.5)
    })

    it ("When the second argument is 0", function(){
        const calculator = new Calculator({x:15, y:0}, '/')
        const result = calculator.execute()
        expect(result, "Test failed").equal(undefined)
    })

    it ("When the first argument is null", function(){
        const calculator = new Calculator({x:null, y:2}, '/')
        const result = calculator.execute()
        expect(result, "Test failed").equal(undefined)
    })
})
