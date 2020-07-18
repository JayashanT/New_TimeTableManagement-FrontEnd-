import React, { Component } from 'react'
import {Table,Form,Button,Modal} from 'react-bootstrap'
import axios from 'axios'


export class Timetable2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false,
             subjects:[],
             subjects2:[],
             subjects4:[],
             teachers:[],
             
             
             slot:{
               day:'default',
               sTime:'1:1',
               eTime:'2:1',
               periodNo:0,
               timeTableId:0,
               teacherId:0,
               subjectId:0,
               resourceId:1012
             }
        }
    }

//To set timeTable Id
static getDerivedStateFromProps(props,state){
     
 console.log(props.timeTableId)
  state.slot.timeTableId=props.timeTableId
 
 return null;
 
    }




    componentDidMount(){
      
        axios.get('https://localhost:44396/api/subject')
        .then(response=>{
          console.log(response.data)
            this.setState({
                subjects:response.data
            },
            // ()=>{ this.state.subjects3=this.state.subjects.map(subject=>subject.name)
              
            // }
            )
        })
        .catch(err=>{
            console.log(err)
           
        })

        
    }





handleClose = () => this.setState({show:false});

value;
Period_No;


handleShow = (a,periodNo) => {
  this.value=a
  this.Period_No=periodNo
  console.log(a)

 this.state.slot.periodNo=periodNo;

    this.setState({show:true})

};

onSubmit=(e)=>{

 e.preventDefault();
 const newSlot = {
  Day:this.state.slot.day,
  Start_Time:this.state.slot.sTime,
  End_Time:this.state.slot.eTime,
  Period_No:this.state.slot.periodNo,
  Time_Table_Id:this.state.slot.timeTableId,
   Teacher_Id:this.state.slot.teacherId,
   Subject_Id:this.state.slot.subjectId,
   Resource_Id:this.state.slot.resourceId
}
 axios.post("https://localhost:44396/api/TimeTable/AddSlot",newSlot)
          .then(res=>{
         console.log("successsssssssssss")
         
          }).catch(err=>{
            console.log("fail")
            console.log(err)
          })
   

    console.log(this.state)
    this.handleClose();
   
}


onChange=(e,index)=> {
const subId=e.target.value;
  axios.get(`https://localhost:44396/api/subject/${subId}`)
  .then(res=>{
    // console.log(res.data[0].name)
    this.state.subjects4[index]=res.data[0].name;
    
  }).catch(err=>{console.log(err)})
  
      //set the changed state
    this.state.subjects2[index]=e.target.value;
    this.state.slot.subjectId=e.target.value;
    this.setState({
      subjects2:this.state.subjects2,
   
    })
    this.SubjectId=this.state.subjects2[index]
  }

onChange2=(e)=>{


  this.state.slot.teacherId=e.target.value
  // this.setState({
    
  //   slot:{
     
  //     teacherId:e.target.value}
  // })
}


