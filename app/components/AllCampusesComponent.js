import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCampuses } from '../reducers/index';

class AllCampuses extends React.Component {
  // whenever state changes it will trigger a re-render:
  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    console.log('props:', this.props);
    const { campuses, loading } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <div>
        {campuses.map(campus => {
          return (
            <Link to={`/campuses/${campus.id}`} key={campus.id}>
              <img src={campus.imageUrl} />
              <h2>{campus.name}</h2>
            </Link>
          );
        })}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
