import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  return (
    <div>
      <Box w="100%" h="95px">
        <Heading
          fontFamily="Montserrat"
          fontSize="30px"
        >
          BookStore CMS
        </Heading>
        <ul>
          <li>Books</li>
          <li>Categories</li>
        </ul>
      </Box>
      <BooksForm />
      <BooksList />
    </div>
  );
}
