import { GOT_CAMPUSES } from './index';

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

export default campusesReducer;
