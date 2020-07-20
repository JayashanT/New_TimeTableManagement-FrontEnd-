import React, { Component } from 'react'
import axios from 'axios'
import {Button,ListGroup,Form} from 'react-bootstrap'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Grid from '@material-ui/core/Grid';
import Button2 from '@material-ui/core/Button';


toast.configure();

export class Subject extends Component {

constructor(props) {
    super(props)

    this.state = {
         subjects:[],
         addSubject:false,
         editSubject:false,
         subjectName:"",
         medium:'Sinhala',
         subjectId:0  //for edit subject
    }
}



componentDidMount(){
  axios.get('https://localhost:44396/api/subject')
  .then(res=>{
    this.setState({
      subjects:res.data
    })

  })
 
}


//To display add Subject form
change=()=>{
    this.setState({addSubject:true},()=>{console.log("dhdh",this.state.addSubject)})
    
    
}

//To display Edit Subject form
change2=(subId)=>{
  this.setState({editSubject:true,subjectId:subId})
  
  console.log("dhdh",this.state.addSubject)
}


onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

//To Reload page
refreshPage=()=> {
    window.location.reload(false);
  }
//To set Time out to refresgPage Function
  setTimeoutToRefreshpageFun=()=>{
   return setTimeout(this.refreshPage, 1000);
  }

OnDeleteSubject=(subjectId)=>{
    console.log("aaaa",subjectId)
    axios.delete(`https://localhost:44396/api/subject/?id=${subjectId}`)
          .then(res=>{
            toast.success('Subject Delete Successful',{autoClose:1000 })
            this.setTimeoutToRefreshpageFun();
              console.log("Success")
          })
          .catch(err=>{
              console.log(err)
          })
}


OnUpdateSubject=(e)=>{
  
  e.preventDefault();
const Updatedsubject={
  Id:this.state.subjectId,
  name:this.state.subjectName,
  medium:this.state.medium 
}
console.log(Updatedsubject)
axios.put('https://localhost:44396/api/subject',Updatedsubject)
    .then(res=>{
      console.log("Sucess")
        toast.success('Subject name change successfully',{autoClose:2000 })
        this.setTimeoutToRefreshpageFun(); //to refresh page after 3 seconds
       // this.refreshPage();
    }).catch(err=>{
      console.log(err)
    })


}



onAddNewSubject=(e)=>{
    e.preventDefault();
    const newSubject={
      name:this.state.subjectName,
      medium:this.state.medium 
    }
console.log(newSubject)
    axios.post('https://localhost:44396/api/subject',newSubject)
    .then(res=>{
        console.log("Sucess")
        toast.success('Subject add Successful',{autoClose:2000 })
        this.setTimeoutToRefreshpageFun(); //to refresh page after 3 seconds
       // this.refreshPage();
    })
    .catch(err=>{
        console.log(err)
    })
}



  render() {


    // ********************Edit subject Form************
    let inputform2;
    if(this.state.editSubject){
    inputform2= ( 
  <div>
  <Form onSubmit={this.OnUpdateSubject } >
  <Form.Label style={{margin:'5px'}} >Updated Subject name</Form.Label>
  <Form.Control
   style={{margin:'5px' ,width:'50%'}}
   placeholder="Enter new subject name"
   type="text"
   name='subjectName'
   onChange={this.onChange}
    />
  <Button style={{margin:'5px'}} 
  type="submit" 
  variant="primary">Save</Button>
  </Form>
  </div>
  )
    }else{inputform2=<div></div>}
  



// ***************display all Subjects**************** 

  const subjectList=this.state.subjects.map(subject=>
  
  <div style={{width:'70%'}} > 
       
<ListGroup >
<ListGroup.Item style={{marginRight:'3px',  marginBottom: '10px',marginTop: '10px',marginLeft: '3px' }} disabled>
  <div>
{subject.name} </div>
<Button style={{marginLeft:'115px'}} 
variant="outline-danger" 
onClick={()=>this.OnDeleteSubject(subject.id )} >
    Delete Subject</Button>

    <Button style={{marginLeft:'25px'}} 
variant="outline-success" 
onClick={()=>this.change2(subject.id)}
 >
    Edit Subject</Button>


</ListGroup.Item>
</ListGroup>

  </div>)

  // ********************Add Subject Form********************

 let inputform;
  if(this.state.addSubject){
  inputform= ( 
<div>
<Form onSubmit={this.onAddNewSubject }>
<Form.Label style={{margin:'5px'}} >Subject Name</Form.Label>
<Form.Control
 style={{margin:'5px' ,width:'50%'}}
 placeholder="Enter subject name"
 type="text"
 name='subjectName'
  onChange={this.onChange} />
<Button style={{margin:'5px'}} 
type="submit" 
variant="primary">Add</Button>
</Form>
</div>
)
  }else{inputform=<div></div>}




    return (
      <div>
         <Grid container spacing={3}>
         <Grid item xs={6}>
        <div style={{marginRight:'3px'}}>
        {inputform2}
        </div>
        {subjectList}
        </Grid>
        <Grid item xs={6}>
     
         <Button2  style={{margin:'5px',backgroundColor:'#87CEEB'}}onClick={this.change}>Add Subject</Button2> 

    {inputform}
</Grid>
    </Grid>
</div>

    
  
    )
  }
}

export default Subject
