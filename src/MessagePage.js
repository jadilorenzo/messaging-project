import React, {useState} from 'react'

const MessagePage = ({user, messages = [], setMessages}) => {
  const [currentMessage, setMessage] = useState('')
  const change = (e) => {
    setMessage(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    setMessages(p => {
      p.push({message: currentMessage, user: user})
      return p
    })
    setMessage('')
  }

  const message = messages.map((x, index) => {
    if (x.user.abbrev === user.abbrev) {
      return <div key={index} className='bubble' style={{float: 'right'}}>{x.message} <em style={{float: 'right'}}>{x.user.name}</em></div>
    } else {
      return <div key={index} className='bubble'>{x.message} <em style={{float: 'right'}}>{x.user.name}</em></div>
    }
  })

  return (
    <div className='screen'>
      <em><div style={{marginTop: '10px', marginBottom: '10px'}}>Messages</div></em>
      <div>{message}</div>
      <form onSubmit={submit}>
        <input onChange={change} className='bubble' style={{marginTop: '0px', border: 'none', float: 'right'}} value={currentMessage}/>
      </form>
    </div>
  )
}

export default MessagePage
