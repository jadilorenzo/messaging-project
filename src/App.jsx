import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MessagePage from './pages/MessagePage.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import CreateUserPage from './pages/CreateUserPage.jsx'

import Api from './Api'
const api = new Api()

function App() {
  const [allMessages, setAllMessages] = useState({array: []})
  const [user, setUser] = useState({name: 'Your User', abbrev: 'me'})
  const [contacts, setContacts] = useState({array: [{}]})

  const setGlobalMessages = (x) => {
    setAllMessages(x)
    api.postMessages(x)
  }

  useEffect(() => {
    api.getMessages()
      .then((r) => setAllMessages(r))
    api.getContacts()
      .then((r) => setContacts(r))
    setUser(JSON.parse(window.localStorage.getItem('user')))
  }, [])

  return (
    <Router>
      <header>
        <div className='App-header'><span className='App-main' style={{padding: '20px'}}><h1>Local Messenger</h1> <Link to='/'>Login</Link></span></div>
      </header>
      <div className='App-main'>
        <Switch>
          <Route exact path='/messageApp'>
            <MessagePage api={api} user={user} setGlobalMessages={setGlobalMessages} messages={allMessages}/>
          </Route>
          <Route exact path='/'>
            <Login api={api} contacts={contacts} setUser={setUser}/>
          </Route>
          <Route exact path='/profile/:user'>
            <Profile contacts={contacts} api={api} setUser={setUser} user={user}/>
          </Route>
          <Route exact path='/create_user'>
            <CreateUserPage contacts={contacts} api={api} user={user} setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
