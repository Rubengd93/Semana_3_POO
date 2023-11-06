"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfbirth = function (currentYear) {
        var Operatoryear = currentYear - this.age;
        console.log(Operatoryear);
    };
    Person.prototype.setAddress = function (adress) {
        return this.address = adress;
    };
    return Person;
}());
exports.Person = Person;
