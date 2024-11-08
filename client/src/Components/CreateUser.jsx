import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";

function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
  
  // Define the addUser function, if needed in future implementation.
  const addUser = () => {
    // Logic for adding a user, possibly using the useMutation hook with CREATE_USER_MUTATION
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }
    })
    // if (error) {
    //   console.log(error);
    // }
    console.log("User created:", { firstName, lastName, email, password });
  };

  return (
    <>
      <div>
        <label>
          First Name:
          <input 
            name="firstName"
            placeholder="First Name" 
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input 
            name="lastName"
            placeholder="Last Name" 
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input 
            name="email"
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input 
            name="password"
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="button" onClick={ addUser }>Create A User</button>
    </>
  );
}

export default CreateUser;
