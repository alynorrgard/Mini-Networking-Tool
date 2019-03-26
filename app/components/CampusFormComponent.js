import React from 'react';

const CampusForm = props => (
  <form id="new-campus-form" onSubmit={props.handleSubmit}>
    <label htmlFor="campusName">
      Campus Name:
      {!props.campusName && (
        <span className="warning">Please fill out Campus Name</span>
      )}
    </label>
    <input
      name="campusName"
      type="text"
      onChange={props.handleChange}
      value={props.campusName}
    />

    <label htmlFor="campusAddress">
      Campus Address:
      {!props.campusAddress && (
        <span className="warning">Please fill out Campus Address</span>
      )}
    </label>
    <input
      name="campusAddress"
      type="text"
      onChange={props.handleChange}
      value={props.campusAddress}
    />

    <button type="submit" disabled={!props.campusName || !props.campusAddress}>
      Submit
    </button>
  </form>
);

export default CampusForm;
