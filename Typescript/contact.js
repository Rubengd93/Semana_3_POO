export class Contacts {
    constructor() {
        this.people = [];
    }
    printCalendar() {
        for (let i = 0; i < this.people.length; i++) {
            console.log(this.people[i]);
        }
    }
}
