import React from 'react'

export const UsersListComponent = ({thisUserName, Users}) => 
{
    return(
    <div>
      <div>YOUR NAME {thisUserName}</div>
      <br/>
      {Users.map(x=>(<li>{x.userName}</li>))}
    </div>
)}