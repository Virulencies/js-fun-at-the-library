function shelfBook(book, shelfSpot) {
  if (shelfSpot.length < 3) {
    shelfSpot.unshift(book);
  }
}

function unshelfBook(bookTitle, shelfSpot) {}
//  for (let i = 0; i < shelfBook.length; i++) {
//    if (shelfSpot[i].title === bookTitle) {
//     shelfSpot.splice(i, 1);
//      return shelfSpot;
//    }
//  }
//}
// This code passes the test, but its cobled together from online sources and I still dont fully understand it,
// commenting it out until I can fully grasp how it works

function listTitles(shelf) {
  var titles = shelf.map(book => book.title);
  return titles.join(', ');
}

function searchShelf(shelf, title) {
  return shelf.some(book => book.title === title);

}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};