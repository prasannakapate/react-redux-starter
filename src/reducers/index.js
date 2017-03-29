import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers ({
  //short hand property name
  courses
});

export default rootReducer;