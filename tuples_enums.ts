enum Role {ADMIN, READ_ONLY, AUTHOR};

const person/* : {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} */ = {
    name: "Pete",
    age: 37,
    hobbies: ["running", "games"],
    role: Role.ADMIN
}

console.log(person.name)

for (let hobby of person.hobbies) {
    console.log(hobby)
}