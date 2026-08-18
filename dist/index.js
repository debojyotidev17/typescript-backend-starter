class User {
    name;
    age;
    bio;
    constructor(name = "Debo", age = 20, bio = "hello") {
        this.name = name;
        this.age = age;
        this.bio = bio;
    }
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
    helloWorld() {
        console.log("hello world");
    }
}
export {};
//# sourceMappingURL=index.js.map