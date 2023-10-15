function createTitle(title) {
  var words = title.split(" ")

  if (words[0] === "The") {
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
  return reviewsArray.push(reviews);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}