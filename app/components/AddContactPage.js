import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { addContact, getUser } from '../reducers/index';
import Loading from './LoadingPage';
import Profile from './ProfilePage';

class AddContact extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      title: '',
      company: '',
      location: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const newContact = await axios.post('/api/contacts', this.state);
      await this.props.addContact(newContact.data);
      this.props.getUser(newContact.data.id);
    } catch (err) {
      console.error('ERROR creating new contact:', err);
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else if (this.props.currentProfile.displayName) {
      return <Profile contact={this.props.currentProfile} />;
    } else {
      return (
        <ContactForm
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }
}

const mapStateToProps = state => ({
  currentProfile: state.currentProfile,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
  getUser: userId => dispatch(getUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact);