getAvailableTeachers=()=>{
  console.log(this.SubjectId)
axios.get(`https://localhost:44396/api/TimeTable/GetAvailableTeachers?Period_No=${this.Period_No}&SubjectId=${this.SubjectId}`)
         .then(res=>{
           this.setState({teachers:res.data})
        // console.log(res.data)
         }).catch(err=>{
           
           console.log(err)
         })
  }




    render() {


const subjectList=this.state.subjects.map(subject=><option  value={subject.id} key={subject.id}>{subject.name}</option>)
const teacherList=this.state.teachers.map(teacher=><option value={teacher.id} key={teacher.id}>{teacher.name}</option>)





const fillForm=(
 
<div key={this.value}>
<Form onSubmit={this.onSubmit }>
<Form.Group controlId="formBasicEmail">
  <Form.Label>Subject</Form.Label>
  <Form.Control as="select"
                 // name='subject_1'
               //  value={this.state.subjects[0]}
                  onChange={(e)=>this.onChange(e,this.value)}
                  onClick={this.getAvailableTeachers}
                  >
                      <option>Default select</option>
                      {subjectList}
                      
                     </Form.Control>

                     <Form.Label>Teachers</Form.Label>
  <Form.Control as="select"
                  // name='subject_1'
                 // value={this.state.teachers}
                  onChange={this.onChange2}
                  //onClick={this.abc}
                  >
                      <option>Default select</option>
                      {teacherList}
                      
                     </Form.Control>

  <Form.Text className="text-muted">
 
  </Form.Text>
</Form.Group>


<Button  variant="primary" type="submit">
  Add
</Button>
</Form>
</div>
)
  


        return (
<div>

<Modal show={this.state.show} >
{fillForm}
</Modal>


            <div>
               <Table responsive Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th></th>
      <th>Time Slot</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wedesday</th>
      <th>Thursday</th>
      <th>Friday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>7.30-8.15</td>
      <td onClick={()=>this.handleShow(1,'1_1')}>{this.state.subjects4[1]}</td>
      <td onClick={()=>this.handleShow(2,'2_1')}>{this.state.subjects4[2]}</td>
      <td onClick={()=>this.handleShow(3,'3_1')}>{this.state.subjects4[3]}</td>
      <td onClick={()=>this.handleShow(4,'4_1')}>{this.state.subjects4[4]}</td>
      <td onClick={()=>this.handleShow(5,'5_1')}>{this.state.subjects4[5]}</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>8.15-9.00</td>
      <td onClick={()=>this.handleShow(7,'2_2')}>{this.state.subjects4[7]}</td>
      <td onClick={()=>this.handleShow(8,'3_2')}>{this.state.subjects4[8]}</td>
      <td onClick={()=>this.handleShow(6,'1_2')}>{this.state.subjects4[6]}</td>
      <td onClick={()=>this.handleShow(9,'4_2')}>{this.state.subjects4[9]}</td>
      <td onClick={()=>this.handleShow(10,'5_2')}>{this.state.subjects4[10]}</td>
    </tr>
    <tr>
      <td>3</td>
      <td>9.00-9.45</td>
      <td onClick={()=>this.handleShow(11,'1_3')}>{this.state.subjects4[11]}</td>
      <td onClick={()=>this.handleShow(12,'2_3')}>{this.state.subjects4[12]}</td>
      <td onClick={()=>this.handleShow(13,'3_3')}>{this.state.subjects4[13]}</td>
      <td onClick={()=>this.handleShow(14,'4_3')}>{this.state.subjects4[14]}</td>
      <td onClick={()=>this.handleShow(15,'5_3')}>{this.state.subjects4[15]}</td>
    </tr>
    <tr>
      <td>4</td>
      <td>9.45-10.30</td>
      <td onClick={()=>this.handleShow(16,'1_4')}>{this.state.subjects4[16]}</td>
      <td onClick={()=>this.handleShow(17,'2_4')}>{this.state.subjects4[17]}</td>
      <td onClick={()=>this.handleShow(18,'3_4')}>{this.state.subjects4[18]}</td>
      <td onClick={()=>this.handleShow(19,'4_4')}>{this.state.subjects4[19]}</td>
      <td onClick={()=>this.handleShow(20,'5_4')}>{this.state.subjects4[20]}</td>
    </tr>


{/* interval */}

<tr>
      <td>5</td>
      <td>11.00-11.45</td>
      <td onClick={()=>this.handleShow(21,'1_5')}>{this.state.subjects4[21]}</td>
      <td onClick={()=>this.handleShow(22,'2_5')}>{this.state.subjects4[22]}</td>
      <td onClick={()=>this.handleShow(23,'3_5')}>{this.state.subjects4[23]}</td>
      <td onClick={()=>this.handleShow(24,'4_5')}>{this.state.subjects4[24]}</td>
      <td onClick={()=>this.handleShow(25,'5_5')}>{this.state.subjects4[25]}</td>
    </tr>
    <tr>
      <td>6</td>
      <td>11.45-12.30</td>
      <td onClick={()=>this.handleShow(26,'1_6')}>{this.state.subjects4[26]}</td>
      <td onClick={()=>this.handleShow(27,'2_6')}>{this.state.subjects4[27]}</td>
      <td onClick={()=>this.handleShow(28,'3_6')}>{this.state.subjects4[28]}</td>
      <td onClick={()=>this.handleShow(29,'4_6')}>{this.state.subjects4[29]}</td>
      <td onClick={()=>this.handleShow(30,'5_6')}>{this.state.subjects4[30]}</td>
    </tr>
    <tr>
      <td>7</td>
      <td>12.30-1.15</td>
      <td onClick={()=>this.handleShow(31,'1_7')}>{this.state.subjects4[31]}</td>
      <td onClick={()=>this.handleShow(32,'2_7')}>{this.state.subjects4[32]}</td>
      <td onClick={()=>this.handleShow(33,'3_7')}>{this.state.subjects4[33]}</td>
      <td onClick={()=>this.handleShow(34,'4_7')}>{this.state.subjects4[34]}</td>
      <td onClick={()=>this.handleShow(35,'5_7')}>{this.state.subjects4[35]}</td>
    </tr>

    <tr>
      <td>8</td>
      <td>1.15-2.00</td>
      <td onClick={()=>this.handleShow(36,'1_8')}>{this.state.subjects4[36]}</td>
      <td onClick={()=>this.handleShow(37,'2_8')}>{this.state.subjects4[37]}</td>
      <td onClick={()=>this.handleShow(38,'3_8')}>{this.state.subjects4[38]}</td>
      <td onClick={()=>this.handleShow(39,'4_8')}>{this.state.subjects4[39]}</td>
      <td onClick={()=>this.handleShow(40,'5_8')}>{this.state.subjects4[40]}</td>
    </tr>

  </tbody>
</Table> 
            </div>
            </div>
        )
    }
}

export default Timetable2
