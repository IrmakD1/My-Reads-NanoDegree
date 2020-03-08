import React from 'react'
import Books from './books'

class Bookshelf extends React.Component {
    checkBooksOnShelf = (shelfId, books) => {
      return books.filter(book => book.shelf === shelfId)
    }

    render() {
      const { shelfName, shelfId, books, changeShelf, bookshelfNames } = this.props
      const booksOnShelf = this.checkBooksOnShelf(shelfId, books)
      return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            {shelfName}
            </h2>
          <div className="bookshelf-books">
           <ol className="books-grid">
            {booksOnShelf.map(book => (
            <Books 
                book={book}
                key={`${book.id}1`}
                changeShelf={changeShelf}
                bookshelfNames={bookshelfNames}
            />
            ))}
           </ol>
          </div>
        </div>
      )
    }
  }


  export default Bookshelf 