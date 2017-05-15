import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './FormGuide.styl';

function FormGuide(props) {
  const { error, message, compId, icon } = props;
  return (
    <div className="form-guide" id={`form-guide-${compId}`}>
      <span><span className={`form-guide-icon fa fa-${icon}`} />{message}
      <CSSTransitionGroup
        className="warning-animation-tg"
        transitionName="warning-animation"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        {error
          ? <span className={'fa fa-warning'} />
          : null
        }
      </CSSTransitionGroup>
      </span>
    </div>
  );
}

FormGuide.propTypes = {
  error: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  compId: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default FormGuide;
