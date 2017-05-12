import './Name.styl'
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateName } from '../../actions/index.jsx';

function Name(props) {
  
  const handleNameChange = (e) => {
    props.dispatch(updateName(e.target.id, e.target.value));
  }
  const name = props.state.name;
  return (
    <div className="name-input-container">
      <input type="text" id='first' className='form-input name-input name-input-first' value={name.first} onChange={handleNameChange} placeholder='First' />
      <input type="text" id='last' className='form-input name-input name-input-last' value={name.last} onChange={handleNameChange} placeholder='Last' />
    </div>
  );
}

Name.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(
  mapStateToProps,
)(Name);