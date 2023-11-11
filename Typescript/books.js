"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getisbn = function () {
        return this.isbn;
    };
    Book.prototype.getauthor = function () {
        return this.author;
    };
    Book.prototype.geteditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (title) {
        return this.title = title;
    };
    Book.prototype.setnPages = function (nPages) {
        return this.nPages = nPages;
    };
    Book.prototype.setisbn = function (isbn) {
        return this.isbn = isbn;
    };
    Book.prototype.setauthor = function (author) {
        return this.author = author;
    };
    Book.prototype.seteditorial = function (editorial) {
        return this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        var property = "";
        property =
            "Title - ".concat(this.title, " \n        Number of Pages - ").concat(this.nPages, "\n        ISBN - ").concat(this.isbn, "\n        Author - ").concat(this.author, "\n        Editorial - ").concat(this.editorial);
        return property;
    };
    return Book;
}());
exports.Book = Book;
