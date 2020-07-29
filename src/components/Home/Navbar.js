import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {

const heading={
  color:'#FAEBD7'
}
const linkClour={
  color:'#8FBC8F',
  hover:{
    color:"red"
  }
}
const logoutBtnColor={
  color:'#CD5C5C'
}

    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link" style={linkClour}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link" style={linkClour}>
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link" style={logoutBtnColor}>
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        
              <Link to="/" className="nav-link">
              <ul className="navbar-nav">
         
         <li className="nav-item" style={heading}>Time Table Management System
         </li>
         </ul>
              </Link>
            
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
         
            <li className="nav-item" >
              <Link to="/" className="nav-link" style={linkClour}>
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)