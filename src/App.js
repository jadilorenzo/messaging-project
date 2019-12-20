import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MessagePage from './MessagePage'
import Api from './Api'
const api = new Api()

function App() {
  const [allMessages, setAllMessages] = React.useState({array: []})
  const [user, setUser] = React.useState({name: 'Your User',   abbrev: 'me'})

  const setGlobalMessages = (x) => {
    setAllMessages(x)
    api.postMessages(x)
  }

  React.useEffect(() => {
    api.getRoot()
      .then((r) => {
        return r
      })
      .then((r) => setAllMessages(r))
  }, [])

  return (
    <div>
      <header>
        <h1 className='App-header'><span className='App-main'>Message</span></h1>
      </header>
      <div className='App-main'>
        <Router>
          <Switch>
            <Route exact path='/messageApp'>
              <MessagePage api={api} user={user} setGlobalMessages={setGlobalMessages} messages={allMessages}/>
            </Route>
            <Route exact path='/'>
              <Login setUser={setUser}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
