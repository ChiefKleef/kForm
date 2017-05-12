import './Hobbies.styl';
import React from 'react';

import { connect } from 'react-redux';
import { addHobby, removeHobby } from '../../actions/index.jsx';

import Hobby from './Hobby.jsx';
import AddHobby from './AddHobby.jsx';

class Hobbies extends React.Component {
  constructor(props){
    super();
    this.addHobby = this.addHobby.bind(this);
    this.removeHobby = this.removeHobby.bind(this);
  }
  
  addHobby(name){
    this.props.dispatch(addHobby(name));
  }

  removeHobby(id){
    this.props.dispatch(removeHobby(id, this.props.state.hobbies));
  }

  render() {
    const hobbies = this.props.state.hobbies;
    return (
      <div className="hobbies">
        <div className={"hobbies-container " + (hobbies.length > 0 ? 'hobbies-container-active' : 'hobbies-container-inactive')}>
          {hobbies.map(hobby =>
            <Hobby
              key={hobby.id}
              id={hobby.id}
              name={hobby.text}
              color={hobby.color}
              removeHobby={this.removeHobby}
            />
          )}
          {hobbies.length === 0
            ? <div className='hobbies-container-emptyMessage'><span className='hobbies-container-emptyMessage-text'>No Hobbies Added</span></div>
            : null
          }
        </div>
        <AddHobby addHobby={this.addHobby} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});


 export default connect(
   mapStateToProps,
 )(Hobbies);