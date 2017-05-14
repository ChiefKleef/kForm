import './Submit.styl';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function Submit(props) {
  const { handleSubmit, submitMessage, submitting } = props;

  const handleClick = () => {
    if (!submitting) handleSubmit();
  };

  return (
    <button className={`submit submit-${submitMessage}`} onClick={handleClick}>
      <span className="submit-text">{submitMessage.toUpperCase()}</span>
    </button>
  );
}

Submit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitMessage: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  submitMessage: state.submit.submitMessage,
  submitting: state.submit.submitting,
});

export default connect(
  mapStateToProps,
)(Submit);
