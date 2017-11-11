import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentWillMount() {
    this.retrieveMyBooks();
  }

  updateBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then( () => {
      this.retrieveMyBooks();
    });
  }

  retrieveMyBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    
    const { books } = this.state;
    
    return (
      <div className="app">
      <Route exact path="/" render={() => 
        <ListBooks
          books={books}
          onBookChangeShelf={ (book, shelf) => this.updateBookShelf(book, shelf)}
        />
      }/>
      <Route path="/search" render={() =>
        <SearchBooks />
        }/>
      </div>
    )
  }
}

export default BooksApp
