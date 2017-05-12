import { combineReducers } from 'redux';
import { submit } from './submit.jsx';
import { hobbies, hobbyEntry } from './hobbies.jsx';
import { name, lns } from './name.jsx';

const formApp = combineReducers({
  submit,
  hobbies,
  hobbyEntry,
  name,
  lns
});

export default formApp;
