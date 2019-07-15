import React from 'react';

const RelationshipForm = props => (
  <form id="relationship-form" onSubmit={props.handleSubmit}>
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

    <label htmlFor="type">
      Type:
      {!props.type && <span className="warning">*Required Field</span>}
    </label>
    <input
      name="type"
      type="text"
      onChange={props.handleChange}
      value={props.type}
    />

    <button type="submit" className="add" disabled={!props.displayName}>
      ADD
    </button>
  </form>
);

export default RelationshipForm;
