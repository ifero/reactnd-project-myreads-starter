import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

  static propTypes = {
    myBooks: PropTypes.arrayOf(PropTypes.object),
    onBookChangeShelf: PropTypes.func.isRequired
  }

  state = {
    books: [],
    query: ''
  };


  updateQuery = (query) => {
    this.setState({query: query});
    if (query) {
      BooksAPI.search(query, 20)
        .then(books => {
            this.setState({books});
          }
        );
    }
    else {
      this.setState({ books: [] });
    }
  };

  render() {

    const { books, query } = this.state;
    const { myBooks, onBookChangeShelf } = this.props;

    const showingBooks = books && books.constructor === Array && books.map(book => {
      let index = myBooks.findIndex(elem => elem.id === book.id);
      if (index !== -1) {
        book.shelf = myBooks[index].shelf
      }
      return book;
    });

    return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text"
                 placeholder="Search by Title or Author"
                 value={query}
                 onChange={e => this.updateQuery(e.target.value)}

          />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { showingBooks && showingBooks.constructor === Array && showingBooks.map(book => {
            return (
              <li key={book.id}>
                <Book
                  book={book}
                  onBookChangeShelf={(shelf) => {onBookChangeShelf({id: book.id}, shelf)}}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
    );
  }
}

export default SearchBooks