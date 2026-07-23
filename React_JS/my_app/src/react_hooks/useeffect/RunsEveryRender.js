import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'

const RunsEveryRender = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Component rendered")
    })
    return (
        <div>
            <p>Current count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default RunsEveryRender
