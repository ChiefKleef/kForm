import { combineReducers } from 'redux';
import { errors } from './errors.jsx';
import { submit } from './submit.jsx';
import { hobbies, hobbyEntry } from './hobbies.jsx';
import { name, lns } from './name.jsx';

const formApp = combineReducers({
  errors,
  submit,
  hobbies,
  hobbyEntry,
  name,
  lns
});

export default formApp;
