import React from 'react'

export const UsersListComponent = ({thisUserName, Users}) => 
{
    console.log(thisUserName)
    return(
    <div>
      {thisUserName}
      <br/>
      {Users.map(x=>(<li>{x.userName}</li>))}
    </div>
)}