import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCampuses, deleteCampus } from '../reducers/index';
import CreateCampus from './CreateCampusComponent';
import LoadingPage from './LoadingPage';
import axios from 'axios';

class AllCampuses extends React.Component {
  constructor() {
    super();
    this.handleDeleteCampus = this.handleDeleteCampus.bind(this);
  }

  componentDidMount() {
    this.props.getCampuses();
  }

  async handleDeleteCampus(campusId) {
    try {
      await axios.delete(`api/campuses/${campusId}`);
      this.props.deleteCampus(campusId);
    } catch (err) {
      console.error('ERROR deleting campus:', err);
    }
  }

  render() {
    const { campuses, loading } = this.props;
    if (loading) return <LoadingPage />;
    return (
      <div id="all-campuses">
        <h1>Visit Our Campuses:</h1>
        <div id="campus-rows">
          {campuses.map(campus => {
            return (
              <div key={campus.id} className="campus-container">
                <Link to={`/campuses/${campus.id}`}>
                  <img className="campus-image" src={campus.imageUrl} />
                  <h2>{campus.name}</h2>
                </Link>
                <button
                  type="button"
                  className="remove"
                  onClick={() => this.handleDeleteCampus(campus.id)}
                >
                  REMOVE
                </button>
              </div>
            );
          })}
        </div>
        <div id="campus-form">
          <h3>Add a Campus:</h3>
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
