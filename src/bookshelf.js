import React from 'react'
import Books from './books'

class Bookshelf extends React.Component {
    checkBooksOnShelf = (shelfId, books) => {
      return books.filter(book => book.shelf === shelfId)
  
      }
  
    render() {
      const { shelfName, shelfId, books, changeShelf } = this.props
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
                key={book.industryIdentifiers[0].identifier}
                changeShelf={changeShelf}
            />
            ))}
           </ol>
          </div>
        </div>
      )
    }
  }


  export default Bookshelf 