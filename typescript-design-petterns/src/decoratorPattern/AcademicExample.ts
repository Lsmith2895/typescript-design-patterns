
interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    public operation(): string {
        return 'Concrete Component'
    }
}


class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteComponentA(${super.operation()})`
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`
    }
}

function clientCode(component: Component) {
    console.log(`Result: ${component.operation()}`)
}

const simple = new ConcreteComponent();  // returns `ConcreteComponent`
console.log(simple)

const decorator1 = new ConcreteDecoratorA(simple); // returns `ConcreteDecoratorA(ConcreteComponent)
const decorator2 = new ConcreteDecoratorB(decorator1) // returns `ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))
console.log('I have decorated the component') 
clientCode(decorator2); // console logs: `ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent))