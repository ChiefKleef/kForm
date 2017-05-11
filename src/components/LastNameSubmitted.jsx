import React from 'react';
import './LastNameSubmitted.styl'

function LastNameSubmitted(props) {
  const { name } = props;
  return (
    <div className={"lastNameSubmitted " 
                    + (name.replace(' ', '').length > 0 ? 'lastNameSubmitted-valid' : 'lastNameSubmitted-invalid')}>
      {name}
    </div>
  );
}

export default LastNameSubmitted;