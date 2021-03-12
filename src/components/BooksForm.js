import React from 'react';

export default function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form action="">
        <input type="text" />
        <input type="text" />
        <label htmlFor="category">
          Category:
          <select id="category">
            {categories.map(cat => (
              <option value={cat} key={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
