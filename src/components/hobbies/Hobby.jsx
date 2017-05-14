import React from 'react';
import './Hobby.styl';

function Hobby(props) {
  const { id, name, color, removeHobby } = props;
  const handleClick = () => {
    removeHobby(id);
  };
  return (
    <span className="hobby" style={{ color }}>
      <span className="fa fa-minus-circle" onClick={handleClick} />{name}
    </span>
  );
}

export default Hobby;
