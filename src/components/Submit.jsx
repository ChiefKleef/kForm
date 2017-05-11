import React from 'react';
import './Submit.styl'

function Submit(props) {

  const { submitMessage, submitting, handleSubmit } = props;

  const handleClick = () => {
    if (! submitting) handleSubmit();
  }

  return (
    <div className={`submit submit-${submitMessage}`} onClick={handleClick}>
      <span className="submit-text">{submitMessage.toUpperCase()}</span>
    </div>
  );
}

export default Submit;