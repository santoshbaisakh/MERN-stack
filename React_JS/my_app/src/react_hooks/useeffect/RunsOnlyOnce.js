import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RunsOnlyOnce = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => console.log(data))
    }, [])
    return(
        <div>
            <h1>Users</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
    )
    // const [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log("Component rendered only once")
    // }, [])
    // return (
    //     <div>
    //         <p>Current count : {count}</p>
    //         <button onClick={() => setCount(count - 1)}>Decrement</button>
    //     </div>
    // )
}

export default RunsOnlyOnce
