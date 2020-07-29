import React, { Component } from 'react'
import { register } from './UserFunctions'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure();

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      staff_id: '',
      contact_no: '',
      password: '',
      confirmPwd:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  validate(){
  
    let errors = {};
    let isValid = true;

    if (!this.state.name) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }
   
    var phoneno = /^\d{10}$/
    if (!this.state.contact_no) {
    
      isValid = false;
      errors["contact_no"] = "Please enter your contact_no.";

    }else{ if(!this.state.contact_no.match(phoneno))
      {isValid=false
      errors["contact_no"] = "Please enter valid contact_no.";
    }}


    if (!this.state.staff_id) {
      isValid = false;
      errors["staff_id"] = "Please enter your staff-id";
    }


    if (!this.state.password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

  
    if (!this.state.confirmPwd) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof this.state.password !== "undefined" && typeof this.state.confirmPwd !== "undefined") {
          
      if (this.state.password != this.state.confirmPwd) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    } 


    this.setState({
      errors: errors
    });

    return isValid;
}





  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      Name: this.state.name,
      Staff_Id: this.state.staff_id,
      Contact_No :this.state.contact_no,
      Password: this.state.password,
      Role_Id :1
    }
    const onSuccess=()=>{
  
      toast.success('Registration Successful',{autoClose:3000 })//3000 means close notification after 3 second
      toast.info('Please Login',{autoClose:3000 })
    
   }
   if(this.validate()){
   // console.log(newUser)
    register(newUser,onSuccess).then(res => {
      this.props.history.push(`/login`)
    })
  }
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your  name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                 <div className="text-danger">{this.state.errors.name}</div>
              </div>

              
              <div className="form-group">
                <label htmlFor="name">Contact No.</label>
                <input
                  type="tel"
                  className="form-control"
                  name="contact_no"
                  placeholder="Enter Contact number"
                  value={this.state.contact_no}
                  onChange={this.onChange}
                />
                 <div className="text-danger">{this.state.errors.contact_no}</div>

              </div>
              <div className="form-group">
                <label htmlFor="staff_id">Staff_Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="staff_id"
                  placeholder="Enter Id"
                  value={this.state.staff_id}
                  onChange={this.onChange}
                />

                 <div className="text-danger">{this.state.errors.staff_id}</div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                /><div className="text-danger">{this.state.errors.password}</div>
              </div>
              <div className="form-group">
                <label htmlFor="password"> Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPwd"
                  placeholder="Password"
                  value={this.state.confirmPwd}
                  onChange={this.onChange}
                /><div className="text-danger">{this.state.errors.confirm_password}</div>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
