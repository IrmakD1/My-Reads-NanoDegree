import React from 'react'
import Bookshelf from './bookshelf'

  class ListBooks extends React.Component {
  
    bookshelfNames = [
      {name: 'Currently Reading', id: 'currentlyReading'},
      {name: 'Want to Read', id: 'wantToRead'},
      {name: 'Read', id: 'read'}
    ]
    
    render() {
      const { books, changeShelf } = this.props
      return(
        <div className="list-books">
          <div className="list-books-title">
          <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {this.bookshelfNames.map(shelf => (
              <Bookshelf 
                books={books}
                shelfName={shelf.name}
                shelfId={shelf.id}
                key={shelf.id}
                changeShelf={changeShelf}
              />
              ))}
            </div>
          </div>
        </div>
      )
    }
  }

  export default ListBooks