import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCampuses, addCampus } from '../reducers/index';
import CreateCampus from './CreateCampusComponent';

class AllCampuses extends React.Component {
  // whenever state changes it will trigger a re-render:
  componentDidMount() {
    console.log('MOUNTED - ');
    this.props.getCampuses();
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
              <Link to={`/campuses/${campus.id}`} key={campus.id}>
                <img src={campus.imageUrl} />
                <h2>{campus.name}</h2>
              </Link>
            );
          })}
        </div>
        <div>
          <CreateCampus addCampus={addCampus} />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
