import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const mockUpBooks = [
  {
    id: Math.floor(Math.random() * 100),
    title: 'The old man and the sea',
    category: 'Kids',

  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'The knight in the rusty armor',
    category: 'Action',

  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Alive',
    category: 'Action',

  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'The Butterfly Effect',
    category: 'Sci-Fi',

  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Secret weapons of World War II',
    category: 'History',

  },
];

const booksReducer = (state = mockUpBooks, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter(book => book !== action.payload.id);

    default:
      return state;
  }
};

export default booksReducer;
