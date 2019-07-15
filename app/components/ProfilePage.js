import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: {},
    };
    this.displayContact = this.displayContact.bind(this);
  }

  componentDidMount() {
    this.displayContact();
  }

  async displayContact() {
    try {
      const selectedContact = await axios.get(
        `/api/${this.props.match.params.userId}`
      );
      this.setState({
        contact: selectedContact.data,
      });
    } catch (err) {
      console.error('ERROR loading contact info:', err);
    }
  }

  render() {
    const contact = this.state.contact;

    return (
      <div>
        <h1>{contact.displayName}</h1>
        <h3>{contact.title}</h3>
        <p>{contact.company}</p>
        <p>{contact.location}</p>
      </div>
    );
  }
}

export default Profile;
