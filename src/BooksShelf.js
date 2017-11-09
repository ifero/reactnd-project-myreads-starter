import React, { Component } from 'react';
import sortBy from 'sort-by'
import Book from './Book'

class BooksShelf extends Component {
  
  state = {
    sortBy: 'title'
  }
  
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
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BooksShelf