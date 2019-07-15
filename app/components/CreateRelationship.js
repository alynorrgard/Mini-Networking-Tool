import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../reducers/index';
import RelationshipForm from './RelationshipForm';

class CreateRelationship extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      type: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createRelationships = this.createRelationships.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const relationshipEntity = await axios.get(
        `/api/id/${this.state.displayName}`
      );
      const relationshipId = relationshipEntity.data.id;
      await this.createRelationships(relationshipId);
      document.forms['relationship-form'].reset();
      await this.props.gatherProfile();
    } catch (err) {
      console.error('ERROR creating new contact:', err);
    }
  }

  async createRelationships(relationshipId) {
    const relations = {
      Boyfriend: 'Girlfriend',
      Girlfriend: 'Boyfriend',
      Husband: 'Wife',
      Wife: 'Husband',
      Mom: 'Child',
      Dad: 'Child',
    };

    await axios.post('/api/relationships', {
      type: this.state.type,
      userId: this.props.currentProfile.id,
      relationshipId: relationshipId,
    });
    // Create reverse relationship
    await axios.post('/api/relationships', {
      type: relations[this.state.type],
      userId: relationshipId,
      relationshipId: this.props.currentProfile.id,
    });
  }

  render() {
    return (
      <div>
        <RelationshipForm
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
)(CreateRelationship);
