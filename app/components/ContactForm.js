import React from 'react';

const ContactForm = props => (
  <form
    id="contact-form"
    onSubmit={props.handleSubmit}
    onReset={props.handleFormReset}
  >
    <label htmlFor="displayName">
      Display Name:
      {!props.displayName && <span className="warning">*Required Field</span>}
    </label>
    <input
      name="displayName"
      type="text"
      onChange={props.handleChange}
      value={props.displayName}
    />

    <label htmlFor="title">Title:</label>
    <input
      name="title"
      type="text"
      onChange={props.handleChange}
      value={props.title}
    />

    <label htmlFor="company">Company:</label>
    <input
      name="company"
      type="text"
      onChange={props.handleChange}
      value={props.company}
    />

    <label htmlFor="location">Location:</label>
    <input
      name="location"
      type="text"
      onChange={props.handleChange}
      value={props.location}
    />

    <button type="submit" className="button" disabled={!props.displayName}>
      ADD
    </button>
  </form>
);

export default ContactForm;
