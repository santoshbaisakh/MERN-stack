import React from 'react'
import Title from '../components/Title'
import Unordered from '../components/Unordered'
import Greetings from '../components/Greetings'
import UserCard from '../components/UserCard'
import Button from '../components/Button'
const About = () => {
    return (
        <div>
            <Title name="Today I read News" />
            <Title name="Today we start react props" />
            <Title name="Good Day" />
            <Title demo="Get discounts" />
            <Title weather="rainy night" />
            <Greetings name="Satya" />
            <UserCard name="Shiva" age="23" city="Bhubaneswar" />
            {/* <UserCard age = "23" />
            <UserCard city = "Bhubaneswar" /> */}
            <Button label="Submit" />
            <Button />
            <Unordered />
        </div>
    )
}

export default About
