import React, {useState, useEffect} from 'react'
import {Redirect, Link} from 'react-router-dom'

const Login = (props) => {
  const [name, setName] = useState('')
  const [contacts, setContacts] = useState('')

  const submit = (e) => {
    e.preventDefault()
    console.log(['name'].find(n => name === name) === name);
    props.setUser({name: name, status: null})
    window.localStorage.setItem('user', JSON.stringify({name: name, status: null}))
    props.api.postContacts()
  }

  useEffect(() => {
    props.api.postContacts()
  })

  return (
    <div style={{paddingTop: '10px'}}>
      Create Login
      <hr/>
      <form onSubmit={submit}>
        Name
        <input onChange={(e) => setName(e.target.value)} className='bubble'/>
        <input className='bubble' style={{backgroundColor: 'dodgerblue', color: 'white', width: '20%', display: 'block', margin: 'auto'}} type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default Login
