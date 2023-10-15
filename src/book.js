function createTitle(title) {
  var words = title.split(" ")

  if (words[0] === "The") {
    return (title)
  }
  else {
    return ("The " + title);
}
}


module.exports = {
  createTitle,
  // buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}