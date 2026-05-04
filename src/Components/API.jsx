import React from 'react'
import { useState,useEffect } from 'react'


const API = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(emp => emp.json())
        .then(data => setUser(data));
    },[]);
  return (
    <ul>
        {user.map(e=>(
        <li key={e.id}>
            {e.username}
            {e.email}
        </li>
        ))}
    </ul>
  );
}

export default API