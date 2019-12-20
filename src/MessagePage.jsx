import React, {useState} from 'react'

const MessagePage = (props) => {
  console.log(props);
  const messagesArray = props.messages.array
  const [currentMessage, setCurrentMessage] = useState('')

  const change = (e) => {
    setCurrentMessage(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    const array = messagesArray
    array.push({message: currentMessage, user: props.user})
    console.log('submit >> array', array);
    props.setGlobalMessages({array: array})
    setCurrentMessage('')
  }

  console.log('messagesArray', messagesArray);
  const message = messagesArray.map((x, index) => {
    if (x.user.abbrev === props.user.abbrev) {
      return <div key={index} className='bubble'><b>{x.user.name}</b>: {x.message}</div>
    } else {
      return <div key={index} className='bubble'><b>{x.user.name}</b>: {x.message}</div>
    }
  })

  return (
    <div className='screen'>
      <em><div style={{marginTop: '10px', marginBottom: '10px'}}>Messages</div></em>
      <div>{message}</div>
      <form onSubmit={submit}>
        <input className='input' onChange={change} className='bubble' style={{marginTop: '0px', border: 'none', float: 'left'}} value={currentMessage}/>
      </form>
    </div>
  )

  return null
}

export default MessagePage
