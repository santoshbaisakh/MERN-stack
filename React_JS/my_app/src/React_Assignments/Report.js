import React from 'react'
import StudentReport from './StudentReport'

const Report = () => {
    const students = [
        { id: 1, name: "Rahul", marks: 78 },
        { id: 2, name: "Priya", marks: 45 },
        { id: 3, name: "Amit", marks: 91 },
        { id: 4, name: "Riya", marks: 33 },
        { id: 5, name: "Neha", marks: 67 },
        { id: 6, name: "santosh", marks: 55 }
    ]
    return (<StudentReport students={students} />)
}

export default Report
