import './LastNameSubmitted.styl'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function LastNameSubmitted(props) {
  const lns = props.state.lns;
  return (
    <div id='lastNameSubmitted' className={"lastNameSubmitted " 
                    + (lns.replace(' ', '').length > 0 ? 'lastNameSubmitted-valid' : 'lastNameSubmitted-invalid')}>
      {lns}
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