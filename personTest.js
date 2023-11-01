
const lib = require('./person');

let hobbiesPerson1 = ["Gastronomia", "Diseño", "Padel"];
let person = new lib("Ruben", "Vera", "1993", "Masculino", "50", "1.65", hobbiesPerson1);

// let hobbiesPerson2 = ["Ajedrez", "Poker", "Running"];
// let person2 = new lib("Paco", "Gomez", "1982", "Masculino", "80", "1.75", hobbiesPerson2);


console.log(person.calculoImc());
console.log(person.edad());
console.log(person.printAll());
console.log(person.printHobbies());







