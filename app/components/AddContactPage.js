import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import { addContact, getUser } from '../reducers/index';

class AddContact extends React.Component {
  constructor() {
    super();
    this.initialState = {
      displayName: '',
      title: '',
      company: '',
      location: '',
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
  }

  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    try {
      const newContact = await axios.post('/api/contacts', this.state); // adds to database
      await this.props.addContact(newContact.data); // adds to state (allUsers)
      this.props.getUser(newContact.data.id); // adds to state (currentProfile)
    } catch (err) {
      console.error('ERROR creating new contact:', err);
    }
  }

  handleFormReset = () => {
    this.setState(() => this.initialState);
  };

  render() {
    return (
      <div>
        <ContactForm
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleFormReset={this.handleFormReset}
        />
        {this.props.currentProfile.id ? (
          <Link to={`/contacts/${this.props.currentProfile.id}`}>
            <p>View New Contact</p>
          </Link>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentProfile: state.currentProfile,
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
  getUser: userId => dispatch(getUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContact);
