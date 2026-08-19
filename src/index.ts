interface Person {
    name: string;
    age: number;
    greet(): void;
}

class User implements Person {
    constructor(
        public name = "Debo",
        public age = 20,
        public bio = "hello"
    ) {}

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }

    helloWorld() { 
        console.log("hello world");
    }
}

const obj = new User();
