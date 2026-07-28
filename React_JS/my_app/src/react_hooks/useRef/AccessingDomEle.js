import React from 'react'
import { useRef } from 'react'

const AccessingDomEle = () => {

    const inputRef = useRef(null);  // initial value is null
    const handleFocus = () => {
        inputRef.current.focus()    
        // focus -> It is a pre-build function that focus on a point
        // .current is a container to store
    }
    return (
        <div>
            <input ref={inputRef} type='text' placeholder='Enter name' />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}

export default AccessingDomEle
