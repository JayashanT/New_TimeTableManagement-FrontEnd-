import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Timetable2 from './Timetable2'

import backgroundImg from './ff.jpg';

toast.configure();



export class Timetable extends Component {



  constructor(props) {
    super(props)
  
    this.state = {
       classes:[],
       name:'',
       grade:null,
       classId:0,
       Admin_Id:0,
       visible:true,
       timeTableId:0,

       errors:{}
    }
  
  }
  
  componentDidMount(){

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      
      Admin_Id: decoded.Id
    })
  }
onChange=(e)=>{
 
  
  this.setState({ [e.target.name]: e.target.value })
  
}

getClassInGrade=(grade)=>{
  console.log("classID=",grade)

  axios.get(`https://localhost:44396/api/class/GetClassesRelateToGrade/${grade}`)
  .then(response=>{
    // console.log(response.data)
      this.setState({
          classes:response.data
        
      })
     
// console.log(this.state.classes)
// const userList=this.state.users.map(user=>user.name)
// console.log("aaaa");
// console.log(userList[0])
  })
  .catch(err=>{
      console.log(err)
      this.setState({errorMsg:"This is get request Error"})
  })
}
onValidate(){
  let errors = {};
  let isValid = true;

  if(!this.state.name){
    isValid=false
    errors["name"]="Please enter time table name"
  }
  if(!this.state.grade){
    isValid=false
    errors["grade"]="Please enter grade"
  }
this.setState({errors:errors})

return isValid;

}


onSubmit=(e)=>{
  e.preventDefault()
  const newTimeTable = {
    Name: this.state.name,
    Grade: this.state.grade,
    Admin_Id  :this.state.Admin_Id,
    Class_Id:this.state.classId
    
    
  }

  // this.setState({visible:false})
 if(this.onValidate()){
axios.post('https://localhost:44396/api/TimeTable',newTimeTable)
      .then(res=>{
  
        this.setState({timeTableId:res.data.id,visible:false})
        
        //this.setState({visible:false}) 

       // this.props.history.push(`/timeTable2`)
      }).catch(err=>{
        toast.error("Time Table already available for this Class",{autoClose:5000 });
     
       console.log(err)
      })

    }

//this.props.history.push(`/timeTable2`)
 console.log(newTimeTable)

      
}


    render() {

      const clzList=this.state.classes.map(clz=><option  value={clz.id} key={clz.id}>{clz.name}</option>)


      const styles = {
        backgroundContainer: {
            backgroundImage: `url(${backgroundImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            //backgroundColor:'#E9967A',
            height:'700px',
           
        }}
      {return this.state.visible?
       
         (
           < div className="container"  style={styles.backgroundContainer}>
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                {/* <form noValidate > */}
               
                  <h1 className="h3 mb-3 font-weight-normal"> Create Time table</h1>
                  <div className="form-group">
                    <label htmlFor="Name"> Time table name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter Name"
                       value={this.state.name}
                        onChange={this.onChange}
                    />
                     <div className="text-danger">{this.state.errors.name}</div>
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="garde">Grade</label>
                    <input
                      type="number"
                      className="form-control"
                      name="grade"
                      placeholder="Grade"
                        value={this.state.grade}
                       onChange={(e)=>this.onChange(e,this.state.grade)}
                       onClick
                      


                    />
                  </div> */}

       < div className="form-group text-info">
                  <label htmlFor="className">Grade</label>
                  <Form.Control as="select"
                  name='grade'
                  // value={this.state.classId}
                  onChange={(e)=>this.onChange(e)}
                  onClick={()=>this.getClassInGrade(this.state.grade)}
                  >   
                     <option>Select Grade</option> 
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      
                      
                     </Form.Control>
                    <br />
                    <div className="text-danger">{this.state.errors.grade}</div>
                    </div>




                  <div className="form-group">
                  <label htmlFor="className " className="text-info">Class Name</label>
                  <Form.Control as="select"
                  name='classId'
                  // value={this.state.classId}
                  onChange={this.onChange}
                  >
                    
                      {clzList}
                      
                     </Form.Control>
                    <br />
                    </div>

            {/* <h2>{userList}</h2> */}


                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    OK
                  </button>
                </form>
              </div>
            </div>
           
          </div>
        ):<Timetable2 timeTableId={this.state.timeTableId}/>
         }
    }
}

export default Timetable
