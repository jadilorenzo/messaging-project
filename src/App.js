import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MessagePage from './MessagePage'

function App() {
  const [allMessages, setAllMessages] = React.useState()
  const [user, setUser] = React.useState({name: 'Your User',   abbrev: 'me'})

  React.useEffect(() => {
    setAllMessages([
      {message: 'Hello World', user: {name: 'Computer',  abbrev: 'cpu'}},
    ])
  }, [])

  const setMessages = (x) => {
    setAllMessages(x)
  }

  return (
    <div>
      <header>
        <h1 className='App-header'><span className='App-main'>Message</span></h1>
      </header>
      <div className='App-main'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <MessagePage user={user} setMessages={setMessages} messages={allMessages}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
