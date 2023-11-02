
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

    printHobbies(){

        let hobbie1 = [];
        for (let hobbie of this.hobbies) {
            hobbie1.push(hobbie)

        }

        // console.log(`Los hobbies de ${this.name} son ${hobbie1}`);
        return hobbie1;

    }

}

module.exports = Person;








