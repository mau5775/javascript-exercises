const getTheTitles = function(books) {
    const getTitle = books.map(book=> `${book.title}`);
    return getTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
