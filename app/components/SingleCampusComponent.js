import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingleCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      campus: {},
    };
    this.displayCampus = this.displayCampus.bind(this);
  }

  componentDidMount() {
    this.displayCampus();
  }

  async displayCampus() {
    try {
      const selectedCampus = await axios.get(
        `/api/campuses/${this.props.match.params.campusId}`
      );
      this.setState({
        campus: selectedCampus.data,
      });
    } catch (err) {
      console.log('ERROR loading campus data');
    }
  }

  render() {
    const campus = this.state.campus;
    console.log('SINGLE CAMPUS:', campus);
    return (
      <div className="campus-page">
        <div>
          <h1>{campus.name}</h1>
          <img src={campus.imageUrl} className="campus-image" />
          <h3>{campus.address}</h3>
          <p>{campus.description}</p>
        </div>
        <p>AFFILIATED STUDENTS:</p>
        {campus.students ? (
          campus.students.map(student => {
            return (
              <Link to={`/students/${student.id}`} key={student.id}>
                <p className="single-page-link">
                  {student.firstName} {student.lastName}
                </p>
              </Link>
            );
          })
        ) : (
          <p>This campus does not have any students yet!</p>
        )}
      </div>
    );
  }
}

export default SingleCampus;
