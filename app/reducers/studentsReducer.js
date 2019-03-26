import { GOT_STUDENTS } from './index';

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

export default studentsReducer;
