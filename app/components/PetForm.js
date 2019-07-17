import React from 'react';

const PetForm = props => (
  <form
    id="pet-form"
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

    <button
      type="submit"
      className="small-button"
      disabled={!props.displayName}
    >
      ADD
    </button>
  </form>
);

export default PetForm;
