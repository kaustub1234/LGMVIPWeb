import React, { useState } from 'react'
import './RegistrationForm.css';
const RegistrationForm = (props) => {
  //states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    const d = {
      name: name,
      email: email,
      website: website,
      gender: gender,
      skills: skills,
      id:Math.random()
    }
    props.onaddDetails(d);
    setEmail('');
    setName('');
    setWebsite('');
    setGender('');
    setSkills('');
  }

  //resetHandler
  const resetHandler = () => {
    setEmail('');
    setName('');
    setWebsite('');
    setGender('');
    setSkills('');
  }

  //DetailsHandlers
  const emailHandler = (event) => {
    setEmail(event.target.value);
  }
  const nameHandler = (event) => {
    setName(event.target.value);
  }
  const websiteHandler = (event) => {
    setWebsite(event.target.value);
  }
  const GenderHandler = (event) => {
    setGender(event.target.value);
  }
  const skillsHandler = (event) => {
    setSkills(event.target.value);
  }


  return (
    <div className='RegistrationForm'>
      <form onSubmit={submitHandler} onReset={resetHandler} >
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" value={name} onChange={nameHandler} type="text" placeholder="Name.." required />
          <label htmlFor="email">Email-id</label>
          <input id="email" value={email} onChange={emailHandler} type="email" placeholder="Email-id.." required />
          <label htmlFor="website">Website</label>
          <input id="website" value={website} onChange={websiteHandler} type="url" placeholder="Website link.." required /><br/>
          <label htmlFor="website">Skills</label>
          <input id="website" value={skills} onChange={skillsHandler} type="text" placeholder="Skills.." required />
        </div>
        <div className="Gender">
          <h3>Gender</h3>
          <label htmlFor="Male">Male
            <input type="radio" name='Gender' onChange={GenderHandler} value="Male" />
          </label>
          <label htmlFor="Female">Female
            <input type="radio" name="Gender" onChange={GenderHandler} value="Female" />
          </label>
        </div>
        <div className="btn">
          <button type='submit'>Enroll Student</button>
          <button type='reset'>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default RegistrationForm