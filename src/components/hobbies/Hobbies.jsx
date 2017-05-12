import './Hobbies.styl';
import React from 'react';

import { connect } from 'react-redux';
import { addHobby } from '../../actions/index.jsx';

import Hobby from './Hobby.jsx';
import AddHobby from './AddHobby.jsx';

class Hobbies extends React.Component {
  constructor(props){
    super();
    this.addHobby = this.addHobby.bind(this);
  }
  
  addHobby(name){
    this.props.dispatch(addHobby(name));
  }

  render() {
    return (
      <div className="hobbies">
        <div className="hobbies-container">
          {this.props.state.hobbies.map(hobby =>
            <Hobby
              key={hobby.id}
              name={hobby.text}
            />
          )}
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