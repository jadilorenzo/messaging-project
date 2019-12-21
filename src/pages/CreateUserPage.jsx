import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

const CreateUserPage = (props) => {
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [redirect, setRedirect] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    props.setUser({name: name, status: null})
    window.localStorage.setItem('user', JSON.stringify({name: name, status: null}))
    let newContacts = props.contacts
    newContacts.push({name: name, img: img})
    props.api.postContacts({array: newContacts})
    setRedirect(true)
  }

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
        <input onChange={(e) => setImg(e.target.value)} className='bubble'/>
        <input className='bubble' style={{backgroundColor: 'dodgerblue', color: 'white', width: '20%', display: 'block', margin: 'auto'}} type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default CreateUserPage
