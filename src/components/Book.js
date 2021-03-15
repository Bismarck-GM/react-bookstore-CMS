import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, clickHandler }) {
  const removeBook = () => {
    clickHandler(book);
  };

  return (
    <tr>
      <td>
        {book.id}
      </td>
      <td>
        {book.title}
      </td>
      <td>
        {book.category}
      </td>
      <td>
        <button onClick={removeBook} type="button">x</button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    category: PropTypes.string,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};
