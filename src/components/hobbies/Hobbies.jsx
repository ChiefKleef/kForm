import './Hobbies.styl';
import React from 'react';

import Hobby from './Hobby.jsx';
import AddHobby from './AddHobby.jsx';

const hobbies = [{name: 'birbin'}, {name: 'watchin twin pecks'}];

class Hobbies extends React.Component {
  constructor(props){
    super();
  }
  
  render() {
    return (
      <div className="hobbies">
        {hobbies.map((hobby, i) =>
          <Hobby
            key={i}
            name={hobby.name}
          />
        )}
        <AddHobby />
      </div>
    );
  }
}
 export default Hobbies;