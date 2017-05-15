import './LastNameSubmitted.styl';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { verifyName } from '../formUtils.jsx';

function LastNameSubmitted(props) {
  const { greeting, name, count } = props;
  return (
    <CSSTransitionGroup
      transitionName="lastNameSubmitted-animation"
      transitionEnterTimeout={1000}
      transitionLeave={false}
    >
      {verifyName(name)
        ? <div
          id="lastNameSubmitted" key={count} className="lastNameSubmitted"
        >
          <span className="lastNameSubmitted-greeting">{greeting}, </span>
          <span className="lastNameSubmitted-name">{name}.</span>
        </div>
        : null
      }
    </CSSTransitionGroup>
  );
}

LastNameSubmitted.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  greeting: state.lns.greeting,
  name: state.lns.name,
  count: state.lns.count,
});

export default connect(
  mapStateToProps,
)(LastNameSubmitted);
