import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      contact_no: '',
      staff_id: '',
      role_id:0,
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.Name,
      contact_no: decoded.Contact_No,
      staff_id: decoded.Staff_Id,
      role_id:decoded.Role_Id
    })
  }


  render() {


    const adminUSer=(
    <div>
    
 <td><Link to="/timeTable" className="nav-link">
                <Button variant="success">Create Time Table</Button>
          </Link></td>

<td><Link to="/admin" className="nav-link">
    <Button variant="warning">View Admin Dashboard</Button>
</Link></td>
</div>
)


const teacherViewMytable=(
  <div>
  <td><Link to='' className="nav-link">
  <Button variant="info">View My Time Table</Button>
</Link></td>
</div>
)








    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td> Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Contact number</td>
                <td>{this.state.contact_no}</td>
              </tr>
              <tr>
                <td>Staff Id</td>
                <td>{this.state.staff_id}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td><Link to="/viewTimeTable" className="nav-link">
                    <Button variant="secondary">View Time Tables</Button>
                   </Link></td>
             {this.state.role_id==1 ? adminUSer :null}
             {this.state.role_id==2 ? teacherViewMytable:null}
          
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile