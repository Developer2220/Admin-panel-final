import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SHOW_USERS_LOADING,
    DELETE_USER,
  } from '../constants/Users';
  
  export const fetchUsers = () => {
    return {
      type: FETCH_USERS,
    };
  };
  
  export const fetchUsersSuccess = (users) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
    };
  };
  
  export const fetchUsersFailure = (error) => {
    return {
      type: FETCH_USERS_FAILURE,
      payload: error,
    };
  };
  
  export const showUsersLoading = () => {
    return {
      type: SHOW_USERS_LOADING,
    };
  };

  export const deleteUser = (userId) => {
    return {
      type: DELETE_USER,
      payload: userId,
    };
  };
  