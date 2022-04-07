// How to Persist a Logged-in User in React
import React, { useState, useEffect } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(4);

  useEffect(() => {
    
    if (username === 4) {
        window.localStorage.setItem("userName", username);
     
    }
  }, [username]);

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async (e) => {
    e.preventDefault();

    // set the state of the user

    // store the user in localStorage
    localStorage.setItem("user", username);
    console.log("login thanh cong");

    // if there's a user show the message below
    if (user) {
      return (
        <div>
          {user.name} is loggged in
          <button onClick={handleLogout}>logout</button>
        </div>
      );
    }
  };

  // if there's no user, show the login form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
