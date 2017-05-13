import './AddHobby.styl';
import React, { PropTypes }  from 'react';
import { connect } from 'react-redux';
import { updateHobby } from '../../actions/index.jsx';

class AddHobby extends React.Component {
  constructor(props){
    super();
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleValueChange(e) {
    this.props.dispatch(updateHobby(e.target.value));
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    const hobby = this.props.state.hobbyEntry;
    if (hobby.replace(' ', '').length > 0) {
      this.props.addHobby(hobby);
    }
  }
  
  render() {
    const hobby = this.props.state.hobbyEntry;
    return (
      <div className='addHobby'>
        <input type='text' className='form-input addHobby-input' value={hobby} onChange={this.handleValueChange} placeholder='Add Hobby' onKeyPress={this.handleKeyPress}/>
        <button className={'addHobby-button ' + 
                    (hobby.replace(' ', '').length > 0 ? 'addHobby-button-active' : 'addHobby-button-inactive')}
             onClick={this.handleSubmit}>
          <span className='fa fa-plus' />
        </button>
      </div>
    );
  }
}

AddHobby.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(
  mapStateToProps,
)(AddHobby);