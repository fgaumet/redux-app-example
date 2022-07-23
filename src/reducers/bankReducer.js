import { SET_BANK_INTEREST, SET_BANK_NAME, SET_BANK_AMOUNT, ADD_NEW_BANK } from '../actions/actionTypes';

const initialValues = {
  bank : {
    name: '',
    bank_interest: 0,
    amount: 0,
  },
  banks: [],
};

const bankReducer = (state = initialValues, action) => {
  console.log('action', action);
  switch (action.type) {
    case SET_BANK_NAME:
    case SET_BANK_INTEREST:
    case SET_BANK_AMOUNT:
      return {
        ...state,
        bank: {
          name: action.data.name,
          bank_interest: action.data.bank_interest,
          amount: action.data.amount,
        }
      };
    case ADD_NEW_BANK:
      return { ...state, banks: [ ...state.banks, action.data.bank ] };
    default:
      return state;
  }
};

export default bankReducer;
