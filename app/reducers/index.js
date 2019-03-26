// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';
import campusesReducer from './campusesReducer';
import studentsReducer from './studentsReducer';
import loadingReducer from './loadingReducer';

import axios from 'axios';

// ACTION TYPES
export const FETCHING_DATA = 'FETCHING_DATA';
export const GOT_CAMPUSES = 'GOT_CAMPUSES';
export const GOT_STUDENTS = 'GOT_STUDENTS';

// ACTION CREATORS
export const fetchingData = () => ({
  type: FETCHING_DATA,
});
export const gotCampuses = campuses => ({
  type: GOT_CAMPUSES,
  campuses,
});
export const gotStudents = students => ({
  type: GOT_STUDENTS,
  students,
});

// THUNK CREATORS -->> fetch data from server
export const getCampuses = () => {
  return async dispatch => {
    try {
      dispatch(fetchingData()); // sets loading state to 'true'
      const { data } = await axios.get('/api/campuses');
      dispatch(gotCampuses(data));
    } catch (err) {
      console.log('ERROR loading campus data...');
    }
  };
};
export const getStudents = () => {
  return async dispatch => {
    try {
      dispatch(fetchingData()); // sets loading state to 'true'
      const { data } = await axios.get('/api/students');
      dispatch(gotStudents(data));
    } catch (err) {
      console.log('ERROR loading student data...');
    }
  };
};

export default combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  loading: loadingReducer,
});
