import { Book } from "./books";
import { Library } from "./library";

let book1 = new Book("Los pilares de la tierra", 600, "253420", "Ken Follet", "Random House");
let book2 = new Book("Harry Potter", 390, "253245", "JK Rowlin", "Scholastic");
let book3 = new Book("Tolkien", 800, "345678", "JRR Tolkien", "Editorial Minotauro");

let lib1 = new Library([book1,book2,book3], "Juan Urtado", "Jesus");


let library1 = lib1.toStringLibrary();
console.log(library1);

let author = lib1.findByauthor("Ken Follet");
console.log(author);