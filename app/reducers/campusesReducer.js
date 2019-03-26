import { GOT_CAMPUSES, ADDED_CAMPUS } from './index';

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    case ADDED_CAMPUS:
      return [...state, action.campus];
    default:
      return state;
  }
};

export default campusesReducer;
