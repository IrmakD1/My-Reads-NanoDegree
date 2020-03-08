import React from 'react'
import _ from 'lodash'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './list-books'
import SearchBooks from './searchBooks'





class BooksApp extends React.Component {
  state = {
    Books: [],
  }

  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ Books: books });
      })
      .catch(err => {
        console.log('Error', err);
      });
  };

    //needs to take in the value chosen in the dropdown menu
  changeShelf = (book, newShelf) => {
    book.shelf = newShelf
    const currentListOfBooks = this.state.Books
    const updatedList = _.filter(currentListOfBooks, item => {
        if(item.title !== book.title) return item
    })
    updatedList.push(book)
    this.setState({Books: updatedList})
    BooksAPI.update(book, newShelf)
  }
    
  render() {
    const { Books } = this.state
    return (
      <div className ='app'>
      <Router>
        <Route path='/search' render={() => (
          <SearchBooks 
            changeShelf={this.changeShelf}
            mainPageBooks={Books}
            bookshelfNames={this.bookshelfNames}
          />
          )} />
        <Route exact path='/' render={() => (
          <div>
          <ListBooks 
            books={Books}
            changeShelf={this.changeShelf}
            bookshelfNames={this.bookshelfNames}
          />
          <div className="open-search">
            <Link to='/search'>
            <button>Add a book</button>
            </Link>
          </div>
          </div>
          )} />
        </Router>
    </div>
      )
    }
}


export default BooksApp
