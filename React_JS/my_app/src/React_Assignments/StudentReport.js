import React from 'react'

const StudentReport = (props) => {
    let pass = 0
    let fail = 0
    return (
        <div>
            {props.students.map(student => {
                if (student.marks >= 50)
                    pass++
                else
                    fail++

                return (
                    <p key={student.id}>{student.name} - {student.marks} - {student.marks >= 50 ? "Pass" : "Fail"}</p>
                )
            })}
            <h3>Pass: {pass}</h3>
            <h3>Fail: {fail}</h3>
        </div>
    )
}

export default StudentReport
