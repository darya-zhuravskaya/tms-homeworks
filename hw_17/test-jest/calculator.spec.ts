import { Calculator } from "../Calculator";


describe("Calculator tests Multiplication", function(){
    test ("When postestive numbers", function(){
        const calculator = new Calculator({x:2, y:6}, '*')
        const result = calculator.execute()
        expect(result).toBe(12)
    })

    test ("When negative numbers", function(){
        const calculator = new Calculator({x:-2, y:-6}, '*')
        const result = calculator.execute()
        expect(result).toBe(12)
    })

    test ("When float numbers", function(){
        const calculator = new Calculator({x:2.1, y:33.5}, '*')
        const result = calculator.execute()
        expect(result).toBe(70.35)
    })

    test ("When one of arguments is 0", function(){
        const calculator = new Calculator({x:2.1, y:0}, '*')
        const result = calculator.execute()
        expect(result).toBe(0)
    })

    test ("When second argument is null", function(){
        const calculator = new Calculator({x:2.1, y:null}, '*')
        const result = calculator.execute()
        expect(result).toBe(undefined)
    })
})

describe("Calculator tests Division", function(){
    test ("When postestive numbers", function(){
        const calculator = new Calculator({x:6, y:2}, '/')
        const result = calculator.execute()
        expect(result).toBe(3)
    })

    test ("When negative numbers", function(){
        const calculator = new Calculator({x:-6, y:-2}, '/')
        const result = calculator.execute()
        expect(result).toBe(3)
    })

    test ("When dividing by a bigger number", function(){
        const calculator = new Calculator({x:1, y:2}, '/')
        const result = calculator.execute()
        expect(result).toBe(0.5)
    })

    test ("When the second argument is 0", function(){
        const calculator = new Calculator({x:15, y:0}, '/')
        const result = calculator.execute()
        expect(result).toBe(undefined)
    })

    test ("When the first argument is null", function(){
        const calculator = new Calculator({x:null, y:2}, '/')
        const result = calculator.execute()
        expect(result).toBe(undefined)
    })
})
