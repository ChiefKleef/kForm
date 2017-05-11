import React from 'react';
import './LastNameSubmitted.styl'

var nameMemory = null;

function LastNameSubmitted(props) {
  const { name } = props;
  nameMemory = name;
  return (
    <div id='lastNameSubmitted' className={"lastNameSubmitted " 
                    + (name.replace(' ', '').length > 0 ? 'lastNameSubmitted-valid' : 'lastNameSubmitted-invalid')}>
      {name}
    </div>
  );
}

export default LastNameSubmitted;