import React from 'react';
import {
  Flex,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  // MenuList,
  // MenuItem,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions';

const NavBar = ({ filter, changeFilter }) => {
  const handleFilterChange = filter => {
    changeFilter(filter);
    console.log(filter);
  };
  const selectValue = filter.length > 1 ? 'All' : filter[0];
  return (
    <Flex w="100%" h="95px" align="center" fontFamily="Montserrat" paddingX="5%" borderBottom="1px" borderBottomColor="#e8e8e8" bg="white">
      <Flex w="50%">
        <Heading
          fontSize="30px"
          color="#0290ff"
          marginRight="40px"
          fontWeight="bold"
        >
          Bookstore CMS
        </Heading>
        <Flex fontSize="13px">
          <Menu>
            <MenuButton
              letterSpacing="1.9px"
              marginRight="20px"
              fontWeight="700"
              paddingTop="5px"
              cursor="default"
            >
              BOOKS
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              letterSpacing="1.9px"
              paddingTop="5px"
            >
              {`CATEGORIES > ${selectValue}`}
            </MenuButton>
            <CategoryFilter filter={filter} clickHandler={handleFilterChange} />
          </Menu>
        </Flex>
      </Flex>
      <Flex w="50%" justify="flex-end">
        <Avatar />
      </Flex>
    </Flex>
  );
};

NavBar.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatch = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatch)(NavBar);
