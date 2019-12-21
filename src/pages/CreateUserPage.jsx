import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

const CreateUserPage = (props) => {
  const [name, setName] = useState('')
  const [contacts, setContacts] = useState('')
  const [redirect, setRedirect] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    props.setUser({name: name, status: null})
    window.localStorage.setItem('user', JSON.stringify({name: name, status: null}))
    let newContacts = contacts
    newContacts.push(name)
    props.api.postContacts({array: newContacts})
    setRedirect(true)
  }

  useEffect(() => {
    props.api.getContacts().then(({array}) => setContacts(array))
  }, [props.api])

  if (redirect) {
    return <Redirect to='/messageApp'/>
  }

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

export default CreateUserPage
