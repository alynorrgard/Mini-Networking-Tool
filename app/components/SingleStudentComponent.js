import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingleStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      student: {},
    };
    this.displayStudent = this.displayStudent.bind(this);
  }

  componentDidMount() {
    this.displayStudent();
  }

  async displayStudent() {
    try {
      const selectedStudent = await axios.get(
        `/api/students/${this.props.match.params.studentId}`
      );
      this.setState({
        student: selectedStudent.data,
      });
    } catch (err) {
      console.log('ERROR loading student data');
    }
  }

  render() {
    const student = this.state.student;
    return (
      <div className="student-page">
        <h2>
          {student.firstName} {student.lastName}
        </h2>
        <img src={student.imageUrl} className="student-image" />
        <p>EMAIL: {student.email}</p>
        <p>GPA: {student.gpa}</p>
        <p>CAMPUS AFFILIATION:</p>
        {student.campus ? (
          <div>
            <Link to={`/campuses/${student.campus.id}`}>
              <p className="single-page-link">{student.campus.name}</p>
            </Link>
          </div>
        ) : (
          <p>This student is not yet enrolled at a campus!</p>
        )}
      </div>
    );
  }
}

export default SingleStudent;
