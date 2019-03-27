import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStudents, addStudent, deleteStudent } from '../reducers/index';
import CreateStudent from './CreateStudentComponent';
import axios from 'axios';

class AllStudents extends React.Component {
  constructor() {
    super();
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
  }
  // whenever state changes it will trigger a re-render:
  componentDidMount() {
    this.props.getStudents();
  }

  async handleDeleteStudent(studentId) {
    await axios.delete(`api/students/${studentId}`);
    this.props.deleteStudent(studentId);
  }

  render() {
    console.log('props:', this.props);
    const { students, loading } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <div>
        <div>
          {students.map(student => {
            return (
              <div key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <h2>
                    {student.firstName} {student.lastName}
                  </h2>
                </Link>
                <button
                  type="button"
                  onClick={() => this.handleDeleteStudent(student.id)}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <CreateStudent addStudent={addStudent} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  students: state.students,
});

const mapDispatchToProps = dispatch => ({
  getStudents: () => dispatch(getStudents()),
  deleteStudent: studentId => dispatch(deleteStudent(studentId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
