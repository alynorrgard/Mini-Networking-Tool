import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../reducers/index';
import CreateRelationship from './CreateRelationship';
import CreatePet from './CreatePet';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: {},
    };
    this.gatherProfile = this.gatherProfile.bind(this);
  }

  componentDidMount() {
    this.gatherProfile();
  }

  async gatherProfile() {
    try {
      await this.props.getUser(this.props.match.params.userId);
      this.setState({
        profile: this.props.currentProfile,
      });
    } catch (err) {
      console.error('ERROR loading contact info:', err);
    }
  }

  render() {
    const contact = this.state.profile;

    return (
      <div>
        <h1>Display Name: {contact.displayName}</h1>
        <h3>Title: {contact.title}</h3>
        <div>Company: {contact.company}</div>
        <div>Location: {contact.location}</div>
        <div>
          Pets:
          {contact.pets
            ? contact.pets.map(pet => {
                return (
                  <div key={pet.id}>{`${pet.displayName} (${pet.type})`}</div>
                );
              })
            : null}
        </div>
        <div>Add Pet:</div>
        <CreatePet gatherProfile={this.gatherProfile} userId={contact.id} />
        <div>
          Relationships:
          {contact.relationships
            ? contact.relationships.map(relationship => {
                return (
                  <div key={relationship.relationshipId}>
                    <Link to={`/contacts/${relationship.relationshipId}`}>
                      <div>{relationship.type}</div>
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
        <div>Add Relationship:</div>
        <CreateRelationship gatherProfile={this.gatherProfile} />
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
)(Profile);
