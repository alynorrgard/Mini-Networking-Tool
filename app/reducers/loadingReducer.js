import {
  GETTING_CAMPUSES,
  GETTING_STUDENTS,
  GOT_CAMPUSES,
  GOT_STUDENTS,
} from './index';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case GETTING_CAMPUSES:
      return true;
    case GOT_CAMPUSES:
      return false;
    case GETTING_STUDENTS:
      return true;
    case GOT_STUDENTS:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
