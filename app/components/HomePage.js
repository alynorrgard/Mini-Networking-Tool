import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../reducers/';

class Home extends React.Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <main>
        <h1>Welcome to the Grapevine!</h1>
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
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
