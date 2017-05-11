import React from 'react';
import './Hobby.styl'

function Hobby(props) {
  const { name } = props;
  return (
    <li className='hobby' >
      {name}
    </li>
  );
}

export default Hobby;