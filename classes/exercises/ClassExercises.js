// Define your Book class here:
class Book {
    constructor(title,author,copyrightDate,isbn,pages,checkedOut,toBeDiscared) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pages = pages;
        this.checkedOut = checkedOut;
        this.toBeDiscared = toBeDiscared;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title,author,copyrightDate,isbn,pages,checkedOut,toBeDiscared) {
        super(title,author,copyrightDate,isbn,pages,checkedOut,toBeDiscared);
    }
    findBookAge () {

        let todayYear = new Date();
        
        if ((todayYear.getFullYear() - this.copyrightDate) > 5) {
           this.toBeDiscared = "yes";
        }
    } 
}

class Novel extends Book {
    constructor(title,author,copyrightDate,isbn,pages,checkedOut,toBeDiscared) {
        super(title,author,copyrightDate,isbn,pages,checkedOut,toBeDiscared);
    }
    updateCheckOut (checkOut = 0) {
        this.checkedOut += checkOut;

        if (this.checkedOut > 100) {
            this.toBeDiscared = "yes";
        }
    }
}
// Declare the objects for exercises 2 and 3 here:
let prideAndPrej = new Novel("Pride and Prejudice","Jane Austen",1813,1111111111111,432,32,"no");
let topSecret = new Manual("Top Secret Shuttle Building Manual","Redacted",2013,"0000000000000",1147,1,"no");


// Code exercises 4 & 5 here:
topSecret.findBookAge();
console.log(prideAndPrej);
prideAndPrej.updateCheckOut(5);
console.log(prideAndPrej);