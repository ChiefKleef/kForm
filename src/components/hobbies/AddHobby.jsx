import React from 'react';
import './AddHobby.styl';

class AddHobby extends React.Component {
  constructor(props){
    super();
    this.state = {
      value: ''
    }
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  
  render() {
    return (
      <div className='addHobby'>
        <input type='text' className='form-input addHobby-input' value={this.state.value} onChange={this.handleValueChange} placeholder='Add Hobby' />
        {this.state.value.replace(' ', '').length > 0
          ? <div className='addHobby-button'>
              <span className='fa fa-plus' />
            </div>
          : null
        }
      </div>
    );
  }
}
export default AddHobby;