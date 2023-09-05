import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const [username, setUsername] = useState(null);
    useEffect(()=> {
      fetch('http://localhost:4000/profile',{
        credentials: 'include',
      }).then(response =>{
         response.json().then(userInfo =>{
             setUsername(userInfo.username);
             //alert(userInfo.username);
         });
      });
    }, []);

    function logout() {
    fetch('http://localhost:4000/logout',{
        credentials: 'include',
        method: 'POST',
    })
    }
    return (<header>
        <Link to="/" className="logo">Myblog</Link>
        <nav>
            {username && (
                <>
                <Link to="/create">Create new post</Link>
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
       </header>);
}