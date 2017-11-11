import React, { Component } from 'react'
import sortBy from 'sort-by'
import Book from './Book'
import PropTypes from 'prop-types'

class BooksShelf extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.object),
    onBookChangeShelf: PropTypes.func.isRequired
  };

  state = {
    sortBy: 'title'
  };
  
  render() {
    
    const { title, books, onBookChangeShelf } = this.props;
    
    books.sort(sortBy(this.state.sortBy));
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  onBookChangeShelf={(shelf) => onBookChangeShelf({id : book.id}, shelf)}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BooksShelf