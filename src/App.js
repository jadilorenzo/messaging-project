import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import MessagePage from './MessagePage'

function App() {
  const [allMessages, setMessages] = React.useState()
  const [user, setUser] = React.useState('me')

  React.useEffect(() => {
    setMessages([
      {message: 'Hello World', user: {name: 'Computer', abbrev: 'cpu'}},
      {message: 'uhm, hi?',    user: {name: 'Your User',   abbrev: 'me'}}
    ])
  }, [])

  return (
    <div>
      <header>
        <h1 className='App-header'><span className='App-main'>Message</span></h1>
      </header>
      <div className='App-main'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <MessagePage user={user} messages={allMessages}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
