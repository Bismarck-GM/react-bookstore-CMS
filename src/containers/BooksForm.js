import { useState, useEffect } from 'react';

export default function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const $title = document.getElementById('title');

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const resetFormFields = () => {
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
    // createBook({ id: Math.floor(Math.random() * 9999), title, category });
    console.log(title, category);
    setTitle('');
    resetFormFields();
  };

  return (
    <div>
      <form action="">
        <label htmlFor="title">
          Title:
          <input id="title" type="text" onChange={handleChange} />
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
}
