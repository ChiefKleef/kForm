import './AddHobby.styl';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { verifyName } from '../formUtils.jsx';
import { updateHobby } from '../../actions/index.jsx';

class AddHobby extends React.Component {
  constructor() {
    super();
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleValueChange(e) {
    this.props.dispatch(updateHobby(e.target.value));
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') this.handleSubmit();
  }

  handleSubmit() {
    const { hobbyEntry } = this.props;
    // reusing verify name logic for the hobby entry
    if (verifyName(hobbyEntry)) this.props.addHobby(hobbyEntry);
  }

  render() {
    const { hobbyEntry } = this.props;
    return (
      <div className="addHobby">
        <input
          type="text" className="form-input addHobby-input" value={hobbyEntry} 
          onChange={this.handleValueChange} placeholder="Add Hobby" onKeyPress={this.handleKeyPress}
        />
        <button
          className={`addHobby-button ${verifyName(hobbyEntry) ? 'addHobby-button-active' : 'addHobby-button-inactive'}`}
          onClick={this.handleSubmit}
        >
          <span className="fa fa-plus" />
        </button>
      </div>
    );
  }
}

AddHobby.propTypes = {
  dispatch: PropTypes.func.isRequired,
  addHobby: PropTypes.func.isRequired,
  hobbyEntry: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  hobbyEntry: state.hobbyEntry,
});

export default connect(
  mapStateToProps,
)(AddHobby);
