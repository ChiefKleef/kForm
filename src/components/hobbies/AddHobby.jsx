import React from 'react';
import './AddHobby.styl';

class AddHobby extends React.Component {
  constructor(props){
    super();
    this.state = {
      value: ''
    }
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit() {
    if (this.state.value.replace(' ', '').length > 0) {
      this.props.addHobby(this.state.value);
      this.setState({
        value: ''
      });
    }
  }
  
  render() {
    return (
      <div className='addHobby'>
        <input type='text' className='form-input addHobby-input' value={this.state.value} onChange={this.handleValueChange} placeholder='Add Hobby' />
        <div className={'addHobby-button ' + 
                    (this.state.value.replace(' ', '').length > 0 ? 'addHobby-button-active' : 'addHobby-button-inactive')}
             onClick={this.handleSubmit}>
          <span className='fa fa-plus' />
        </div>
      </div>
    );
  }
}
export default AddHobby;