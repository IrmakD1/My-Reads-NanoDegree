import React from 'react'

class SearchInput extends React.Component{
    state = {
        value: ''
    }
    
    updateSearch = event => {
        const query = event.target.value
        this.setState({value: query})
        this.props.searchBooks(query)
    }

    render(){
        return(
            <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={this.state.value}
                    onChange={this.updateSearch}
                />
            </div>
        )
    }
}

export default SearchInput