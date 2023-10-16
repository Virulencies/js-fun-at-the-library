function createTitle(title) {
  var words = title.split("")

  if (title.startsWith("The ")) {
    return (title)
  }
  else {
    return ("The " + title);
}
}

function buildMainCharacter(charName, charAge, identifyAs) {
  var name = charName;
  var age = charAge;
  var pronouns = identifyAs;
  return ( {
    name,
    age,
    pronouns,
  });
}

function saveReview(reviews, reviewsArray) {

  if (reviewsArray.includes(reviews)) {
    return ;
  } else {
  return reviewsArray.push(reviews);
}
}

function calculatePageCount(bookTitle){
  var pagePerLetter = 20;
  var letters = bookTitle.length;
  return letters * pagePerLetter;
  }
  
function writeBook(title, mainCharacter, genre){
  var pageCount = calculatePageCount(title)
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: pageCount,
    genre: genre
  }
}

function editBook(book){
  book.pageCount = (book.pageCount * 3) / 4
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}