interface Subject {
    state: number;
    add(observer: Observer): void;
    remove(observer: Observer): void;
    notify(): void
}

interface Observer {
    update(subject: Subject): void;
}

class ConcreteSubject implements Subject {

    public state: number = 0;

    constructor(state: number) {
        this.state = state
    }

    private observers: Observer[] = [];

    public add(observer: Observer): void {
        const isExist = this.observers.includes(observer);

        if (isExist) {
            return console.log('Subject: Observer has been attached already')
        }

        console.log('Subject: Attached observer')
        this.observers.push(observer);
    }

    public remove(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Subject: This observer does not exist")
        }

        this.observers.splice(observerIndex, 1);
        console.log("Subject: Detached the Observer")
    }

    public notify(): void {
        console.log("Subject: Notifying observers...")
        this.observers.forEach((observer) => {
            observer.update(this);
        })
    }

    public someBusinessLogic(): void {
        console.log('Subject: I am doing something important to the state')

        this.state = Math.floor(Math.random() * (10 + 3));
        console.log(`Subject: my state just changed to ${this.state}`)
        this.notify();
    }
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log("ConcreteObserverA: Reacted to the state update")
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        const currentState = subject.state
        if (subject instanceof ConcreteSubject && currentState === 0 || currentState >= 2) {
            console.log("ConcreteObserverB: Reacted to the state update")
        }
    }
}

const subject = new ConcreteSubject(0);

const observer1 = new ConcreteObserverA();
subject.add(observer1);

const observer2 = new ConcreteObserverB();
subject.add(observer2)

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.remove(observer2)

subject.someBusinessLogic();