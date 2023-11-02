const Contacts = require('./contacts');
const Person = require('./person');

let hobbiesPerson2 = ["Ajedrez", "Poker", "Running"];
let person2 = new Person("Paco", "Gomez", "1982", "Masculino", "80", "1.75", hobbiesPerson2);
let person3 = new Person("Francisco", "Perez", "1982", "Masculino", "80", "1.75", hobbiesPerson2);


let cont = new Contacts();
cont.objPerson.push(person2)
cont.objPerson.push(person3)



cont.printPerson()

// console.log(cont);

