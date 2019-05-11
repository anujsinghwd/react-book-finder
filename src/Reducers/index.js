
import { combineReducers } from 'redux';
import bookReducer from './BookReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    books: bookReducer,
    errors: errorReducer
});