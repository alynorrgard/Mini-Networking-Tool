import axios from 'axios';

const initialState = {
  loading: false,
  campuses: [],
};

// ACTION TYPES
const GETTING_CAMPUSES = 'GETTING CAMPUSES';
const GOT_CAMPUSES = 'GOT_CAMPUSES';

// ACTION CREATORS
export const gettingCampuses = () => ({
  type: GETTING_CAMPUSES,
});

export const gotCampuses = campusesData => ({
  type: GOT_CAMPUSES,
  campusesData,
});

// THUNK CREATORS -->> fetch data from server
export const getCampuses = () => {
  return async dispatch => {
    dispatch(gettingCampuses()); // sets loading state to 'true'
    const { data } = await axios.get('/api/campuses');
    dispatch(gotCampuses(data));
  };
};

const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_CAMPUSES:
      return { ...state, loading: true };
    case GOT_CAMPUSES:
      return { ...state, loading: false, campuses: action.campusesData };
    default:
      return state;
  }
};

export default campusesReducer;
