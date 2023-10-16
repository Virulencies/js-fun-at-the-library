
function createLibrary(libName) {
  return {
    name: libName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],

    }

  };
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  }
  else if (book.genre === "fiction") {
    library.shelves.fiction.push(book);
  }
  else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  }
}

function checkoutBook() {
  
}

module.exports = {
   createLibrary,
   addBook,
   checkoutBook,
  // takeStock
};