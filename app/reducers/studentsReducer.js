import { GOT_STUDENTS, ADDED_STUDENT, DELETED_STUDENT } from './index';

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students;
    case ADDED_STUDENT:
      return [...state, action.student];
    case DELETED_STUDENT:
      return state.filter(student => student.id !== action.studentId);
    default:
      return state;
  }
};

export default studentsReducer;
