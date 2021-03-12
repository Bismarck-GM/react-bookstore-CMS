import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';
import mockUpBooks from './index';

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
