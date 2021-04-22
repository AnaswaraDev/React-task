//import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import SignUp from './SignUp'
import Homeone from './Homeone'
import 'tailwindcss/tailwind.css'
import './index.css'
import Message from './Message'
import Test2 from './Test2'
import SampleForm from './SampleForm'

function App() {
    return (
        <div className="container mx-auto">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SampleForm />
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

                    <Route path="/Test2">
                        <Test2 />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
