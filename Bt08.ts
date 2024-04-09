class Book {
    title: string;
    author: string;
    price: number;
    constructor(title:string,author:string,price:number){
        this.title = title;
        this.author = author;
        this.price = price;
    }
    printBook(){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
    updateBook(title:string,author:string,price:number){
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
let book = new Book("nhất","nhất",2);
book.printBook();
book.updateBook("nhất2","nhất2",7);
book.printBook();