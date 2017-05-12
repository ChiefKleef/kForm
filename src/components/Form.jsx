import './Form.styl';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { submitLoading, submitSuccess, submitError, submitReset } from '../actions/index.jsx';

import Hobbies from './hobbies/Hobbies.jsx';
import Submit from './Submit.jsx';
import Name from './name/Name.jsx';
import LastNameSubmitted from './name/LastNameSubmitted.jsx';

class Form extends React.Component {
  constructor(props){
    super();
    this.state = {
      lastNameSubmittedValue: ''
    }
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.handleSubmitError = this.handleSubmitError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const name = `${this.props.state.name.first} ${this.props.state.name.last}`;
    console.log(name);
    this.props.dispatch(submitLoading());
    window.setTimeout(() => {
      if (name.replace(' ', '').length === 0) {
        this.handleSubmitError();
      } else {
        this.handleSubmitSuccess(name);
      }
    }, 2000)
  }

  handleSubmitSuccess(name){
    this.props.dispatch(submitSuccess(name));
    window.setTimeout(() => {
      this.props.dispatch(submitReset());
    }, 1000);
  }

  handleSubmitError(){
    this.props.dispatch(submitError());
    window.setTimeout(() => {
      this.props.dispatch(submitReset());
    }, 1000);
  }

  render() {
    return (
      <div className="form">
        <div className="form-input-container">
          <div className="form-guide">
            <span><span className='fa fa-user-o'/> Enter Name</span>
          </div>
            <Name/>
          <div className="form-guide form-guide-hobbies">
            <span><span className='fa fa-thumbs-o-up'/> Enter Hobbies</span>
          </div>
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
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(
  mapStateToProps,
)(Form);
