const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker"
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason"
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter"
      },
    ]
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury"
      },
      {
        title: "Ansiedade -- Como enfrentar o mal do século",
        author: "Augusto Cury"
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey"
      },
    ]
  },
]



function getTotalCategories(categories) {
  const totalCategories = categories.length
  return totalCategories
}

const CATEGORY1 = 'TERROR';
const CATGEGORY2 = 'COMEDIA';

const CATEGORY_1_BOOKS = 2
const CATEGORY_2_BOOKS = 10

const x = {

}

console.log()


function getTotalBooksPerCategory(booksByCategory) {
  VARIAVEL

  for (let category of booksByCategory) {
    const categoryName = category.category

    console.log('Category: ' + category.category)
    console.log('Total of books is: ' + category.books.length)
  }

  return VARIAVEL
}



function getoTotalAuthors() {
  const authors = []

  for (let category of booksByCategory) {
    for (let books of category.books) {
      if (authors.indexOf(books.author)) {
        authors.push(books.author)
      }
    }
  }

  return ('Total of authors: ' + authors.length)
}


function getBooksAuthorAugustoCury() {
  const books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === "Augusto Cury") {
        books.push(book.title)
      }
    }
  }

  return ('Books Augusto Cury: ' + books)
}


function getBooksByASpecificAuthor(author) {
  const books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }

  return ('Books ' + author + ': ' + books)
}


// console.log(getoTotalAuthors())
// console.log(getBooksAuthorAugustoCury())
// console.log(getBooksByASpecificAuthor("George S. Clason"))
//console.log(getTotalCategories(booksByCategory))
console.log(getTotalBooksPerCategory(booksByCategory))

