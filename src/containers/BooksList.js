import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books,
  removeBook,
  filter,
  changeFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  const filteredBooks = filter.length > 1 || filter[0] === 'All' ? books : books.filter(
    book => book.category === filter[0],
  );
  console.log(filter === 'All');

  return (
    <div>
      <CategoryFilter filter={filter} clickHandler={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th> ID </th>
            <th> Title </th>
            <th> Category </th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <Book book={book} key={book.id} clickHandler={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatch = {
  removeBook,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(BooksList);
