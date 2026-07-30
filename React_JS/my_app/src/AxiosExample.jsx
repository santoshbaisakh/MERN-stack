import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [users, setUsers] = useState([]);

  //  return data using axios
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error)
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User List</h1>
      {users.map((user) => 
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default AxiosExample;

//  How it works :-

//  - useEffect() runs when component loads
//  - axios.get() fetches data from API
//  - setUsers() stores data in state
//  - Data is displayed using .map()
