import React from 'react';
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

const Book = (props) => {

  return (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})`}}></div>
      <BookShelfChanger
        currentShelf={props.book.shelf}
        onBookChangeShelf={(shelf) => props.onBookChangeShelf(shelf) }/>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors}</div>
  </div>
)}

export default Book

Book.PropTypes = {
  book: PropTypes.object,
  onBookChangeShelf: PropTypes.func.isRequired
}