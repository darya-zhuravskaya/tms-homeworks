type Numbers = {
    x: number | null,
    y: number | null
}

export class Calculator {
    numbers:Numbers;
    operation: string

    constructor(numbers: Numbers, operation: string){
        this.numbers = numbers;
        this.operation = operation.trim()
    }

    execute() {
        switch (this.operation) {
            case '+':
                return this.addition();
            case '-':
                return this.subtraction();
            case '*':
                return this.multiplication();
            case '/':
                return this.division()
        }

    }

    addition(): number | undefined {
        const { x, y } = this.numbers;

        if (x === null || y === null){
            return undefined 
        }

        return x + y;
    }

    subtraction(): number | undefined {
       const { x, y } = this.numbers;

        if (x === null || y === null){
            return undefined 
        }

        return x - y;
    }

    multiplication(): number | undefined {
        const { x, y } = this.numbers;

        if (x === null || y === null){
            return undefined 
        }

        return +(x * y).toFixed(2);
    }

    division(): number | undefined {
        const { x, y } = this.numbers;

        if (x === null || y === null || y === 0){
            return undefined 
        }

        return x / y;
    }

}