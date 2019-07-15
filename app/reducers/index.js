import axios from 'axios';

// ACTION TYPES
const GOT_USERS = 'GOT_USERS';
const ADDED_CONTACT = 'ADDED_CONTACT';
const FETCHING_DATA = 'FETCHING_DATA';
const DISPLAY_PROFILE = 'DISPLAY_PROFILE';
const CLEAR_STATE = 'CLEAR_STATE';
const GOT_RESULTS = 'GOT_RESULTS';

// ACTION CREATORS
export const gotAllUsers = allUsers => ({
  type: GOT_USERS,
  allUsers,
});
export const addedContact = contact => ({
  type: ADDED_CONTACT,
  contact,
});
export const fetchingData = () => ({
  type: FETCHING_DATA,
});
export const displayProfile = user => ({
  type: DISPLAY_PROFILE,
  user,
});
export const clearState = () => ({
  type: CLEAR_STATE,
});
export const gotResults = results => ({
  type: GOT_RESULTS,
  results,
});

// THUNK CREATORS -->> fetch data from server
export const getAllUsers = () => {
  return async dispatch => {
    try {
      dispatch(fetchingData());
      const { data } = await axios.get('/api/contacts');
      dispatch(gotAllUsers(data));
    } catch (err) {
      console.error(err);
    }
  };
};
export const addContact = contact => {
  return dispatch => {
    try {
      dispatch(addedContact(contact));
    } catch (err) {
      console.error(err);
    }
  };
};
export const getUser = userId => {
  return async dispatch => {
    try {
      dispatch(fetchingData());
      const { data } = await axios.get(`/api/contacts/${userId}`);
      dispatch(displayProfile(data));
    } catch (err) {
      console.error(err);
    }
  };
};
export const getResults = keywords => {
  return async dispatch => {
    try {
      dispatch(fetchingData());
      const { data } = await axios.get(`/api/search/${keywords}`);
      dispatch(gotResults(data));
    } catch (err) {
      console.error(err);
    }
  };
};

// REDUCER
const initialState = {
  allUsers: [],
  currentProfile: {},
  searchResults: [],
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_USERS:
      return { ...state, allUsers: action.allUsers, loading: false };
    case ADDED_CONTACT:
      return { ...state, allUsers: [...state.allUsers, action.contact] };
    case DISPLAY_PROFILE:
      return { ...state, currentProfile: action.user, loading: false };
    case GOT_RESULTS:
      return { ...state, searchResults: action.results, loading: false };
    case FETCHING_DATA:
      return { ...state, loading: true };
    case CLEAR_STATE:
      return {
        ...state,
        currentProfile: initialState.currentProfile,
        searchResults: initialState.searchResults,
      };
    default:
      return state;
  }
};

export default rootReducer;
