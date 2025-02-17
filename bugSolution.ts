function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correct: Outputs 'Hello, Jane Doe'
console.log(greeter(user[0])); // Correct: Outputs 'Hello, Jane' 