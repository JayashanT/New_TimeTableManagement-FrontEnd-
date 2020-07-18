import React, { Component } from 'react'
import axios from 'axios'
import {Button,ListGroup,Form} from 'react-bootstrap'

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure();

export class Subject extends Component {

constructor(props) {
    super(props)

    this.state = {
         subjects:[],
         addSubject:false,
         subjectName:"",
         medium:'Sinhala'
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

change=()=>{
    this.setState({addSubject:true},()=>{console.log("dhdh",this.state.addSubject)})
    
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
   return setTimeout(this.refreshPage, 2000);
  }

OnDeleteSubject=(subjectId)=>{
    console.log("aaaa",subjectId)
    axios.delete(`https://localhost:44396/api/subject/${subjectId}`)
          .then(res=>{
              console.log("Success")
          })
          .catch(err=>{
              console.log(err)
          })
}



onSubmit=(e)=>{
    e.preventDefault();
    const newSubject={
      name:this.state.subjectName,
      medium:this.state.medium 
    }

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
  const subjectList=this.state.subjects.map(subject=>
  
  <div class="col-6"> 
       
<ListGroup>
<ListGroup.Item style={{marginRight:'3px',  marginBottom: '10px',marginTop: '10px',marginLeft: '3px' }} disabled>
{subject.name} 
<Button style={{marginLeft:'25px'}} 
variant="outline-success" 
onClick={()=>this.OnDeleteSubject(subject.id )} >
    Delete Subject</Button>
</ListGroup.Item>
</ListGroup>
  </div>)

 let inputform;
  if(this.state.addSubject){
  inputform= ( 
<div>
<Form onSubmit={this.onSubmit }>
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
        
        {subjectList}
        <Button variant="warning" style={{margin:'5px'}}onClick={this.change}>Add Subject</Button>

    {inputform}

        {/* <div class="col-6">
     <h3 class="text-center">Subjects</h3>
  {subjectList}

</div> */}
</div>

    
  
    )
  }
}

export default Subject
