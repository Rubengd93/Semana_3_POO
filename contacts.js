class Contacts {

    constructor(){

        this.objPerson = [];

    }

    printPerson(){

        for (let i = 0; i < this.objPerson.length; i++) {
            
            this.objPerson[i].printAll()
            
        }

    }

}

module.exports = Contacts;

// let cont = new Contacts();

// cont.printPerson(person2)

// console.log(cont);