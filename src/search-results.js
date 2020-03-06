import React from 'react'
import Books from './books'

class SearchResults extends React.Component{
    render(){
        const {books, changeShelf} = this.props
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                {books.map(book => (
                    <Books 
                        book={book}
                        key={book.industryIdentifiers[0].identifier}
                        changeShelf={changeShelf}
                    />
                    ))}
                </ol>
            </div>
        )
    }
}

export default SearchResults