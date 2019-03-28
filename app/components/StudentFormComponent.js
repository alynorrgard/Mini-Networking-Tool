import React from 'react';

const StudentForm = props => (
  <form id="new-student-form" onSubmit={props.handleSubmit}>
    <label htmlFor="firstName">
      First Name:
      {!props.firstName && <span className="warning">*Required Field</span>}
    </label>
    <input
      name="firstName"
      type="text"
      onChange={props.handleChange}
      value={props.firstName}
    />

    <label htmlFor="lastName">
      Last Name:
      {!props.lastName && <span className="warning">*Required Field</span>}
    </label>
    <input
      name="lastName"
      type="text"
      onChange={props.handleChange}
      value={props.lastName}
    />

    <label htmlFor="email">
      Email:
      {!props.email && <span className="warning">*Required Field</span>}
    </label>
    <input
      name="email"
      type="text"
      onChange={props.handleChange}
      value={props.email}
    />

    <button
      type="submit"
      className="add"
      disabled={!props.firstName || !props.lastName || !props.email}
    >
      ADD
    </button>
  </form>
);

export default StudentForm;
