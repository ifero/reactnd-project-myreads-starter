import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    onBookChangeShelf: PropTypes.func.isRequired
  };
    
  render () {
    
    const { books, onBookChangeShelf } = this.props;

    const readBooks = books.filter((book) => book.shelf === "read");
    const wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
    const currentlyReadingBooks = books.filter((book) => book.shelf === "currentlyReading");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BooksShelf
              title={"Currently Reading"}
              books={currentlyReadingBooks}
              onBookChangeShelf={(book, shelf) => onBookChangeShelf(book, shelf)}
            />
            <BooksShelf
              title={"Want to Read"}
              books={wantToReadBooks}
              onBookChangeShelf={(book, shelf) => onBookChangeShelf(book, shelf)}
            />
            <BooksShelf
              title={"Read"}
              books={readBooks}
              onBookChangeShelf={(book, shelf) => onBookChangeShelf(book, shelf)}
            />
          </div>
        </div>
        <div className="open-search">
          <Link 
            to="/search"
            className="open-search"
            >Add a book</Link>
        </div>
      </div>
    );
  }
  
}

export default ListBooks