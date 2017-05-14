import './LastNameSubmitted.styl';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { verifyName } from '../formUtils.jsx';

function LastNameSubmitted(props) {
  const { greeting, name } = props;
  return (
    <div
      id="lastNameSubmitted" className={`lastNameSubmitted ${
      verifyName(name) ? 'lastNameSubmitted-valid' : 'lastNameSubmitted-invalid'}`}
    >
      <span className="lastNameSubmitted-greeting">{greeting}, </span>
      <span className="lastNameSubmitted-name">{name}.</span>
    </div>
  );
}

LastNameSubmitted.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  greeting: state.lns.greeting,
  name: state.lns.name,
});

export default connect(
  mapStateToProps,
)(LastNameSubmitted);
