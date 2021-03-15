import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const $title = document.getElementById('title');

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const resetFormFields = () => {
    setTitle('');
    $title.value = '';
    $title.focus();
  };

  useEffect(() => {
    const $select = document.getElementById('category');
    setCategory($select.value);
  }, []);

  const handleChange = e => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createBook({ id: Math.floor(Math.random() * 9999), title, category });
    resetFormFields();
  };

  return (
    <div>
      <form action="">
        <label htmlFor="title">
          Title:
          <input id="title" type="text" onChange={handleChange} value={title} />
        </label>
        <label htmlFor="category">
          Category:
          <select id="category" onChange={handleChange}>
            {categories.map(cat => (
              <option value={cat} key={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createBook,
};

export default connect(undefined, mapDispatchToProps)(BooksForm);
