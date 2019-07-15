import React from 'react';
import { Link } from 'react-router-dom';

const Profile = props => {
  const contact = props.contact;

  return (
    <div>
      <h1>Display Name: {contact.displayName}</h1>
      <h3>Title: {contact.title}</h3>
      <p>Company: {contact.company}</p>
      <p>Location: {contact.location}</p>
    </div>
  );
};

export default Profile;
