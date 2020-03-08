import React from 'react'
import BookshelfChanger from './bookshelf-changer'


class Books extends React.Component {
    render() {
        const { book, changeShelf, mainPageBooks, bookshelfNames } = this.props
      
        const checkBookCover = (book) => {
          if (book.imageLinks) return book.imageLinks.thumbnail
          else return 'No Cover Available'
        }

        const checkBookAuthor = (book) => {
            if (book.authors) return book.authors
            else return 'Unknown Author'
        }

        const bookCover = checkBookCover(book)
        const bookAuthor = checkBookAuthor(book)
        
      return(
        <li key={book.id}>
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover'
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${bookCover})`
                        }}
                    >
                    <BookshelfChanger 
                        book={book}
                        changeShelf={changeShelf}  
                        mainPageBooks={mainPageBooks}
                        bookshelfNames={bookshelfNames}  
                    />   
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{bookAuthor}</div>
            </div>
        </li>
      )
    }
}


export default Books