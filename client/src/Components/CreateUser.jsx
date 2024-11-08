import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";

function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); 

  const [createUser] = useMutation(CREATE_USER_MUTATION);

  const addUser = async () => {
    // Basic validation to check if fields are filled
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      const { data } = await createUser({
        variables: {
          firstName,
          lastName,
          email,
          password
        }
      });
      console.log("User created:", data);
      setErrorMessage(null); // Clear any previous error messages
    } catch (err) {
      // Set a user-friendly error message
      setErrorMessage("Failed to create user. Please try again.");
      console.error("Error details:", err);
    }
  };

  return (
    <>
      <div>
        <label>
          First Name:
          <input 
            name="firstName"
            placeholder="First Name" 
            value={firstName}
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
            value={lastName}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input 
            name="password"
            type="password"
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="button" onClick={addUser}>Create A User</button>

      {/* Display error message if any */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </>
  );
}

export default CreateUser;
