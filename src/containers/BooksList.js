import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> ID </th>
            <th> Title </th>
            <th> Category </th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (<Book book={book} key={book.id} clickHandler={handleRemoveBook} />))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatch = {
  removeBook,
};

export default connect(mapStateToProps, mapDispatch)(BooksList);
