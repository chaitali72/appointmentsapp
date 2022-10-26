import React, { useEffect, useState } from 'react'
import axios from "axios";


 const Home = () => {
const [users,setUsers] = useState([]);
const endpoint = "https://my-json-server.typicode.com/ifeanyidike/jsondata/users";
useEffect(() => {
  const fetchUsers = async() => {
    const {data} = await axios.get(endpoint);
    setUsers(data);
  };
  fetchUsers();
},[]);

  return (
    <div className='user-ifo'>
     <tbody>
      <tr>
        <th>
          Name
        </th>
        <th>
          Job
        </th>
        <th>
          Sex
        </th>
      </tr>
    {users.map((user,id) => (
<tr>
  <td key={id}>{user.name}</td>
  <td>{user.job}</td>
  <td>{user.sex}</td>
</tr>
    ))}
     </tbody>
 
    </div>
  )
}

export default Home;
