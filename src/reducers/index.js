import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import bankReducer from './bankReducer';

const reducers = combineReducers({
  nameReducer,
  bankReducer,
});

export default reducers;
