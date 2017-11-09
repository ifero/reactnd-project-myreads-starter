import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelfChanger from './BookShelfChanger'
import BooksShelf from './BooksShelf'

class ListBooks extends Component {
    
  render () {
    
    const { books, onChangeBookShelf } = this.props;
    
    let readBooks, wantToReadBooks, currentlyReadingBooks;
    readBooks = books.filter((book) => book.shelf === "read");
    wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
    currentlyReadingBooks = books.filter((book) => book.shelf === "currentlyReading");  
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BooksShelf title={"Currently Reading"} books={currentlyReadingBooks} />
            <BooksShelf title={"Want to Read"} books={wantToReadBooks} />
            <BooksShelf title={"Read"} books={readBooks} />
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