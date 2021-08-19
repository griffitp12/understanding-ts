const person = {
    name: "Pete",
    age: 37,
    hobbies: ["running", "games"]
}

console.log(person.name)

for (let hobby of person.hobbies) {
    console.log(hobby)
}