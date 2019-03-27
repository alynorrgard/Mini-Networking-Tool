import React from 'react';
import axios from 'axios';
import StudentForm from './StudentFormComponent';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

class CreateStudent extends React.Component {
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
      const completedForm = await axios.post('/api/students', this.state);
      console.log('HANDLESUBMIT PROPS:', this.props);
      this.props.addStudent(completedForm.data);
      this.setState(initialState);
    } catch (err) {
      console.log('ERROR creating new student');
    }
  }

  render() {
    return (
      <StudentForm
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default CreateStudent;
