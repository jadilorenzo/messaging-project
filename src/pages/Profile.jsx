import React from 'react'

const Profile = (props) => {
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
