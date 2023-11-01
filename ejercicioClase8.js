
class Person {
    
    constructor(name, surname, yearOfBirth, genero, peso, altura, hobbies){

        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.hobbies = hobbies;
    }

    calculoImc(){

        // const heightMeters = this.altura / 100;
        const imc = this.peso / (this.altura * this.altura);
        return Math.round(imc);

    }

    edad(){
        const currentYear = new Date().getFullYear();
        const edad = currentYear - this.yearOfBirth;
        return edad;
    }

    printAll(){
        
        console.log(`Nombre - ${this.name}, Apellido - ${this.surname}, 
        Año de nacimiento - ${this.yearOfBirth}, Genero - ${this.genero}, Peso - ${this.peso}, 
        Altura - ${this.altura}`);

    }

    printHobbies() {

        let hobbie1 = [];
        for (let hobbie of this.hobbies) {
            hobbie1.push(hobbie)


        }

        console.log(`Los hobbies de ${this.name} son ${hobbie1}`);
        
    }


}



// Instanciacion y llamadas

let hobbiesPerson1 = ["Gastronomia", "Diseño", "Padel"];
let person1Imc = new Person("Ruben", "Vera", "1993", "Masculino", "50", "1.65", hobbiesPerson1);

console.log(person1Imc);
 
// Instanciacion y llamada de algun valor

// console.log(person1Imc.birthday);


// Instanciacion y llamadas metodos

//RETO 2

let imcPerson1 = person1Imc.calculoImc();
let nam = person1Imc.name;
console.log(`${nam} tiene un indice de masa corporal de ${imcPerson1}`);

//RETO 3

let edadPerson1 = person1Imc.edad();
console.log(`la edad de ${nam} es ${edadPerson1}`);

//RETO 4

let atributPerson1 = person1Imc.printAll();
console.log(`${atributPerson1}`);

//RETO 5

let hobbies1 = person1Imc.printHobbies();
console.log(hobbies1);

//RETO 6













