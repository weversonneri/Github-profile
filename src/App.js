import logo from './logo.svg';
import './App.css';
import GithubImage from './github.svg'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
  }

  const handleChange = (event) => {
    setSearch(event.target.value)

  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Github user</label>
          <div className="input-group">
            <input type="text" className="form-control" required value={search} onChange={handleChange} />
            <span className="input-group-btn" >
              <button type="submit" className="btn btn-success">
                Search
            </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
            src={GithubImage}
            className="responsive rounded-circle"
            height="200px"
            alt="Avatar" />
        )}

        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              className="responsive rounded-circle"
              height="200px"
              alt="Avatar" />

            <h1 className="pt-5">
              <a href="https://github.com/weversonneri" target="_new">
                {userData.name}
             </a>
            </h1>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} target="_new" className="text-info">
                {userData.blog}
              </a>
            </p>
            <h4>{userData.bio}</h4>
          </div>

        )}

      </div>
    </div>
  );
}

export default App;
