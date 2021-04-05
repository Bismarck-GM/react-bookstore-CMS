import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  HStack,
  VStack,
  Divider,
  Container,
} from '@chakra-ui/react';

export default function Book({ book, clickHandler }) {
  const removeBook = () => {
    clickHandler(book);
  };

  return (
    <Container maxWidth="100%" bg="white" border="1px" borderColor="#e8e8e8" borderRadius="5px" padding="20px">
      <Container>
        <VStack>
          <Box fontSize="14px" color="#999999" fontWeight="bold">
            {book.category}
          </Box>
          <Box fontFamily="Roboto Slab" fontSize="22px" color="#121212" fontWeight="bold">
            {book.title}
          </Box>
          <Box color="#4386bf" fontFamily="Roboto Slab" fontSize="14px" fontWeight="light">
            Some Author
          </Box>

          <HStack color="#4386bf">
            <Box>Comments</Box>
            <Divider orientation="vertical" />
            <Box onClick={removeBook}>Remove</Box>
            <Divider orientation="vertical" />
            <Box>Edit</Box>
          </HStack>
        </VStack>
      </Container>
    </Container>
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
