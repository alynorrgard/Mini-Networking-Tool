import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers, clearState } from '../reducers/';

class Home extends React.Component {
  componentDidMount() {
    this.props.getAllUsers();
    this.props.clearState();
  }

  render() {
    return (
      <main>
        <h1 className="header">Welcome to Aly's Coding Challenge!</h1>
        <Link to="/search">
          <div className="button">Search Contacts</div>
        </Link>
        <Link to="/addcontact">
          <div className="button">Add New Contact</div>
        </Link>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers()),
  clearState: () => dispatch(clearState()),
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
