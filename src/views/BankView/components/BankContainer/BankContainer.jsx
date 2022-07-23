import React from 'react';
import { node } from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';

const BankContainer = ({ bank }) => {
  console.log('bank', bank, '\n\n\n');
  if (bank) {
    return (
      <div className="bank-container">
        <h2>Nombre del banco: {bank.name}</h2>
        <h3>Monto depositado: {bank.amount}</h3>
        <h4>Interés que da el plazo: {bank.bank_interest}</h4>
      </div>
    )
  }
  return null;
};

BankContainer.propTypes = {
  bank: node,
};

BankContainer.defaultProps = {
  bank: null,
};

export default connect((state) => ({ bank: state.bankReducer.bank }))(
  BankContainer,
);
