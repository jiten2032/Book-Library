class Book {
    constructor(Name, Author, Type, Clear) {
        this.BookName = Name;
        this.BookAuthor = Author;
        this.BookType = Type;
        this.BookClear = Clear;



    }
}



class Display {
    add(book) {

        let TableBody = document.getElementById("TableBody");
        let TableData = `<tr id="TableRow">
                            <td>-</td>
                            <td>${book.BookName}</td>
                            <td>${book.BookAuthor}</td>
                            <td>${book.BookType}</td>
                            <td>${book.BookClear}</td>
                        </tr>`
        TableBody.innerHTML += TableData
    
    }
    clear() {
        let Form = document.getElementById("form");
        Form.reset();

    }
    
}