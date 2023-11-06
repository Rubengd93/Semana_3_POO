"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, adress, manager) {
        this.books = books;
        this.adress = adress;
        this.manager = manager;
        // this.books.push(book1,book2,book3);
    }
    Library.prototype.getBook = function () {
        return this.books;
    };
    Library.prototype.getAdress = function () {
        return this.adress;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAdress = function (adress) {
        return this.adress = adress;
    };
    Library.prototype.setManager = function (manager) {
        return this.manager = manager;
    };
    Library.prototype.toStringLibrary = function () {
        for (var i = 0; i < this.books.length; i++)
            console.log(this.books[i]);
    };
    Library.prototype.getNumberBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByauthor = function (author) {
        var authorLib = this.books.filter(function (book) { return book.getauthor() == author; });
        return authorLib;
    };
    return Library;
}());
exports.Library = Library;
