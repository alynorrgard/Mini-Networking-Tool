import React from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../reducers/index';

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
        {students.map(student => {
          return (
            <div key={student.id}>
              <h2>
                {student.firstName} {student.lastName}
              </h2>
            </div>
          );
        })}
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
