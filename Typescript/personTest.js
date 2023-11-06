"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var person = new person_1.Person("Ruben", 30, "Periodista ricardo martinez perez, 21");
person.printName();
person.yearOfbirth(2023);
console.log(person.setAddress("Calle Marco Polo"));
