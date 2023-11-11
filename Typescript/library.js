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
    // public getBook():Book[]{
    //     return this.books;
    // }
    Library.prototype.getAdress = function () {
        return this.adress;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAdress = function (adress) {
        this.adress = adress;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toStringLibrary = function () {
        var result = "";
        for (var i = 0; i < this.books.length; i++) {
            result += "\n".concat(this.books[i].toString());
        }
        return result;
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
