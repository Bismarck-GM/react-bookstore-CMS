import React from 'react';
import NavBar from './NavBar';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  return (
    <div>
      <NavBar />
      <BooksForm />
      <BooksList />
    </div>
  );
}
