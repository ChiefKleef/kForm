import './Form.styl';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Hobbies from './hobbies/Hobbies.jsx';
import Submit from './Submit.jsx';
import LastNameSubmitted from './LastNameSubmitted.jsx';

class Form extends React.Component {
  constructor(props){
    super();

    this.state = {
      firstNameValue: '',
      lastNameValue: '',
      lastNameSubmittedValue: '',
      submitButtonMessage: 'submit',
      submitting: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.handleSubmitError = this.handleSubmitError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    if (e.target.className.indexOf('first') > -1) {
      this.setState({
        firstNameValue: e.target.value
      });
    } else {
      this.setState({
        lastNameValue: e.target.value
      });
    }
  }

  handleSubmit(){
    console.log(this.state);
    const { firstNameValue, lastNameValue } = this.state;
    this.setState({
      submitButtonMessage: 'loading',
      submitting: true
    });
    window.setTimeout(() => {
      if (firstNameValue.replace(' ', '').length === 0 && lastNameValue.replace(' ', '').length === 0) {
        this.handleSubmitError();
      } else {
        this.handleSubmitSuccess(firstNameValue, lastNameValue);
      }
    }, 2000)
  }

  handleSubmitSuccess(first, last){
    this.setState({
      firstNameValue: '',
      lastNameValue: '',
      lastNameSubmittedValue: `${first} ${last}`,
      hobbies: [],
      submitButtonMessage: 'done'
    });
    window.setTimeout(() => {
      this.setState({
        submitButtonMessage: 'submit',
        submitting: false
      });
    }, 1000);
  }

  handleSubmitError(){
    this.setState({
      submitButtonMessage: 'error'
    });
    window.setTimeout(() => {
      this.setState({
        submitButtonMessage: 'submit',
        submitting: false
      });
    }, 1000);
  }

  render() {
    console.log('Form.jsx props', this.props);
    // console.log('Form.jsx state', this.state);
    return (
      <div className="form">
        <div className="form-input-container">
          <div className="form-guide">
            <span><span className='fa fa-user-o'/> Enter Name</span>
          </div>
          <div className="name-input-container">
            <input type="text" className='form-input name-input name-input-first' value={this.state.firstNameValue} onChange={this.handleNameChange} placeholder='First' />
            <input type="text" className='form-input name-input name-input-last' value={this.state.lastNameValue} onChange={this.handleNameChange} placeholder='Last' />
          </div>
          <div className="form-guide form-guide-hobbies">
            <span><span className='fa fa-thumbs-o-up'/> Enter Hobbies</span>
          </div>
          <Hobbies />
        </div>
        <Submit handleSubmit={this.handleSubmit} submitMessage={this.state.submitButtonMessage} submitting={this.state.submitting}/>
        <div className="form-lns-container">
          <LastNameSubmitted name={this.state.lastNameSubmittedValue}/>
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

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   },
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Form);
