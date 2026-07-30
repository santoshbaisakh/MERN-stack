import React from 'react'
import { useState } from 'react'

const VirtualDom = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increases</button>
    </div>
  )
}

export default VirtualDom
