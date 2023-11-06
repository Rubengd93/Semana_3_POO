import { Book } from "./books";

let book1 = new Book("Los pilares de la tierra", 600, "253420", "Ken Follet", "Random House");
// let book2 = new Book("Harry Potter", 390, "253245", "JK Rowlin", "Scholastic");
// let book3 = new Book("Tolkien", 800, "345678", "JRR Tolkien", "Editorial Minotauro");

// GET
console.log(book1.getTitle());
console.log(book1.getnPages());
console.log(book1.getisbn());
console.log(book1.getauthor());
console.log(book1.geteditorial());

// SET 
console.log(book1.setTitle("El señor de los Anillos"));
console.log(book1.setnPages(1400));
console.log(book1.setisbn("3273287432"));
console.log(book1.setauthor("JK Rowling"));
console.log(book1.seteditorial("Minotauro"));

// INFORMACION LIBRO

const propertyBooks = book1.toString();
console.log(propertyBooks);











