import './Form.styl';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as verifiers from './formUtils.jsx';
import { submitLoading, submitSuccess, submitError, submitReset } from '../actions/index.jsx';

import FormGuide from './FormGuide.jsx';
import Hobbies from './hobbies/Hobbies.jsx';
import Submit from './Submit.jsx';
import Name from './name/Name.jsx';
import LastNameSubmitted from './name/LastNameSubmitted.jsx';

class Form extends React.Component {
  constructor() {
    super();
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.handleSubmitError = this.handleSubmitError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const name = `${this.props.firstName} ${this.props.lastName}`;
    const hobbies = this.props.hobbies;
    const nameError = !verifiers.verifyName(name);
    const hobbiesError = !verifiers.verifyHobbies(hobbies);
    this.props.dispatch(submitLoading());
    window.setTimeout(() => {
      if (nameError || hobbiesError) {
        this.handleSubmitError(nameError, hobbiesError);
      } else {
        this.handleSubmitSuccess(name);
      }
    }, 2000);
  }

  handleSubmitSuccess(name) {
    this.props.dispatch(submitSuccess(name));
    window.setTimeout(() => {
      this.props.dispatch(submitReset());
    }, 1000);
  }

  handleSubmitError(nameError, hobbiesError) {
    this.props.dispatch(submitError(nameError, hobbiesError));
    window.setTimeout(() => {
      this.props.dispatch(submitReset());
    }, 1000);
  }

  render() {
    const { nameError, hobbiesError } = this.props;
    return (
      <div className="form">
        <div className="form-input-container">
          <FormGuide
            compId="name" message=" Enter Name"
            icon="user-o" error={nameError}
          />
          <Name />
          <FormGuide
            compId="hobbies" message=" Enter Hobbies"
            icon="thumbs-o-up" error={hobbiesError}
          />
          <Hobbies />
        </div>
        <Submit handleSubmit={this.handleSubmit} />
        <div className="form-lns-container">
          <LastNameSubmitted />
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  hobbies: PropTypes.array.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  hobbiesError: PropTypes.bool.isRequired,
  nameError: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  hobbies: state.hobbies,
  firstName: state.name.first,
  lastName: state.name.last,
  hobbiesError: state.errors.hobbiesError,
  nameError: state.errors.nameError,
});

export default connect(
  mapStateToProps,
)(Form);
