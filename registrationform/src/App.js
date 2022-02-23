import "./App.css";
import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";

function App(props) {
  const [studentDetail, setStudentDetail] = useState([]);
  const detailsHandler = (d) => {
    const details = {
      id: d.id,
      name: d.name,
      website: d.website,
      gender: d.gender,
      email: d.email,
      skills: d.skills
    }
    setStudentDetail((prevStudentDetail) => {
      return [details, ...prevStudentDetail];
    });
    console.log(studentDetail);
  };
  return (
    <div className="App">
      <RegistrationForm onaddDetails={detailsHandler} />
      <div className="students"> 
        {
          studentDetail.map((e) => {
            return (<StudentList
              key={e.id}
              name={e.name}
              website={e.website}
              gender={e.gender}
              email={e.email}
              skills={e.skills}
            />);
          })
          // imageLink={studentDetail.imageLink}
        }
      </div>
    </div>
  );
}

export default App;
