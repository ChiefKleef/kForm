import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './Name.styl';
import { updateName } from '../../actions/index.jsx';

function Name(props) {
  const handleNameChange = (e) => {
    props.dispatch(updateName(e.target.id, e.target.value));
  };
  const { firstName, lastName } = props;
  return (
    <div className="name-input-container">
      <input
        type="text" id="first"
        className="form-input name-input name-input-first"
        value={firstName} onChange={handleNameChange} placeholder="First"
      />
      <input
        type="text" id="last"
        className="form-input name-input name-input-last"
        value={lastName} onChange={handleNameChange} placeholder="Last"
      />
    </div>
  );
}

Name.propTypes = {
  dispatch: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  firstName: state.name.first,
  lastName: state.name.last,
});

export default connect(
  mapStateToProps,
)(Name);
