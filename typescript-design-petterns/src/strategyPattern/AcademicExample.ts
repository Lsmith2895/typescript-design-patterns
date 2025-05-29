

class Context {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log("Context: Sorting data using the strategy");

        const sortedData = this.strategy.doAlgorithm(["a", "b", "c"]);
        console.log(sortedData.join(","))

    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {

    public doAlgorithm(data: string[]): string[] {
        return data.sort()
    }

}

class ConcreteStrategyB implements Strategy {

    public doAlgorithm(data: string[]): string[] {
        return data.reverse()
    }
}


// Basic Sorting Strategy
const sortStrategy = new ConcreteStrategyA
const context = new Context(sortStrategy)
console.log('basic sorting strategy');
context.doSomeBusinessLogic();

// Reverse Sorting Strategy
const reverseStrategy = new ConcreteStrategyB
context.setStrategy(reverseStrategy)
console.log('reverse sorting strategy')
context.doSomeBusinessLogic();

export { Context as AcademicStrategyPattern }