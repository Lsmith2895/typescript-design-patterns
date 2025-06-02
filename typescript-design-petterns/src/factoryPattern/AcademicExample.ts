interface Product {
    operation(): string;
}

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creators code has just worked with ${product.operation()}`;
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}


class ConcreteProduct1 implements Product {
    public operation(): string {
        return 'result of creating product 1';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return 'result of creating product 2';
    }
}

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

console.log('App: launched with concrete creator 1')
clientCode(new ConcreteCreator1);
console.log('')

console.log('App: launched with concrete creator 2')
clientCode(new ConcreteCreator2)