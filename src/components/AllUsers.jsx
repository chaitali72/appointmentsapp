import React, { useEffect, useState } from 'react'
import { CiCalendarDate} from "react-icons/ci";
import {FaSearch} from "react-icons/fa";

export const AllUsers = () => {
    const[list,showList] = useState([]);

    useEffect(() => {
        fetch('./data.json')
        .then(((res) => res.json()))
        .then((data) => {console.log(data)
            showList(data) } 
       ).catch( err =>  console.log(err))
    },[]);


  return (
    <div className='alluser-container'>
 <h2>AllUsers</h2>
<input type="search" className='search' placeholder='Search here... ' />
<button type='submit'>Search</button>
<tbody>
        <tr>
          <th>Owner Name</th>
          <th>Pet Name</th>
          <th>Appointment date</th>
          <th>Notes</th>
        </tr>
      
{list && list.map((data,id) => (
  
     <tr key={id}>
        <td >{data.ownerName}</td>
        <td >{data.petName}</td>
        <td>{data.aptDate}</td>
        <td>{data.aptNotes}</td>
     </tr>
    

))}
 </tbody>  
</div>
  )
}
