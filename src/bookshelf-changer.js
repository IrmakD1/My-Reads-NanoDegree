import React from 'react'


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

    checkshelf = (book) => {
        if(book.shelf === undefined) return 'none'
        else return book.shelf
    }

    render(){
        const { book } = this.props
        return(    
            <div className="book-shelf-changer">
                <select value={this.checkshelf(book)} onChange={this.updateShelf}>
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