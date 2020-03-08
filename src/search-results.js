import React from 'react'
import Books from './books'

class SearchResults extends React.Component{
    render(){
        const {books, changeShelf, mainPageBooks } = this.props
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                {books.map(book => (
                    <Books 
                        book={book}
                        key={`${book.id}1`}
                        changeShelf={changeShelf}
                        mainPageBooks={mainPageBooks}
                    />
                    ))}
                </ol>
            </div>
        )
    }
}

export default SearchResults