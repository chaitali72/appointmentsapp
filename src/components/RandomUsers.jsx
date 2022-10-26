import React, { useState , Fragment } from "react";
import "./random.css";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

 const RandomUsers = () => {

const[data,setData] = useState([]);
const [isLoading, setisLoading] = React.useState(false);
const[showData,setShowData] = useState(false);

  const handleClick = () => {
    setisLoading(true)
    setShowData(true)
    const url = "https://randomuser.me/api/?results=150";
    fetch(url)
    .then((response) => response.json())
    .then((json) => {setData(json['results'])
  console.log(json['results'])})
  .catch((error) => console.log(error))

  }
return (
  <div>
  <button onClick={handleClick} className="load-data"> Load Data </button>
  {showData ? (
      data.map((user,id) => (
        <Fragment>
      <div className="card" key={id} >
        <div className="img">
          <img src={user.picture.medium} alt="profile-image"/>
          
        </div>
        <div className="info">
          <div className="name">
            <h2><FaUser/>{user.name.first} {user.name.last}</h2>
            <h4>{user.email}</h4>
          </div>
          <div className="links">
  <button className="follow"> Follow </button>
  <button className="view">View Profile</button>
</div>
          </div>
          </div>

         
        </Fragment>    
      ))
    )
   : (
    <div><h1>No Users</h1></div>
  )}
</div>
)
}
export default RandomUsers;