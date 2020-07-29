import React, { Component } from 'react'
import { login } from './UserFunctions'

import{useToasts} from'react-toast-notifications' //notification msg display kirimata
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure();
class Login extends Component {





  constructor() {
    super()
    this.state = {
      Staff_Id: null,
      password: null,
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

onValidate(){
  let errors = {};
  let isValid = true;

  if(!this.state.Staff_Id){
    isValid=false
    errors["staff_id"]="Please enter your staff-id"
  }
  if(!this.state.password){
    isValid=false
    errors["password"]="Please enter your password"
  }
this.setState({errors:errors})

return isValid;

}


  onSubmit=(e) =>{
    e.preventDefault()

    const user = {
      Staff_Id: this.state.Staff_Id,
      password: this.state.password
    }
   // console.log(user)
 const onSuccess=()=>{
  
    toast.success('Login Successful',{autoClose:3000 })//3000 means close notification after 3 second
  
 }
 const onFail=()=>{
  
  toast.error('Incorrect Staff Id or Password',{autoClose:5000 })//5000 means close notification after 5 second

}


 if(this.onValidate()){login(user,onSuccess,onFail).then(res => {
       
      if (res) {
        console.log(res)
          this.props.history.push(`/profile`)
      }else{
        this.setState({
          Staff_Id:'',
          password:''
        })
      }
    })}
  }

  render() {

    
  
     
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit }>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="Staff_Id">Staff_Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="Staff_Id"
                  placeholder="Enter Staff_Id"
                  value={this.state.Staff_Id}
                  onChange={this.onChange}
                />
                <div className='text-danger'>{this.state.errors.staff_id}</div>
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
                />
                <div className='text-danger' >{this.state.errors.password}</div>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login