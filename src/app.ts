interface Greetable {
    readonly name: string;
    greet(phrase: string): void
}

class Person implements Greetable {
    name: string;
    age = 37

    constructor(n:string) {
        this.name = n
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}
let user1: Greetable

user1 = new Person("Pete")
user1.greet("heya")

console.log(user1)