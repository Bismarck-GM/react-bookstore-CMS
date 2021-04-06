import React from 'react';
import PropTypes from 'prop-types';
import { VStack, Divider } from '@chakra-ui/react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({
  books,
  removeBook,
  filter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const filteredBooks = filter.length > 1 || filter[0] === 'All' ? books : books.filter(
    book => book.category === filter[0],
  );

  return (
    <VStack paddingX="5%" spacing={5} marginTop="50px">
      {filteredBooks.map(book => (
        <Book book={book} key={book.id} clickHandler={handleRemoveBook} />
      ))}
      <Divider mt="20px" mb="20px" h="2px" bg="#e8e8e8" />
    </VStack>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatch = {
  removeBook,
};

export default connect(mapStateToProps, mapDispatch)(BooksList);
