import React, { useState } from 'react';

function Example() {
  // declare a new state variable called count and initialize to 0
  // every useState returns an array.  The first value of the
  // array [0] is the value of the state and the second value [1]
  // is the method defined to change the state.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}

export default Example;
