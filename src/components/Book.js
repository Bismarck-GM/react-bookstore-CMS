import React from 'react';

export default function Book(props) {
  const book = props;
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
    </tr>
  );
}
