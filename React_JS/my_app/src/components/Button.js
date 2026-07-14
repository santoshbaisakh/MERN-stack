import React from 'react'

const Button = ({label = "Click me"}) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  )
}

export default Button
