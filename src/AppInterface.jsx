import './AppInterface.styl';
import React from 'react';

import Form from './components/Form.jsx';

class AppInterface extends React.Component {
  constructor(props){
    super();
  }

  render() {
    console.log('top level props', this.props);
    return (
      <div className="appInterface">
        <div className="form-container">
          <Form />
        </div>
      </div>
    );
  }
}
 export default AppInterface;