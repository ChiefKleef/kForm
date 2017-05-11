import React from 'react';
import './Submit.styl'

function Submit(props) {

  const handleClick = () => {
    props.handleSubmit();
  }

  return (
    <div className="submit" onClick={handleClick}>
      <span className="submit-text">SUBMIT</span>
    </div>
  );
}

export default Submit;