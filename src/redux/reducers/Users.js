import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SHOW_USERS_LOADING,
    DELETE_USER,
  } from '../constants/Users';
  
  const initState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const users = (state = initState, action) => {
    switch (action.type) {
      case FETCH_USERS:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case SHOW_USERS_LOADING:
        return {
          ...state,
          loading: true,
        };
        case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
      default:
        return state;
    }
  };
  
  export default users;
  
