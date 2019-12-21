import React from 'react'
import {useParams} from 'react-router-dom'
import DefaultUser from '../DefaultUser.png'

const Profile = (props) => {
  const {user} = useParams()
  const selectedUser = props.contacts.array.find(element => element.name === user)
  const loaded = (props.contacts.array.length > 1)
  let name = loaded ? selectedUser.name : ''
  let img = loaded ? selectedUser.img : ''
  const displayImg = loaded ? <img alt='' style={{width: '200px', borderRadius: '50%'}} src='/static/media/DefaultUser.4d84c7cc.png'/> : <img style={{width: '200px', borderRadius: '100%'}} alt='' src={img}/>
  return (
    <div style={{paddingTop: '10px'}}>
      {name}
      <hr/>
      {displayImg}
    </div>
  )
}

export default Profile
