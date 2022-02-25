import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState([]);

  const loadUser = async () => {
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await (response.json());
    setUser(jsonresponse);
  }

  return (
    <div className="App">
      <button className="btn" onClick={loadUser}>Get Data</button>
      <h1>List of Users</h1>
      <div className="user_list">
        {
          user.map((use => {
            let image = use.avatar_url;
            return (
              <div className="user_data">
                <img src={image} alt="userimage" height='200' width='300' />
                <h3 key={use.id}>Name of the person: {use.login} <br /> <a href={use.followers_url} target="_blank">{use.avatar_url}</a></h3>
              </div>
            )
          }))}
      </div>
    </div>
  );
}

export default App;
