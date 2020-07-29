import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

import { Link } from 'react-router-dom'
import {Button,Card} from 'react-bootstrap'
import adminImg from './aa.png';

import Button2 from '@material-ui/core/Button';


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

    const styles = {
      backgroundContainer: {
         // backgroundImage: `url(${backgroundImg})`,
         // backgroundRepeat: 'no-repeat',
         // backgroundSize: 'auto',
          backgroundColor:'#FFF5EE',
          height:'800px'
          
      },
      backgroundContainer2:{
        backgroundColor:'#87CEFA',
      },
      button:{
         /* Green */
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '26px',
        // borderRadius: '8px',
        width:'350px',
        height:'200px'
      }
      
     
    }


    const adminUSer=(
    <div>
    
 <td><Link to="/timeTable" className="nav-link">
                <Button  style={styles.button} variant="danger">Create Time Table</Button>
          </Link></td>

          <td><Link to="/UpadteTimeTable" className="nav-link">
                <Button style={styles.button} variant="success">Edit Time Table</Button>
          </Link></td>

{/* <td><Link to="/admin" className="nav-link">
    <Button style={styles.button}  variant="warning">View Admin Dashboard</Button>
</Link></td><br/> */}



<td>
<Link to="/allUers" className="nav-link">
     <Button2 style={styles.button} variant="contained" color="primary" >
        Users Settings
      </Button2>
      </Link></td><br/>
<td>
      <Link to="/classes" className="nav-link">
      <Button2 variant="contained" color="secondary" style={styles.button} >
        Modify Class
      </Button2>
      </Link></td>
<td>
      <Link to="/subjects" className="nav-link" >
      <Button2 variant="contained"color="primary" style={styles.button} >
        Modify Subjets
      </Button2>
      </Link></td>
      
      <td>
      <Link to="/resources" className="nav-link">
      <Button variant="warning"  style={styles.button} >
        MODIFY RESOURCES
      </Button>
      </Link></td>
<br/>
<td>
      <Link to="/changes" className="nav-link">
      <Button variant="danger"  style={styles.button} >
        Relief
      </Button>
      </Link></td>



















</div>
)


const teacherViewMytable=(
  <div>
  <td><Link to='/teacherTimetable' className="nav-link">
  <Button  style={styles.button} variant="info">View My Time Table</Button>
</Link></td>
</div>
)








    return (
     
  
  <div class="row" >
    <div class="col-3"  >
    <div style={styles.backgroundContainer}>
      <div>
        <div >
          
          <div>
            <h1 className="text-center">PROFILE</h1>
          </div>
        <div >
          {/* <Card style={{ width: '18rem' ,height:'300px',marginLeft:'35px',backgroundColor:'#E0FFFF'}}> */}
      <Link to="/editProfile" className="nav-link">
  <Card.Img variant="top"style={{height:"100px", borderRadius: '50%',width:'8rem',margin:'5px'}} 
  src={adminImg}/>
  </Link>
  <Card.Body>
    <Card.Title>{this.state.first_name}</Card.Title>
    <Card.Text>
    Contact number :{this.state.contact_no}
    </Card.Text>
    <Card.Text>
    Staff Id :{this.state.staff_id}
    </Card.Text>
  </Card.Body>
{/* </Card> */}
</div>








          {/* <table className="table col-md-6 mx-auto">
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
                
                <td>
          </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
      </div>
    </div>
    <div class="col-9"   >
      
      <td>
      <Link to="/viewTimeTable" className="nav-link">
                    <Button size="lg" style={styles.button} 
                    variant="secondary">View Time Tables</Button>
                   </Link></td>
             {this.state.role_id==1 ? adminUSer :null}
             {this.state.role_id==2 ? teacherViewMytable:null}
    </div>
    
    
  </div>

    )
  }
}

export default Profile