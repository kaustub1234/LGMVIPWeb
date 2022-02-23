import React from 'react'
import './StudentList.css'
import img from '../images.jpg'

const StudentList = (props) => {
  return (
    <div className="StudentList">
      <img src={img} />
      <div>
        <h3>{props.name.toUpperCase()}</h3>
        <h3>{props.gender}</h3>
        <h3>{props.email}</h3>
        <h3><a href={props.website} target="_blank">{props.website}</a></h3>
        <h3>{props.skills}</h3>
      </div>
    </div>
  )
}

export default StudentList