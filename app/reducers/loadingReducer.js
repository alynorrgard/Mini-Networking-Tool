import axios from 'axios';

// ACTION TYPES
const GETTING_CAMPUSES = 'GETTING_CAMPUSES';
const GETTING_STUDENTS = 'GETTING_STUDENTS';

// ACTION CREATORS
export const gettingCampuses = () => ({
  type: GETTING_CAMPUSES,
});

export const gettingStudents = () => ({
  type: GETTING_STUDENTS,
});

// // THUNK CREATORS -->> fetch data from server
// export const getCampuses = () => {
//   return async dispatch => {
//     dispatch(gettingCampuses()); // sets loading state to 'true'
//     const { data } = await axios.get('/api/campuses');
//     dispatch(gotCampuses(data));
//   };
// };

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case GETTING_CAMPUSES:
      return { ...state, loading: true };
    case GETTING_STUDENTS:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default loadingReducer;
