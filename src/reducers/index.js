import { combineReducers } from 'redux';
import booksReducer from './books';
import booksFilter from './filter';

const rootStore = combineReducers({
  books: booksReducer,
  filter: booksFilter,
});

export default rootStore;
