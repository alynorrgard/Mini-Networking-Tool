import React from 'react';

const StudentForm = props => (
  <form id="new-student-form" onSubmit={props.handleSubmit}>
    <label htmlFor="firstName">
      First Name:
      {!props.firstName && (
        <span className="warning">Please fill out First Name</span>
      )}
    </label>
    <input
      name="firstName"
      type="text"
      onChange={props.handleChange}
      value={props.firstName}
    />

    <label htmlFor="lastName">
      Last Name:
      {!props.lastName && (
        <span className="warning">Please fill out Last Name</span>
      )}
    </label>
    <input
      name="lastName"
      type="text"
      onChange={props.handleChange}
      value={props.lastName}
    />

    <label htmlFor="email">
      Email:
      {!props.email && <span className="warning">Please fill out Email</span>}
    </label>
    <input
      name="email"
      type="text"
      onChange={props.handleChange}
      value={props.email}
    />

    <button
      type="submit"
      disabled={!props.firstName || !props.lastName || !props.email}
    >
      Submit
    </button>
  </form>
);

export default StudentForm;
