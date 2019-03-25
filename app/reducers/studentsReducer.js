import axios from 'axios';
import { gettingStudents } from './loadingReducer';

// ACTION TYPES
// const GETTING_STUDENTS = 'GETTING_STUDENTS';
const GOT_STUDENTS = 'GOT_STUDENTS';

// ACTION CREATORS
// export const gettingStudents = () => ({
//   type: GETTING_STUDENTS,
// });

export const gotStudents = studentsData => ({
  type: GOT_STUDENTS,
  studentsData,
});

// THUNK CREATORS -->> fetch data from server
export const getStudents = () => {
  return async dispatch => {
    dispatch(gettingStudents()); // sets loading state to 'true'
    const { data } = await axios.get('/api/students');
    dispatch(gotStudents(data));
  };
};

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    // case GETTING_STUDENTS:
    //   return { ...state, loading: true };
    case GOT_STUDENTS:
      return { ...state, loading: false, students: action.studentsData };
    default:
      return state;
  }
};

export default studentsReducer;
