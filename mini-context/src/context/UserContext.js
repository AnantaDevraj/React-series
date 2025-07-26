
/*
STEPS:
1. first create a react context using "React.createContext"
2. then store that in a variable and then export that 
3. After creating the context, we have to create an provider.
4. Provider : wrap all the elements using "UserContext" is known as provider(Which provides the data),
5. e.g : <UserContext> ...elements... </UserContext> . It is like a global variable.

*/
import React from "react";

const UserContext =  React.createContext()

export default UserContext;

{/*
-- it is a Provider. (Method 1)
    <UserContext>
    <Login />
    <Card />
    <Footer />
</UserContext> */}