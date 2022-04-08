
// import { useHistory } from "react-router-dom";
//  const [userData, setUserData] = useState({ username: "", password: "" });
//  const history = useHistory();

//  <Redirect exact from="/" to={isLog ? "/health" : "/login"} />


//  const handleSubmit = (e) => {
//   e.preventDefault();
// if (userData.username == "admin" && userData.password == "123456") {
//     //Signin Success
//     localStorage.setItem("isAuthenticated", "true");
//     window.location.pathname = "/";
// };
// import React, { useState, useEffect } from "react";

// const Router = () => {
//   const [username, setUsername] = useState(4);
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // set the state of the user

//     // store the user in localStorage
//     localStorage.setItem("user", username);
  

//     useEffect(() => {
//       if (user === 4) {
//         setUser(username);
//         console.log("login thanh cong");
//         if
//       }
//     }, [username]);
    

//     // logout the user
//     const handleLogout = () => {
//       setUser({});
//       setUsername("");
//       setPassword("");
//       localStorage.clear();
//     };

//     // login the user

//     // if there's a user show the message below
//     if (user) {
//       return (
//         <div>
//           {user.name} is loggged in
//           <button onClick={handleLogout}>logout</button>
//         </div>
//       );
//     }
//   };

//   // if there's no user, show the login form
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username: </label>
//         <input
//           type="text"
//           value={username}
//           placeholder="enter a username"
//           onChange={({ target }) => setUsername(target.value)}
//         />
//         <div>
//           <label htmlFor="password">password: </label>
//           <input
//             type="password"
//             value={password}
//             placeholder="enter a password"
//             onChange={({ target }) => setPassword(target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Router;
