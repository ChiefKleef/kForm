import './LastNameSubmitted.styl'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { verifyName } from '../formUtils.jsx';

function LastNameSubmitted(props) {
  const lns = props.state.lns;
  return (
    <div id='lastNameSubmitted' className={"lastNameSubmitted " 
                    + (verifyName(lns.name) ? 'lastNameSubmitted-valid' : 'lastNameSubmitted-invalid')}>
      <span className='lastNameSubmitted-greeting'>{lns.greeting}, </span><span className='lastNameSubmitted-name'>{lns.name}.</span>
    </div>
  );
}

LastNameSubmitted.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(
  mapStateToProps,
)(LastNameSubmitted);