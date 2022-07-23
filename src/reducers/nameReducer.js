import { SET_NAME_VALUE, ADD_NAME_VALUE } from '../actions/actionTypes';

const initialValues = {
  name: '',
  names: ['Peter Parker', 'Harry Osborn', 'Miles Morales'],
};

const nameReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_NAME_VALUE:
      return { ...state, name: action.data.value };
    case ADD_NAME_VALUE: 
      // let { names } = state;
      // names.push(action.data.value);
      // console.log('state', state);
      // console.log('objeto', { ...state, names });
      // const names = ;
      return { ...state, names: [ ...state.names, action.data.value ] };
    default:
      return state;
  }
};

export default nameReducer;
