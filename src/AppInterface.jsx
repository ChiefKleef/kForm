import './AppInterface.styl';
import React from 'react';

import Form from './components/Form.jsx';

function AppInterface(props) {
  return (
    <div className="appInterface">
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}
 export default AppInterface;