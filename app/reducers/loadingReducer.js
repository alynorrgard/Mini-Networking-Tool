import { FETCHING_DATA, GOT_CAMPUSES, GOT_STUDENTS } from './index';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return true;
    case GOT_CAMPUSES:
      return false;
    case GOT_STUDENTS:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
