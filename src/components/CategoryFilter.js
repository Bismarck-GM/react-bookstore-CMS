import React from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem, MenuGroup } from '@chakra-ui/react';

export default function CategoryFilter({ clickHandler }) {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const changeHandle = e => {
    if (e.target.value === 'All') {
      clickHandler(categories.filter(cat => cat !== 'All'));
    } else {
      clickHandler([e.target.value]);
    }
  };
  return (
    <MenuList>
      <MenuGroup id="filter">
        {categories.map(cat => (
          <MenuItem value={cat} key={cat} onClick={changeHandle}>{cat}</MenuItem>
        ))}
      </MenuGroup>
    </MenuList>
  );
}

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
