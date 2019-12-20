import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import MessagePage from './MessagePage.jsx'
import Login from './Login.jsx'
import Api from './Api'
const api = new Api()

function App() {
  const [allMessages, setAllMessages] = useState({array: []})
  const [user, setUser] = useState({name: 'Your User', abbrev: 'me'})

  const setGlobalMessages = (x) => {
    setAllMessages(x)
    api.postMessages(x)
  }

  useEffect(() => {
    api.getMessages()
      // .then((r) => {
      //   return r
      // })
      .then((r) => setAllMessages(r))
    if (typeof window.localStorage.getItem('user') !== 'falsy') {
      setUser(JSON.parse(window.localStorage.getItem('user')))
    }
  }, [])

  return (
    <Router>
      <header>
        <div className='App-header'><span className='App-main' style={{padding: '20px'}}><h1>Message</h1> <Link to='/'>Login</Link></span></div>
      </header>
      <div className='App-main'>
        <Switch>
          <Route exact path='/messageApp'>
            <MessagePage api={api} user={user} setGlobalMessages={setGlobalMessages} messages={allMessages}/>
          </Route>
          <Route exact path='/'>
            <Login setUser={setUser}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
