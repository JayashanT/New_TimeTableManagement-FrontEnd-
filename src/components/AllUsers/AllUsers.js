import React, { Component } from 'react'
import axios from 'axios'
import {Button,Card} from 'react-bootstrap'
import './AllUsers.css'
import userLogo from './user.png';

import jwt_decode from 'jwt-decode'
import {Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import EditUser from './EditUser';



toast.configure();

export class AllUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[],
            subjects:[],
              name: '',
              staff_id: '',
              contact_no: '',
              password: '',

              teacherId:0,
              subjectId:0,
             
             addTeacherform:false,
             addTeacherSubject:false,

             displayEditForm:false
        }
    }
    
componentDidMount(){
    axios.get('https://localhost:44396/api/user')
      .then(res=>{
          this.setState({
              users:res.data
          })
          console.log(this.state.users)
      })

      axios.get('https://localhost:44396/api/subject')
      .then(res=>{
        console.log(res.data)
          this.setState({
              subjects:res.data
          })
      
      })  .catch(err=>console.log(err))
}


onChange=(e)=> {
  this.setState({ [e.target.name]: e.target.value })
}


 onSubmit=(e)=>{
     e.preventDefault();
     const teacher={
      Name: this.state.name,
      Staff_Id: this.state.staff_id,
      Contact_No :this.state.contact_no,
      Password: this.state.password,
      Role_Id :2

     }

     axios.post('https://localhost:44396/api/user',teacher)
           .then(res=>{
            
             console.log(res.data.token)
             const decoded = jwt_decode(res.data.token)
             console.log(decoded.Id)
             this.setState({addTeacherSubject:true,teacherId:decoded.Id})      
           }).catch(err=>{
            toast.error('Teacher Registration error change staff_id and try',{autoClose:5000 })
             console.log(err)
           })
 }

//To Reload page
refreshPage=()=> {
  window.location.reload(false);
}
//To set Time out to refresgPage Function
setTimeoutToRefreshpageFun=()=>{
 return setTimeout(this.refreshPage, 3000);
}

addTeacherToSubject=(e)=>{
e.preventDefault();
const a={
  Teacher_Id :this.state.teacherId,
  Subject_Id:this.state.subjectId
}
console.log('aaa',a)

  axios.post('https://localhost:44396/api/subject/teacher_subject',a)
  .then(res=>{
    console.log("success")
    this.setState({addTeacherSubject:false})
    toast.success('Teacher and Subject add Successful',{autoClose:5000 })
   this.setTimeoutToRefreshpageFun();
  }).catch(err=>{
    console.log(err)
    toast.error('Teacher Subject add fail',{autoClose:3000 })
    
  })
}



    render() {

//****************Add user Form */
    let addUserForm=(
    <div style={{width:'500px'}}>
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
          </div>
          <button
             type="submit"
            // onClick={()=>{this.setState({addTeacherSubject:true})}}
            className="btn btn-lg btn-primary btn-block"
          >
            Register
          </button>

     

        </form>
      </div>
    </div>
  </div>
  </div>
  )

  //**************Edit user Form ****************/
const editUserForm=(
  <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            {/* <form noValidate onSubmit={this.onSubmit}> */}
            <form>
              <h1 className="h3 mb-3 font-weight-normal">Edit User</h1>
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
                 {/* <div className="text-danger">{this.state.errors.name}</div> */}
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
                 {/* <div className="text-danger">{this.state.errors.contact_no}</div> */}

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

                 {/* <div className="text-danger">{this.state.errors.staff_id}</div> */}
              </div>

              {/* <div className="form-group">
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
              </div> */}
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
               Save
              </button>
            </form>
          </div>
        </div>
      </div>
)




const subjectList=this.state.subjects.map(sub=><option  value={sub.id} key={sub.id}>{sub.name}</option>)
const userAddSubjectForm=(
<div style={{width:'500px'}}>
    <div className="container">
    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
        <form onSubmit={this.addTeacherToSubject}>
          <h1 className="h3 mb-3 font-weight-normal">Select Subject</h1>
          <div className="form-group">
                  <label htmlFor="className">Subject ame</label>
                  <Form.Control as="select"
                  name='subjectId'
                  onChange={this.onChange}
                  >
                    
                      {subjectList}
                      
                     </Form.Control>
                    <br />
                    </div>
          
          <button
            // type="submit"
            onClick={()=>{this.setState({addTeacherform:false})}}
            className="btn btn-lg btn-primary btn-block"
          >
            Ok
          </button>

     

        </form>
      </div>
    </div>
  </div>
  </div>


)



const userList=this.state.users.map(user=>
<div key={user.id} > 
<Card style={{ width: '18rem',height:'400px', marginRight:'3px',  marginBottom: '10px',marginTop: '10px',marginLeft: '3px' }}>
<Card.Img variant="top" src={userLogo} style={{ width: '18rem',height:'250px' }} />
<Card.Body>
  <Card.Title>Name:{user.name}</Card.Title>
  <Card.Text>
 User Id: {user.id}
  </Card.Text>
  <Button variant="danger" style={{marginRight:'5px'}}>Delete User</Button>
  <Button variant="success"
  onClick={()=>this.setState({
    name:user.name,staff_id:user.staff_Id,contact_no:user.contact_No,
    password:user.password,userId:user.id,
    roleId:user.role_Id,displayEditForm:true})} >Edit User</Button>
</Card.Body>
</Card>

</div>
)

       { return !this.state.displayEditForm? (
            <div className='inLine'>
             <Button 
             onClick={()=>{this.setState({addTeacherform:true})}}
             style={{backgroundColor:'#20B2AA',height:'400px',marginRight:'3px',  marginBottom: '10px',marginTop: '10px',marginLeft: '3px' }}
             ><h1>Add Teacher</h1></Button>
                {this.state.addTeacherform ? addUserForm:userList }
               {/* {userList} */}
                 {this.state.addTeacherSubject? userAddSubjectForm:null}
               
             
               
            </div>
        ):<EditUser
         name={this.state.name} 
         contact_no={this.state.contact_no}
         staff_id={this.state.staff_id}
         password={this.state.password}
         userId={this.state.userId}
         roleId={this.state.roleId}
        />
       }
    }
}

export default AllUsers
