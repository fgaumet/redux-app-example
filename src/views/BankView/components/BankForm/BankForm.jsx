import React from 'react';
import { node } from 'prop-types';
import { connect } from 'react-redux';
import { setBankName, setBankInterest, setBankAmount, addNewBank } from '../../../../actions';
import './styles.css';

const BankForm = ({ bank, dispatch }) => {
  const { name, bank_interest, amount } = bank;

  console.log('name', name);
  console.log('bankForm', bank);

  const handleChange = (e) => {
    console.log('entre', e.target.value);
    dispatch(setBankName(bank, e.target.value));
  };

  const handleChangeInterest = (e) => {
    dispatch(setBankInterest(bank, e.target.value));
  };

  const handleChangeAmount = (e) => {
    dispatch(setBankAmount(bank, e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBank(bank));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del banco: <input onChange={handleChange} value={name} />
      </label>
      <label>
        Dinero depositado: <input type="number" onChange={handleChangeAmount} value={amount} />
      </label>
      <label>
        Interés que da el plazo: <input type="number" onChange={handleChangeInterest} value={bank_interest} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

BankForm.propTypes = {
  bank: node.isRequired,
};

export default connect((state) => ({ bank: state.bankReducer.bank }))(
  BankForm,
);
