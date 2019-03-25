// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';
import campusesReducer from './campusesReducer';
import studentsReducer from './studentsReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  loading: loadingReducer,
});
