import { GOT_CAMPUSES, ADDED_CAMPUS, DELETED_CAMPUS } from './index';

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    case ADDED_CAMPUS:
      return [...state, action.campus];
    case DELETED_CAMPUS:
      return state.filter(campus => campus.id !== action.campusId);
    default:
      return state;
  }
};

export default campusesReducer;
