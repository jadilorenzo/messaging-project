import React, {useState, useEffect} from 'react'
import {Redirect, Link, useParams} from 'react-router-dom'

const Profile = (props) => {
  const params = useParams()

  return (
    <div style={{paddingTop: '10px'}}>
      {props.user.name}
      <hr/>
      <em>
        {props.user.status}
      </em>
    </div>
  )
}

export default Profile
