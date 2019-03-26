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
      <div>
        <div>
          <h2>{campus.name}</h2>
          <img src={campus.imageUrl} />
          <h4>{campus.address}</h4>
          <p>{campus.description}</p>
        </div>
        {campus.students ? (
          campus.students.map(student => {
            return (
              <Link to={`/students/${student.id}`} key={student.id}>
                <h4>
                  {student.firstName} {student.lastName}
                </h4>
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
