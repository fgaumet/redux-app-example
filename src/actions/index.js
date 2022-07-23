import {
  SET_NAME_VALUE,
  ADD_NAME_VALUE,
  SET_BANK_NAME,
  SET_BANK_INTEREST,
  SET_BANK_AMOUNT,
  ADD_NEW_BANK,
} from './actionTypes';

export const setNameValue = (value) => {
  return {
    type: SET_NAME_VALUE,
    data: {
      value,
    },
  };
};

export const addNameValue = (value) => {
  return {
    type: ADD_NAME_VALUE,
    data: {
      value,
    },
  };
};

export const setBankName = (bank, value) => {
  return {
    type: SET_BANK_NAME,
    data: {
      name: value,
      bank_interest: bank.bank_interest || 0,
      amount: bank.amount || 0,
    },
  };
};

export const setBankInterest = (bank, value) => {
  return {
    type: SET_BANK_INTEREST,
    data: {
      name: bank.name || '',
      bank_interest: value,
      amount: bank.amount || 0,
    },
  };
};

export const setBankAmount = (bank, value) => {
  return {
    type: SET_BANK_AMOUNT,
    data: {
      name: bank.name || '',
      bank_interest: bank.bank_interest || 0,
      amount: value,
    },
  };
};

export const addNewBank = (bank) => {
  return {
    type: ADD_NEW_BANK,
    data: {
      bank
    },
  };
};