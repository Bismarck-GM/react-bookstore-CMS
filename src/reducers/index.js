<<<<<<< HEAD
const mockUpBooks = [
  {
    id: Math.floor(Math.random() * 9999),
    title: 'The old man and the sea',
    category: 'Kids',

  },
  {
    id: Math.floor(Math.random() * 9999),
    title: 'The knight in the rusty armor',
    category: 'Action',

  },
  {
    id: Math.floor(Math.random() * 9999),
    title: 'Alive',
    category: 'Action',

  },
  {
    id: Math.floor(Math.random() * 9999),
    title: 'The Butterfly Effect',
    category: 'Sci-Fi',

  },
  {
    id: Math.floor(Math.random() * 9999),
    title: 'Secret weapons of World War II',
    category: 'History',

  },
];

export default mockUpBooks;
=======
import { combineReducers } from 'redux';
import booksReducer from './books';

export default combineReducers({
  booksReducer,
});
>>>>>>> 23087777503a514f85eff6ee03d2fe0425cd6b96
