import React, { useState , useEffect } from "react";

 const RandomUsers = () => {

const[data,setData] = useState([]);
const [isLoading, setIsLoading] = React.useState(true);

useEffect(() => {
    const url = "https://randomuser.me/api/?results=150";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['results']))
      .catch((error) => console.log(error));
  }, []);

return (
    <div className="users">
        <h2>Random Users</h2>
        {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((user) => (
          <h1>
            {user.name.first} {user.name.last}
          </h1>
        ))
      )}
    </div>
)
}
export default RandomUsers;