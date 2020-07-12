
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Timetable from './components/Timetable'
import Timetable2 from './components/Timetable2'

import Error from './components/Error'

import {ToastProvider} from 'react-toast-notifications'

class App extends Component {
  render() {
    return (
      <Router>
        <ToastProvider autoDismiss={true}>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Landing} />
          
          {/* <div className="container"> */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/timeTable" component={Timetable} />
            <Route exact path="/timeTable2" component={Timetable2} />
            <Route component={Error}/>
          {/* </div> */}
          </Switch>
        </div>
        </ToastProvider>
      </Router>

      
    )
  }
}

export default App