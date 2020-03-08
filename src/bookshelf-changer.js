import React from 'react'
import _ from 'lodash'


class BookshelfChanger extends React.Component {
    state = {
        shelf: this.props.book.shelf
    }
    
    updateShelf = (event) => {
        this.setState({
            shelf: event.target.value
        })
        this.props.changeShelf(this.props.book, event.target.value)
    }

    checkMainPage = (book, mainPageBooks) => {
        const mainPageBook = _.filter(mainPageBooks, item => {
            if (item.title === book.title) return item
            })
        if (mainPageBook.length > 0) return mainPageBook[0].shelf
        else return 'none'
    }

    checkshelf = (book, mainPageBooks) => {
        if (book.shelf === undefined) return this.checkMainPage(book, mainPageBooks)
        else return book.shelf
    }

    render(){
        const { book, mainPageBooks } = this.props
        return(    
            <div className="book-shelf-changer">
                <select value={this.checkshelf(book, mainPageBooks)} onChange={this.updateShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger