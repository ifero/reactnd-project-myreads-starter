import React from 'react'
import PropTypes from 'prop-types'

const BookShelfChanger = (props) => {

  return (
    <div className="book-shelf-changer">
      <select
        value={props.currentShelf}
        onChange={ (e) => { props.onBookChangeShelf(e.target.value); } }
      >
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger

BookShelfChanger.PropTypes = {
  currentShelf: PropTypes.string.isRequired,
  onBookChangeShelf: PropTypes.func.isRequired
};