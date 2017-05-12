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
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.handleSubmitError = this.handleSubmitError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const name = `${this.props.state.name.first} ${this.props.state.name.last}`;
    const hobbies = this.props.state.hobbies;
    const nameError = name.replace(' ', '').length === 0;
    const hobbiesError = hobbies.length === 0
    this.props.dispatch(submitLoading());
    window.setTimeout(() => {
      if (nameError || hobbiesError) {
        this.handleSubmitError(nameError, hobbiesError);
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

  handleSubmitError(nameError, hobbiesError){
    this.props.dispatch(submitError(nameError, hobbiesError));
    window.setTimeout(() => {
      this.props.dispatch(submitReset());
    }, 1000);
  }

  render() {
    const name = `${this.props.state.name.first} ${this.props.state.name.last}`
    const errors = this.props.state.errors;
    return (
      <div className="form">
        <div className="form-input-container">
          <div className="form-guide">
            <span>
              <span className='form-guide-icon fa fa-user-o'/> Enter Name 
              {errors.nameError
                ? <span className={'fa fa-warning'}/>
                : null              
              }
            </span>
          </div>
            <Name/>
          <div className="form-guide form-guide-hobbies">
            <span><span className='form-guide-icon fa fa-thumbs-o-up'/> Enter Hobbies
            {errors.hobbiesError
              ? <span className={'fa fa-warning'}/>
              : null              
            }
            </span>
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
