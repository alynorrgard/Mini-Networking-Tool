import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SingleCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      campus: {},
    };
  }
  // whenever state changes it will trigger a re-render:
  async componentDidMount() {
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
    return (
      <div className="campus-page">
        <div>
          <h1>{campus.name}</h1>
          <img src={campus.imageUrl} className="campus-image" />
          <h3>{campus.address}</h3>
          <p>{campus.description}</p>
        </div>
        {campus.students ? (
          <div>
            <p>AFFILIATED STUDENTS:</p>
            {campus.students.map(student => {
              return (
                <p className="single-page-link" key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                </p>
              );
            })}
          </div>
        ) : (
          <p>This campus does not have any students yet!</p>
        )}
      </div>
    );
  }
}

export default SingleCampus;
