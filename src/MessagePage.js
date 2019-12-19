import React, {useState} from 'react'

const MessagePage = ({user, messages = []}) => {
  const message = messages.map(x => {
    if (x.user.abbrev === user) {
      return <div className='bubble' style={{float: 'right'}}>{x.message} <em style={{float: 'right'}}>{x.user.name}</em></div>
    } else {
      return <div className='bubble'>{x.message} <em style={{float: 'right'}}>{x.user.name}</em></div>
    }
  })
  return (
    <div>
      <em><div style={{marginTop: '10px', marginBottom: '10px'}}>Messages</div></em>
      <div>{message}</div>
    </div>
  )
}

export default MessagePage
