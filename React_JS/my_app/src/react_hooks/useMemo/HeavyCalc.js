import React from 'react'
import { useState, useMemo } from 'react'

const HeavyCalc = () => {
    const [num, setNum] = useState(1);
    const [text, setText] = useState("")

    const heavyCalc = (n) => {
        console.log("Heavy Calculation Running");
        for (let i = 0; i < 10000000; i++) {
            return n * 2
        }
    }
    const result = useMemo(() => {
       return heavyCalc(num)
    }, [num])
    return (
        <div>
            <h2>Result: {result}</h2>
            <button onClick={() => setNum(num + 1)}>Increase Number</button>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Type Here' />
        </div>
    )
}

export default HeavyCalc
