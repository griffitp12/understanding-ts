// type AddFn = (a: number, b: number) => number;
interface AddFn {
 (a: number, b: number): number;
}    

let add2: AddFn

add2 = (n1: number, n2:number) => {
    return n1 + n2
}

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 37;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Pete');
user1.greet('heya');

console.log(user1);
