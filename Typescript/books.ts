
export class Book{

    private title: string;
    private nPages: number;
    private isbn: string
    private author: string
    private editorial: string;

    constructor(title: string, nPages: number, isbn: string, author:string, editorial: string){

        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
        
    }

    public getTitle():string{
        return this.title;
    }

    public getnPages():number{
        return this.nPages;
    }

    public getisbn():string{
        return this.isbn;
    }
    public getauthor():string{
        return this.author;
    }
    public geteditorial():string{
        return this.editorial;
    }

    
    public setTitle(title:string):string{
        return this.title = title;
    }

    public setnPages(nPages:number):number{
        return this.nPages = nPages;
    }

    public setisbn(isbn:string):string{
        return this.isbn = isbn;
    }
    public setauthor(author:string):string{
        return this.author = author;
    }
    public seteditorial(editorial:string):string{
        return this.editorial = editorial;
    }

    public toString():string {

        let property = "";
            
        property = 
        `Title - ${this.title} 
        Number of Pages - ${this.nPages}
        ISBN - ${this.isbn}
        Author - ${this.author}
        Editorial - ${this.editorial}`;
            
        return property;
        
    }

}



