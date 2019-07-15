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
        <h1>Welcome to Aly's Coding Challenge!</h1>
        <Link to="/search">
          <p>Search Contacts</p>
        </Link>
        <Link to="/addcontact">
          <p>Add New Contact</p>
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
