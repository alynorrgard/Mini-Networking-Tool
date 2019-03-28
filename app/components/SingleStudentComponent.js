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
      <div className="student-page">
        <h2>
          {student.firstName} {student.lastName}
        </h2>
        <img src={student.imageUrl} className="student-image" />
        <p>EMAIL: {student.email}</p>
        <p>GPA: {student.gpa}</p>
        {student.campus ? (
          <div>
            <p>CAMPUS AFFILIATION:</p>
            <p className="single-page-link">
              <Link to={`/campuses/${student.campus.id}`}>
                {student.campus.name}
              </Link>
            </p>
          </div>
        ) : (
          <p>This student is not yet enrolled at a campus!</p>
        )}
      </div>
    );
  }
}

export default SingleStudent;
