import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CampusForm from './CampusFormComponent';
import { addCampus, getCampuses } from '../reducers/index';

class CreateCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
    };
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
      const newCampus = await axios.post('/api/campuses', this.state);
      this.props.addCampus(newCampus.data);
      this.props.getCampuses();
    } catch (err) {
      console.error('ERROR creating new campus:', err);
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

const mapDispatchToProps = dispatch => ({
  addCampus: campus => dispatch(addCampus(campus)),
  getCampuses: () => dispatch(getCampuses()),
});

export default connect(
  null,
  mapDispatchToProps
)(CreateCampus);
