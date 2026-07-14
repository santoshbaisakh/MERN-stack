import React from 'react'

const UserCard = (props) => {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.Age}</h3>
      <h3>City: {props.City}</h3>
    </div>
  )
}

export default UserCard
