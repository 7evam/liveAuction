import React, { Component } from 'react';

const PickUser = ({pickUser, allUsers}) => {

return(
  <div id='pickUser'>

  <h1>Pick a user!</h1>

    {

      allUsers.map((user,index) => (
        <div key={index}>
          <button onClick={pickUser} id={user.id}>{user.username}</button>
      </div>
      ))
  }

  </div>
  )
}

export default PickUser;



