import { GOT_STUDENTS, ADDED_STUDENT } from './index';

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students;
    case ADDED_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
};

export default studentsReducer;
