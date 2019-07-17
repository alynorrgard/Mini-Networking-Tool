import React from 'react';
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
      this.forceUpdate();
    } catch (err) {
      console.error('ERROR loading contact info:', err);
    }
  }

  async gatherNewProfile(userId) {
    try {
      await this.props.getUser(userId);
      this.setState({
        profile: this.props.currentProfile,
      });
      this.forceUpdate();
    } catch (err) {
      console.error('ERROR loading contact info:', err);
    }
  }

  render() {
    const contact = this.state.profile;

    return (
      <div id="profile-container">
        <div className="display-name">{contact.displayName}</div>
        <div className="category">Title:</div>
        <div className="response">{contact.title}</div>
        <div className="category">Company:</div>
        <div className="response">{contact.company}</div>
        <div className="category">Location:</div>
        <div className="response">{contact.location}</div>
        <div className="category">Pets:</div>
        <div className="response">
          {contact.pets
            ? contact.pets.map(pet => {
                return (
                  <div key={pet.id}>{`${pet.displayName} (${pet.type})`}</div>
                );
              })
            : null}
        </div>
        <div className="category">Relationships:</div>
        <div className="response">
          {contact.relationships
            ? contact.relationships.map(relationship => {
                return (
                  <div key={relationship.relationshipId}>
                    <Link to={`/contacts/${relationship.relationshipId}`}>
                      <button
                        type="button"
                        onClick={() =>
                          this.gatherNewProfile(relationship.relationshipId)
                        }
                        className="button"
                      >
                        {relationship.type}
                      </button>
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
        <div className="category">Add Pet:</div>
        <CreatePet gatherProfile={this.gatherProfile} userId={contact.id} />
        <div className="category">Add Relationship to Existing User:</div>
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
