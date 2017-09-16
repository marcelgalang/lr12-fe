import React, { Component } from 'react'
import NewLeft from '../lefts/NewLeft'


const UserPage = ({user}) => {

    let lefts =  user.lefts.slice(-1)
    let lastLeft = lefts[0].duration

  return (
      <div>

          <h1>{user.email}</h1>
          <h1>{lastLeft}</h1>


          <NewLeft user={user}/>

      </div>
    )
  }

export default UserPage