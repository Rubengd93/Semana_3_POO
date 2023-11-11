export class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    printName() {
        console.log(this.name);
    }
    yearOfbirth(currentYear) {
        let Operatoryear = currentYear - this.age;
        console.log(Operatoryear);
    }
    setAddress(adress) {
        return this.address = adress;
    }
}
