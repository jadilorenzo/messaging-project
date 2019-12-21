import React, {useState} from 'react'
import {Redirect, Link} from 'react-router-dom'

const Login = (props) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [failed, setFailed] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    let containsArray = props.contacts.array.map(e => e.name === name)
    if (containsArray.includes(true)) {
        props.setUser({name: name, status: status})
        window.localStorage.setItem('user', JSON.stringify({name: name, status: status}))
        setRedirect(true)
    } else {
      setFailed(true)
    }
  }

  if (redirect) {
    return <Redirect to='/messageApp'/>
  }

  return (
    <div style={{paddingTop: '10px'}}>
      Login
      <hr/>
      <form onSubmit={submit}>
        Name
        <input onChange={(e) => setName(e.target.value)} className='bubble'/>
        Status
        <input onChange={(e) => setStatus(e.target.value)} className='bubble'/>
        { failed ? <div className='red'> Name not in database. <Link to='/create_user'>Add.</Link></div> : null}
        <br/>
        <input className='bubble' style={{backgroundColor: 'dodgerblue', color: 'white', width: '20%', display: 'block', margin: 'auto'}} type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default Login
