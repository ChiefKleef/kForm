import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './Name.styl';
import { updateName } from '../../actions/index.jsx';

function Name(props) {
  const handleNameChange = (e) => {
    props.dispatch(updateName(e.target.id, e.target.value));
  };
  const name = props.name;
  return (
    <div className="name-input-container">
      <input
        type="text" id="first"
        className="form-input name-input name-input-first"
        value={name.first} onChange={handleNameChange} placeholder="First"
      />
      <input
        type="text" id="last"
        className="form-input name-input name-input-last"
        value={name.last} onChange={handleNameChange} placeholder="Last"
      />
    </div>
  );
}

Name.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state.name,
});

export default connect(
  mapStateToProps,
)(Name);
