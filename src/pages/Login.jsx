import React, {useState, useEffect} from 'react'
import {Redirect, Link} from 'react-router-dom'

const Login = (props) => {
  const [name, setName] = useState('')
  const [abbrev, setAbbrev] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [users, setUsers] = useState([])
  const [failed, setFailed] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    console.log(['name'].find(n => name === name) === name);
    if (users.find(n => n === name) === name) {
        props.setUser({name: name, abbrev: abbrev})
        window.localStorage.setItem('user', JSON.stringify({name: name, abbrev: abbrev}))
        setRedirect(true)
    } else {
      setFailed(true)
    }
  }

  useEffect(() => {
    props.api.getContacts().then(setUsers)
  }, [])

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
        <input onChange={(e) => setAbbrev(e.target.value)} className='bubble'/>
        { failed ? <div className='red'> Name not in database. <Link to='/create_user'>Add.</Link></div> : null}
        <br/>
        <input className='bubble' style={{backgroundColor: 'dodgerblue', color: 'white', width: '20%', display: 'block', margin: 'auto'}} type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default Login
