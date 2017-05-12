import './Submit.styl'
import React, { PropTypes }  from 'react';
import { connect } from 'react-redux';
import { updateHobby } from '../actions/index.jsx';

function Submit(props) {

  const { handleSubmit } = props;

  const { submitMessage, submitting } = props.state.submit

  const handleClick = () => {
    if (! submitting) handleSubmit();
  }

  return (
    <button className={`submit submit-${submitMessage}`} onClick={handleClick}>
      <span className="submit-text">{submitMessage.toUpperCase()}</span>
    </button>
  );
}

Submit.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(
  mapStateToProps,
)(Submit);