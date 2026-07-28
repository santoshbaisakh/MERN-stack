import React from 'react'
import { useState,useEffect,useRef } from 'react'

const PreviousCount = () => {
    const [count, setCount] = useState(0);

    const prevCountRef = useRef(0);
    //  store previous value
    //  it doesn't trigger re-render
    //  value stored in .current

    useEffect(() => {
        prevCountRef.current = count;
        //  the value updated after render 
    },[count])

    //  UI renders with new count
    //  then useEffect runs
    //  it saves current count into previous count
    //  so next render -> it becomes "previous value"
  return (
    <div>
      <h2>Current count: {count}</h2>
      <h2>Previous Count: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  )
}

export default PreviousCount
