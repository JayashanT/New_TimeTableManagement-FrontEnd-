
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Switch} from 'react-router-dom'

import Navbar from './components/Home/Navbar'
import Landing from './components/Home/Landing'
import Login from './components/Login&SignUp/Login'
import Register from './components/Login&SignUp/Register'
import Profile from './components/Profile/Profile'
import Timetable from './components/TimeTable/CreateTimetable/Timetable'
import Timetable2 from './components/TimeTable/CreateTimetable/Timetable2'
import ViewTimeTable from './components/TimeTable/ViewTimeTable'
// import Admin from './components/Admin'
import AllUsers from './components/AllUsers/AllUsers'
import Subject from './components/Subject'

import Resources from './components/Resource/Resources'

import Error from './components/Error'

import {ToastProvider} from 'react-toast-notifications'
import TeacherTimeTable from './components/TeacherTimeTable'
import UpdateTimeTable from './components/TimeTable/UpdateTimeTable'

import Classes from './components/Class/Classes'
import EditUser from './components/AllUsers/EditUser'

import Changes from'./components/Changes'


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
            <Route exact path="/viewTimeTable" component={ViewTimeTable} />
            {/* <Route exact path="/admin" component={Admin} /> */}
            <Route exact path="/allUers" component={AllUsers} />
            <Route exact path="/subjects" component={Subject} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/teacherTimetable" component={TeacherTimeTable} />
            <Route exact path="/UpadteTimeTable" component={UpdateTimeTable} />
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/editProfile" component={EditUser} />

            <Route exact path='/changes' component={Changes}/>
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