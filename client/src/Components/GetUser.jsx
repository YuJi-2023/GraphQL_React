// a component to render the functon of getting mock users info
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUser() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
    setUsers(data.getAllUsers);
    }
  },[data]);


  return (
    <div>
      {users.map((user) => {
          return <p key={user.id}>{user.firstName}</p>;
        })}
   </div>
  );
}

export default GetUser;
