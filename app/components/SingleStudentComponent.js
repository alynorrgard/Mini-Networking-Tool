import React from 'react';
import axios from 'axios';

class SingleStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      student: {},
    };
  }
  // whenever state changes it will trigger a re-render:
  async componentDidMount() {
    try {
      const selectedStudent = await axios.get(
        `/api/students/${this.props.match.params.studentId}`
      );
      console.log('STUDENT DATA:', selectedStudent.data);
      this.setState({
        student: selectedStudent.data,
      });
    } catch (err) {
      console.log('ERROR loading student data');
    }
  }

  render() {
    const student = this.state.student;
    console.log('STUDENT STATE:', student);
    return (
      <div>
        <div>
          <h2>
            {student.firstName} {student.lastName}
          </h2>
          <h4>{student.email}</h4>
          <img src={student.imageUrl} />
          <p>{student.gpa}</p>
          {student.campus ? (
            <p>{student.campus.name}</p>
          ) : (
            <p>This student is not yet enrolled at a campus!</p>
          )}
        </div>
      </div>
    );
  }
}

export default SingleStudent;
