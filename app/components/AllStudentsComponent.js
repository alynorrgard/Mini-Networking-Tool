import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStudents, addStudent } from '../reducers/index';
import CreateStudent from './CreateStudentComponent';

class AllStudents extends React.Component {
  // whenever state changes it will trigger a re-render:
  componentDidMount() {
    this.props.getStudents();
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
              <Link to={`/students/${student.id}`} key={student.id}>
                <h2>
                  {student.firstName} {student.lastName}
                </h2>
              </Link>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllStudents);
