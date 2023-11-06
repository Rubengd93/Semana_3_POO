import { Contacts } from "./contact";
import { Person } from "./person";

let person = new Person("Ruben", 30, "Periodista ricardo martinez perez, 21");
let person1 = new Person("Juan", 60, "Calle la palmita, portal 5, 5C");
let person2 = new Person("Alberto", 35, "Calle recogidas, Granada");

let contactos = new Contacts();

contactos.people.push(person, person1, person2)

contactos.printCalendar()
