import React from 'react';
import axios from 'axios';
import CampusForm from './CampusFormComponent';

const initialState = {
  name: '',
  address: '',
};

class CreateCampus extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const completedForm = await axios.post('/api/campuses', this.state);
      this.props.addCampus(completedForm.data);
      this.setState(initialState);
    } catch (err) {
      console.log('ERROR creating new campus');
    }
  }

  render() {
    return (
      <CampusForm
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default CreateCampus;
