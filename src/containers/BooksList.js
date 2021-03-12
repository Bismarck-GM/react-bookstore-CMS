import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
        {books.map(book => (<Book book={book} key={book.id} />))}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  books: state,
});

export default connect(mapStateToProps)(BooksList);
