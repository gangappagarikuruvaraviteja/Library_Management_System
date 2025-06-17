var books = [];
var borrowed = [];

function addBook() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var isbn = document.getElementById("isbn").value;
    if (!title || !author || !isbn) {
        alert("Please fill all fields.");
        return;
    }
    books.push({ title: title, author: author, isbn: isbn });
    displayBooks();
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

function displayBooks() {
    var table = document.getElementById("book-table");
    table.innerHTML = "";
    books.forEach(function(book) {
        var row = table.insertRow();
        row.insertCell(0).innerText = book.title;
        row.insertCell(1).innerText = book.author;
        row.insertCell(2).innerText = book.isbn;
    });
}

function displayBorrowed() {
    var table = document.getElementById("borrowed-table");
    table.innerHTML = "";
    16 - 6 - 2025


    table.innerHTML = "";
    borrowed.forEach(function(entry) {
        var row = table.insertRow();
        row.insertCell(0).innerText = entry.student;
        row.insertCell(1).innerText = entry.book.title;
        row.insertCell(2).innerText = entry.book.isbn;
    });
}

function borrowBook() {
    var student = document.getElementById("student").value;
    var isbn = document.getElementById("borrowIsbn").value;
    if (!student || !isbn) {
        alert("Enter student name and book Isbn.");
        return;
    }
    var bookIndex = books.findIndex(function(book) {
        return book.isbn == isbn;
    })
    if (bookIndex == -1) {
        alert("Book not available or already borrowed");
        return;
    }
    var book = books.splice(bookIndex, 1)[0];
    borrowed.push({ student: student, book: book });
    displayBooks();
    displayBorrowed();
    document.getElementById("student").value = "";
    document.getElementById("borrowIsbn").value = "";
}

function returnBook() {
    var isbn = document.getElementById("returnIsbn").value;
    var index = borrowed.findIndex(function(entry) {
        return entry.book.isbn == isbn;
    });
    if (index == -1) {
        alert("Book not available or already borrowed");


        alert("Book not available or already borrowed");
        return;
    }
    var book = borrowed.splice(index, 1)[0].book;
    books.push(book);
    displayBooks();
    displayBorrowed();
    document.getElementById("returnIsbn").value = "";
}