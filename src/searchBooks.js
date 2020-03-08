import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchInput from './search-input'
import SearchResults from './search-results'

class SearchBooks extends React.Component {
    state = {
      searchedBooks: []
    }

    resetSearchQuery = () => {
      this.setState({searchedBooks: []})
    }

    searchBooks = (query) => {
      if (query.length > 0) {
        BooksAPI.search(query).then(books => {
          if (books.error) {
            this.setState({ searchedBooks: [] });
          } else {
            this.setState({ searchedBooks: books });
          }
        });
      } else {
        this.resetSearchQuery()
      }
    }

    render() {
      const { changeShelf, mainPageBooks } = this.props
      return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search" onClick={this.resetSearchQuery}>Close</button>
            </Link>
            <SearchInput searchBooks={this.searchBooks}/>
          </div>
          <SearchResults 
            books={this.state.searchedBooks}
            changeShelf={changeShelf}
            mainPageBooks={mainPageBooks}
            />
        </div>
      )
    }
}

export default SearchBooks