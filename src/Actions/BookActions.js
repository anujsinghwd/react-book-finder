import axios from 'axios';

import {
  GET_BOOKS,
  GET_ERRORS,
  SET_LOADING,
  CLEAR_ERRORS
} from './types';

export const getBooks = postData => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${postData.txt}`)
    .then((res) =>{
        if(res.data.items.length > 0){
            dispatch({
                type: GET_BOOKS,
                payload: res.data
            })
        }else{
            dispatch({
                type: GET_ERRORS,
                payload: {err_mssg: 'no data found'}
            })
        }
        
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: {err_mssg: 'no data found'}
        })
    });
};

// Set loading state
export const setPostLoading = () => {
    return {
      type: SET_LOADING
    };
  };
  
  // Clear errors
  export const clearErrors = () => {
    return {
      type: CLEAR_ERRORS
    };
  };