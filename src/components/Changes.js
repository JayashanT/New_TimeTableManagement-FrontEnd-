import React, { Component } from 'react'
import axios from 'axios'
import {Button,Card, Form,Modal} from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
// import './AllUsers.css'


class Releif extends Component{
    constructor(props) {
        super(props)
        this.state={
            ReleifPeriods:[],
          
            update:{
                Admin_Id:null,
                Slot_Id:null,
                Teacher_Id:null

            },
            period_No:null,
            modelShow:false,
            availableTeachers:[]
            //subjectId:null

        }
    }

componentDidMount=()=>{
    

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    

    axios.get('https://localhost:44396/api/Relief')
    .then(res=>{

    this.setState({
          ReleifPeriods:res.data,
          update:{
             ... this.state.update,
             Admin_Id:decoded.Id
          }
    })
    console.log(this.state.ReleifPeriods);
})
}

// get available teachers
onChange=(period_No,slot_Id,subjectId)=>{
    console.log(subjectId)
axios.get(`https://localhost:44396/api/Relief/GetAvailableTeachersForReleif/?PeriodNo=${period_No}&SubjectId=${subjectId}`)
    .then(res=>{
        this.setState({availableTeachers:res.data})
        console.log("success")
    }).catch(err=>{console.log(err)})

this.setState({
    update:{
        ...this.state.update,
        
        Slot_Id:slot_Id
    },
    period_No:period_No
})
}

// get teacher id from model by teacher list

onChange2=(e)=>{
    console.log(e.target.value)
this.setState({
    update:{
   ...this.state.update,
   Teacher_Id:e.target.value
}
})
}

 onSubmit=(e)=>{
  e.preventDefault();

  console.log("sss",this.state.update)
this.setState({modelShow:false})
axios.post('https://localhost:44396/api/Relief',this.state.update)
    .then(res=>{
        
        console.log("successfulll")
    }).catch(err=>{console.log(err)})


 }



render(){
    const teacherList=this.state.availableTeachers.map(teacher=><option value={teacher.id} key={teacher.id}>{teacher.name}</option>)


const setTeachersForm=(
    <div >
    <Form onSubmit={this.onSubmit}>
    {/* // <Form> */}
    <Form.Group controlId="formBasicEmail">
      <Form.Control as="select"
                     
                     // value={this.state.teachers}
                    onChange={this.onChange2}
                    ////  onChange={this.onChange2}
                      >
                          <option>Default select</option>
                          {teacherList}
                          
                         </Form.Control>
    
      <Form.Text className="text-muted">
     
      </Form.Text>
    </Form.Group>
    
    
    <Button variant="primary" type="submit" >
      Add
    </Button>
    </Form>
    </div>

)



   
          
    const releifList=this.state.ReleifPeriods.map(releif=>
        <div key={releif.id} onClick={()=>this.onChange(releif.period_No,releif.id,releif.subject_Id)}> 
            <Card style={{ width: '18rem',height:'200px', marginRight:'3px',  marginBottom: '10px',marginTop: '10px',marginLeft: '3px' }}>
            <Card.Body>
                    <Card.Text>
                        <p>Day: {releif.day}</p>
                        <p>Period No: {releif.period_No}</p>
                        <p>Subject : {releif.subject_Name}</p>
                    </Card.Text>
                    <Button variant="success " onClick={()=>this.setState({modelShow:true})}>Allocate Releif</Button>
                </Card.Body>
            </Card>
        </div>)

    return(
        <div>
             <Modal show={this.state.modelShow} >
             {setTeachersForm}
             </Modal>
            <div style={{alignSelf:'center',fontSize:24,fontWeight:'bold',backgroundColor:'#87CEFA',marginTop:10,padding:10,color:'white'}}>Periods Not Covered today</div>
            {/* <div className='inLine'> */}
            <div style={{ display:'grid',gridTemplateColumns: 'repeat(5,1fr)'}}>
                {releifList}
            </div>
        </div>
    );
}
}

export default Releif;