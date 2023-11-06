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

    public getBook():Book[]{
        return this.books;
    }

    public getAdress():string{
        return this.adress;
    }

    public getManager():string{
        return this.manager;
    }

    public setAdress(adress:string):string{
        return this.adress = adress;
    }

    public setManager(manager:string):string{
        return this.manager = manager;
    }

    public toStringLibrary(){

        for (let i = 0; i < this.books.length; i++) 

            console.log(this.books[i]);            
             
        }

    public getNumberBooks():number{
        return this.books.length
    }

    public findByauthor(author:string):Book[]{

        const authorLib = this.books.filter((book) => book.getauthor() == author);
        return authorLib;

    }

    }













