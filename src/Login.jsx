import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

const Login = (props) => {
  const [name, setName] = useState('')
  const [abbrev, setAbbrev] = useState('')
  const [redirect, setRedirect] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    props.setUser({name: name, abbrev: abbrev})
    window.localStorage.setItem('user', JSON.stringify({name: name, abbrev: abbrev}))
    setRedirect(true)
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
        Abbreviation
        <input onChange={(e) => setAbbrev(e.target.value)}className='bubble'/>
        <br/>
        <input className='bubble' style={{backgroundColor: 'dodgerblue', color: 'white', width: '20%', display: 'block', margin: 'auto'}} type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default Login
