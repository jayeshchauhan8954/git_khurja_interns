import { useState } from 'react';
import { sculptureList } from './data.js';

export default function UseStateCom() {
//   let index = 0;
let [index,setIndex] = useState(0);

  function handleClick() {
    // index = index + 1;
    setIndex(index+1)
    console.log(index, 'this is index');
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
