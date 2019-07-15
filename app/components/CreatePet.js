import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../reducers/index';
import PetForm from './PetForm';

class CreatePet extends React.Component {
  constructor() {
    super();
    this.initialState = {
      displayName: '',
      type: '',
    };
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormReset = this.handleFormReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post('/api/pets', {
        displayName: this.state.displayName,
        type: this.state.type,
        userId: this.props.userId,
      });
      await this.props.gatherProfile();
      this.handleFormReset();
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
        <PetForm
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentProfile: state.currentProfile,
});

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(getUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePet);
