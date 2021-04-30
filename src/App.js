import 'tailwindcss/tailwind.css'
import './index.css'

//import logo from './logo.svg'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Homeone from './Homeone'
import Message from './Message'
import { MsgContext } from './contexts/MsgContext'
import MsgSend from './MsgSend'
import MyForm from './MyForm'
import Profile from './Profile'
import React from 'react'
import ReactDOM from 'react-dom'
import Sample from './sample'
import SampleForm from './SampleForm'
import SignUp from './SignUp'
import Test2 from './Test2'

function App() {
    // const [myFieldValue, setmyFieldValue] = React.useState('')
    //const [formData, setformData] = React.useState(false);
    //const [showmsg, setShowmsg] = React.useState("")

    const [showProfile, setShowProfile] = React.useState(false)
    const [msg, setMsg] = React.useState('')
    //console.log("show profile is ",showProfile);
    //console.log(Profile);
    return (
        <div className="container mx-auto">
            <div>
                <MsgContext.Provider value={{ msg, setMsg, setShowProfile }}>
                    {showProfile ? <Profile /> : <MsgSend />}
                </MsgContext.Provider>
            </div>

            <Router>
                <Switch>
                    <Route exact path="/SampleForm">
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

                    <Route path="/MyForm">
                        <MyForm />
                    </Route>

                    <Route path="/Sample">
                        <Sample />
                    </Route>
                    <Route path="/Home4">
                        <Home4 />
                    </Route>
                    <Route path="/Home1">
                        <Home1 />
                    </Route>
                    <Route exact path="/user/:key" component={Home2}></Route>

                    <Route path="/Home3">
                        <Home3 />
                    </Route>

                    <Route path="/profile">
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
/* <div>
             <MsgContext.Provider value={{showmsg, setShowmsg ,setformData}}>
            {formData? <Home3/>:<Home4/>}
            </MsgContext.Provider>
            </div>*/
