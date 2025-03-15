// a component to render the functon of remove a specific user from the mock data
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function RemoveUser() {
  console.log('Add section to remove a selected user');
  return (
    <div>
      <h2>Which user to remove?</h2>
   </div>
  );
}

export default RemoveUser;
