import React from 'react'
import { useEffect } from 'react'

const CleanUpFunction = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Running....")
        }, 3000)

        return () => {
            clearInterval(timer)
        }
    }, [])
  return (
    <div>
      <h1>Today is a good day</h1>
    </div>
  )
}

export default CleanUpFunction
