import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
          <img src={student.imageUrl} className="student-image" />
          <p>{student.gpa}</p>
          {student.campus ? (
            <Link to={`/campuses/${student.campus.id}`}>
              {student.campus.name}
            </Link>
          ) : (
            <p>This student is not yet enrolled at a campus!</p>
          )}
        </div>
      </div>
    );
  }
}

export default SingleStudent;
