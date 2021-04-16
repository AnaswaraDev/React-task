import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import SignUp from './SignUp'
import Home from './Home'

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
        </Switch>
      </Router>
    </div>
  )
}

export default App
