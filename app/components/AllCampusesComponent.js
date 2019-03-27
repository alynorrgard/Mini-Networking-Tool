import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCampuses, deleteCampus } from '../reducers/index';
import CreateCampus from './CreateCampusComponent';
import axios from 'axios';

class AllCampuses extends React.Component {
  constructor() {
    super();
    this.handleDeleteCampus = this.handleDeleteCampus.bind(this);
  }
  // whenever state changes it will trigger a re-render:
  componentDidMount() {
    this.props.getCampuses();
  }

  async handleDeleteCampus(campusId) {
    await axios.delete(`api/campuses/${campusId}`);
    this.props.deleteCampus(campusId);
  }

  render() {
    console.log('props:', this.props);
    const { campuses, loading } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <div>
        <div>
          {campuses.map(campus => {
            return (
              <div key={campus.name}>
                <Link to={`/campuses/${campus.id}`}>
                  <img src={campus.imageUrl} />
                  <h2>{campus.name}</h2>
                </Link>
                <button
                  type="button"
                  onClick={() => this.handleDeleteCampus(campus.id)}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <CreateCampus />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  campuses: state.campuses,
});

const mapDispatchToProps = dispatch => ({
  getCampuses: () => dispatch(getCampuses()),
  deleteCampus: campusId => dispatch(deleteCampus(campusId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
