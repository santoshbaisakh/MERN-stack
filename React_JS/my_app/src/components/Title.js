import React from 'react'

const Title = (props) => {
    return  ( 
   <div>
     <h1>{props.name}</h1>
     <h1>{props.weather}</h1>
     <h1>{props.demo}</h1>
   </div> 
)
}

export default Title
