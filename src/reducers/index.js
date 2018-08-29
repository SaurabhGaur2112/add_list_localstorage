import { combineReducers } from 'redux';
import addTask from './addTask';

export const allReducer = combineReducers({
    tasks: addTask
});