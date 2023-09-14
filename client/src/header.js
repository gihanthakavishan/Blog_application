// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "./userContext";
// // import React from "react";
// // import ReactDOM from "react-dom";
// // import App from "./App"; // Your main application component
// // import { UserContextProvider } from "./userContext"; // Import your UserContextProvider

// // ReactDOM.render(
// //     <React.StrictMode>
// //         <UserContextProvider>
// //             <App />
// //         </UserContextProvider>
// //     </React.StrictMode>,
// //     document.getElementById("root")
// // );

// export default function Header(){
   
//     const [userInfo, setUserinfo] = useContext(null);
//     const [username, setUsername] = useState(null);
//     useEffect(()=> {
//       fetch('http://localhost:4000/profile',{
//         credentials: 'include',
//       }).then(response =>{
//          response.json().then(userInfo =>{
//             console.log(userInfo)
//             // setUserinfo(userInfo); 
//              setUsername(userInfo.username); 
//          });
//       });
//     }, []);

//     function logout() {
//     fetch('http://localhost:4000/logout',{
//         credentials: 'include',
//         method: 'POST',
//     });
//     setUserinfo(null);
//     }

//     const usersname = userInfo?.usersname;
//     return (<header>
//         <Link to="/" className="logo">Myblog</Link>
//         <nav>
//             {username && (
//                 <>
//                 <Link to="/create">Create new post</Link>
//                 <a onClick={logout}>Logout</a>
//                 </>
//             )}
//             {!username && (
//                 <>
//                  <Link to="/login">Login</Link>
//                  <Link to="/register">Register</Link>
//             </>
//             )}
//         </nav>
//        </header>);
// }

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Header() {
  const [userInfo, setUserInfo] = useState(null); // Initialize with null or initial value
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userData => {
        console.log(userData);
        setUserInfo(userData); // Update userInfo state
        setUsername(userData.username);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null); // Clear userInfo when logging out
  }

  const usersname = userInfo?.usersname;

  return (
    <header>
      <Link to="/" className="logo">
        Myblog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create a new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}