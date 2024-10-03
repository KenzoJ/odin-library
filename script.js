document.addEventListener('DOMContentLoaded', () => {
    const myLibrary = [
        "Great Gumble",
        "Laws of propane",
        "Suzanne's diary"
    ];

    showLibrary();


    function showLibrary() {
        const libraryContainer = document.getElementById('books');
        libraryContainer.innerHTML = myLibrary.map(book => `<div class="book-item">${book}</div>`).join('');
    }

    const form = document.getElementById('book-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // using form values
        const bookName = document.getElementById('book-name').value;
        const author = document.getElementById('author').value;
        const read = document.getElementById('read').checked;

        //create book entry
        const newBook = `${bookName} by ${author}`;
        myLibrary.push(newBook);
        showLibrary();
        form.reset();
 
    })
});

function Book() {
    // the constructor...
  };
  
      function addBookToLibrary() {
    // do stuff here
  };
