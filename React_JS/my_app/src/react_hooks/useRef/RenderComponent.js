import React from 'react'
import { useRef,useState,useEffect } from 'react'

const RenderComponent = () => {
    const [state, setState] = useState(0);
    const count = useRef(0);
    useEffect(() => {
        count.current++;
    })
  return (
    <div>
      <h2>Component Rendered in {count.current} times</h2>
      <h2>Count: {state}</h2>
      <button onClick={() => {setState(state+1)}}>Click Me</button>
    </div>
  )
}

export default RenderComponent
// import React, { useState, useRef } from "react";

// function RenderComponent() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(1);

//   renderCount.current++;

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <h2>Render Count: {renderCount.current}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase Count
//       </button>
//     </div>
//   );
// }

// export default RenderComponent;
