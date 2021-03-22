import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryFilter({ clickHandler, filter }) {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const changeHandle = e => {
    if (e.target.value === 'All') {
      clickHandler(categories.filter(cat => cat !== 'All'));
    } else {
      clickHandler([e.target.value]);
    }
  };
  const selectValue = filter.length > 1 ? 'All' : filter[0];
  return (
    <div>
      Filter:
      <select id="filter" value={selectValue} onChange={changeHandle}>
        {categories.map(cat => (
          <option value={cat} key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};
