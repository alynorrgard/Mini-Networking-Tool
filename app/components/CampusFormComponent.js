import React from 'react';

const CampusForm = props => (
  <form id="new-campus-form" onSubmit={props.handleSubmit}>
    <label htmlFor="name">
      Campus Name:
      {!props.name && <span className="warning">*Required Field</span>}
    </label>
    <input
      name="name"
      type="text"
      onChange={props.handleChange}
      value={props.name}
    />

    <label htmlFor="address">
      Campus Address:
      {!props.address && <span className="warning">*Required Field</span>}
    </label>
    <input
      name="address"
      type="text"
      onChange={props.handleChange}
      value={props.address}
    />

    <button
      type="submit"
      className="add"
      disabled={!props.name || !props.address}
    >
      ADD
    </button>
  </form>
);

export default CampusForm;
