import {useState} from "react";
export default function RegisterPage (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <form className="register">
            <h1>Register</h1>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button>Register</button> 
        </form>
    );
}