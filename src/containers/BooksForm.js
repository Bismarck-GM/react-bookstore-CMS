import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  // Box,
  // HStack,
  Flex,
  // Divider,
  FormControl,
  Heading,
  Select,
  Input,
  Button,
} from '@chakra-ui/react';
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
    <Flex paddingX="5%" direction="column" justifyContent="space-around" minH="150px">
      <Heading fontSize="20px" letterSpacing="-0.18px" color="#888888" fontWeight="bold">ADD NEW BOOK</Heading>
      <FormControl action="" d="flex" justifyContent="space-between">
        <Input
          id="title"
          type="text"
          onChange={handleChange}
          value={title}
          placeholder="Book Title"
          bg="white"
          _placeholder={{ color: '#e8e8e8' }}
          fontFamily="Montserrat"
          w="60%"
        />
        <Select
          id="category"
          onChange={handleChange}
          bg="white"
          fontFamily="Montserrat"
          w="25%"
        >
          {categories.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </Select>
        <Button
          type="submit"
          onClick={handleSubmit}
          fontFamily="Roboto Slab"
          letterSpacing="0.5"
          bg="#0290ff"
          color="white"
          fontSize="13px"
          w="10%"
        >
          ADD BOOK
        </Button>
      </FormControl>
    </Flex>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createBook,
};

export default connect(undefined, mapDispatchToProps)(BooksForm);
