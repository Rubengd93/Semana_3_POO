import { Book } from "./books";

export class Library {

    private books: Book[];
    private adress: string;
    private manager:string;

    constructor(books: Book[], adress: string, manager:string){

        this.books = books; 
        this.adress = adress;
        this.manager = manager;
        // this.books.push(book1,book2,book3);

    }

    // public getBook():Book[]{
    //     return this.books;
    // }

    public getAdress():string{
        return this.adress;
    }

    public getManager():string{
        return this.manager;
    }

    public setAdress(adress:string){
        this.adress = adress;
    }

    public setManager(manager:string){
        this.manager = manager;
    }

    public toStringLibrary():string{

        let result = "";
        for (let i = 0; i < this.books.length; i++){

            result += `\n${this.books[i].toString()}`;
            
        } 
        return result;
    }

    public getNumberBooks():number{
        return this.books.length
    }

    public findByauthor(author:string):Book[]{

        const authorLib = this.books.filter(book => book.getauthor() == author);
        return authorLib;

    }

}













