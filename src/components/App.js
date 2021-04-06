import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  return (
    <Box bg="rgba(0, 0, 0, 0.05)" minH="100vh" d="flex" flexDirection="column" justifyContent="space-between">
      <NavBar />
      <BooksList />
      <BooksForm />
    </Box>
  );
}
