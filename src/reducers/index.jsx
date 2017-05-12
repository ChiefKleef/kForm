import { combineReducers } from 'redux';
import { hobbies } from './hobbies.jsx';
import { name } from './name.jsx';

const formApp = combineReducers({
  hobbies,
  name
});

export default formApp;
