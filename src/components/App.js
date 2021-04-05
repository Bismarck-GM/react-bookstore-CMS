import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  return (
    <div>
      <Flex w="100%" h="95px" align="center">
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
      </Flex>
      <BooksForm />
      <BooksList />
    </div>
  );
}
