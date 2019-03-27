import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import StudentForm from './StudentFormComponent';
import { addStudent } from '../reducers/index';

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
      await axios.post('/api/students', this.state);
      this.props.addStudent(this.state);
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

const mapDispatchToProps = dispatch => ({
  addStudent: student => dispatch(addStudent(student)),
});

export default connect(
  null,
  mapDispatchToProps
)(CreateStudent);
