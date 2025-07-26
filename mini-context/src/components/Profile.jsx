import React, {useContext}  from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    //Here we need to access the data : so select "user"
    const {user} = useContext(UserContext);
    
    if(!user) return <div>Please Login !!!</div>
    return(
        <div>Welcome {user.username}</div>
    )
}

export default Profile