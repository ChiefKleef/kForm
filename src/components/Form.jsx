import './Form.styl';
import React from 'react';

import Submit from './Submit.jsx';
import LastNameSubmitted from './LastNameSubmitted.jsx';

class AppInterface extends React.Component {
  constructor(props){
    super();
    this.state = {
      firstNameValue: '',
      lastNameValue: '',
      lastNameSubmittedValue: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
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
    this.setState({
      firstNameValue: '',
      lastNameValue: '',
      lastNameSubmittedValue: `${this.state.firstNameValue} ${this.state.lastNameValue}`
    })
  }

  render() {
    return (
      <div className="form">
        <div className="form-input-container">
          <div className="form-guide">
            <span><span className='fa fa-user-o'/> Enter Name</span>
          </div>
          <div className="name-input-container">
            <input type="text" className='name-input name-input-first' value={this.state.firstNameValue} onChange={this.handleNameChange} placeholder='First' />
            <input type="text" className='name-input name-input-last' value={this.state.lastNameValue} onChange={this.handleNameChange} placeholder='Last' />
          </div>
          <div className="form-guide form-guide-hobbies">
            <span><span className='fa fa-thumbs-o-up'/> Enter Hobbies</span>
          </div>
        </div>
        <Submit handleSubmit={this.handleSubmit} />
        <div className="form-lns-container">
          <LastNameSubmitted name={this.state.lastNameSubmittedValue}/>
        </div>
      </div>
    );
  }
}
 export default AppInterface;