import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { addContact } from '../reducers/index';

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
      this.props.addContact(newContact.data);
    } catch (err) {
      console.error('ERROR creating new contact:', err);
    }
  }

  render() {
    return (
      <ContactForm
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
});

export default connect(
  null,
  mapDispatchToProps
)(AddContact);
