import React from 'react'
import { useMemo,useState } from 'react'

const BasicCalc = () => {

  const [count, setCount] = useState(0);
  const square = useMemo(() => {
    console.log("Calculating...")
    return count * count;
  },[count])
  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Square: {square}</h3>
      <button onClick={() => setCount(count+1)}>Calculate</button>
    </div>
  )
}

export default BasicCalc

