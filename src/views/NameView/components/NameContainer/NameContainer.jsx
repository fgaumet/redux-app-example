import React from 'react';
import { string } from 'prop-types';
import './styles.css';
import { connect } from 'react-redux';

const NameContainer = ({ value }) => {
  return (
    <div className="name-container">
      <h4>{value}</h4>
    </div>
  );
};

NameContainer.propTypes = {
  value: string,
};

NameContainer.defaultProps = {
  value: '',
};

export default connect((state) => ({ value: state.nameReducer.name }))(
  NameContainer,
);
