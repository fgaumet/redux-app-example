import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { setNameValue, addNameValue } from '../../../../actions';

const NameForm = ({ value, dispatch }) => {
  const handleChange = (e) => {
    dispatch(setNameValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNameValue(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Ingrese su nombre"
        onChange={handleChange}
        value={value}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

NameForm.propTypes = {
  value: string.isRequired,
};

export default connect((state) => ({ value: state.nameReducer.name }))(
  NameForm,
);
