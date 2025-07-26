import React, { useState } from "react";
import UserContext from "./UserContext";

// Create a method of UserContextProvider :
// use props as children
const UserContextProvider = ({ children }) => {
    // Here we can create all the "hooks" and call all the "API"

  const [user, setUser] = useState(null);
  //we have to pass the property ".Provider"
  return (
    <UserContext.Provider value={{user , setUser}}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
