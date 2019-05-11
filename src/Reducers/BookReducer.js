import {
    GET_BOOKS,
    SET_LOADING,
    CLEAR_ERRORS
  } from '../Actions/types';
  
  const initialState = {
    books: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_LOADING:
      return {
        ...state,
        loading: true
      };
      case GET_BOOKS:
        return {
          ...state,
          books: action.payload,
          loading: false
        };
      default:
        return state;
    }
  }