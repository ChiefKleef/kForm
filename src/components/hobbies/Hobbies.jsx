import './Hobbies.styl';
import React from 'react';

import Hobby from './Hobby.jsx';
import AddHobby from './AddHobby.jsx';

class Hobbies extends React.Component {
  constructor(props){
    super();
  }

  render() {
    return (
      <div className="hobbies">
        {this.props.hobbies.map((hobby, i) =>
          <Hobby
            key={i}
            name={hobby.name}
          />
        )}
        <AddHobby addHobby={this.props.addHobby} />
      </div>
    );
  }
}
 export default Hobbies;