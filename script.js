document.addEventListener('DOMContentLoaded', () => {
    const myLibrary = [
        
    ];
    
    function Book(name, author, read) {
        this.name = name;
        this.author = author;
        this.read = read;
    }
    
    function addBookToLibrary() {
        const form = document.getElementById('book-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
    
            // using form values
            const bookName = document.getElementById('book-name').value;
            const whoAuthor = document.getElementById('author').value;
            const ifRead = document.getElementById('read').checked;
    
            //create book entry
            
            const newBook = new Book(bookName, whoAuthor, ifRead)
            myLibrary.push(newBook);
            showLibrary();
            form.reset();
     
        })
    }


    function showLibrary() {
        const libraryContainer = document.getElementById('books');
        libraryContainer.innerHTML = myLibrary.map(book => `<div class="book-item">${book.name}</div>`).join('');
    }

    addBookToLibrary();
    showLibrary()
})