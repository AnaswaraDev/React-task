import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import SignUp from './SignUp'
import Home from './Home'
import Homeone from './Homeone'
import "tailwindcss/tailwind.css"
import './index.css';
import Message from './Message'
function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>

          <Route path="/Homeone">
            <Homeone />
          </Route>

          <Route path="/Message">
            <Message />
          </Route>

        </Switch>

        
      </Router>
    </div>
  )
}

export default App
