import React from 'react'
import './StudentList.css'
import img from '../images.jpg'

const StudentList = (props) => {
  return (
    <div className="StudentList">
      <img src={img} />
      <div>
        <h3>Name: {props.name.toUpperCase()}</h3>
        <h3>Gender: {props.gender}</h3>
        <h3>E-mail: {props.email}</h3>
        <h3>Website-url: <a href={props.website} target="_blank">{props.website}</a></h3>
        <h3>Skills: {props.skills}</h3>
      </div>
    </div>
  )
}

export default StudentList