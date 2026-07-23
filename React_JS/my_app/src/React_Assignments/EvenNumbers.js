import React from 'react'

const EvenNumbers = (props) => {
    const even = props.numbers.filter(num => num % 2 === 0);

    const sum = even.reduce((total, num) => total + num, 0);
  return (
    <div>
      <h2>Even Numbers</h2>

      {even.map((num, index) => (
        <p key={index}>{num}</p>
      ))}

      <h3>Total Even Numbers: {even.length}</h3>
      <h3>Sum: {sum}</h3>
    </div>
  )
}

export default EvenNumbers
