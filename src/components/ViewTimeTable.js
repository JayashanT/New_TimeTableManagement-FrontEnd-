import React, { Component } from 'react'

import axios from 'axios'
import {Table,Form} from 'react-bootstrap'


export class ViewTimeTable extends Component {


    constructor(props) {
        super(props)
      
        this.state = {
           classes:[],
         a:'gjhkh',
           
           grade:1,
           classId:0,
           slots:[],
           slots2:[]
           
        }
      }


a;
    onChange=(e)=>{
 
  
        this.setState({ [e.target.name]: e.target.value })
        
      }

      onSubmit=(e)=>{
        e.preventDefault()
       console.log(this.state)
       axios.get(`https://localhost:44396/api/TimeTable/GetTimeTableDetailsByClassId/${this.state.classId}`)
       .then(res=>{
         

         this.setState({slots:res.data.slot},()=>console.log(this.state.slots))

      //  console.log("aaa",this.state.slots2)

        
       })
          
        }



    getClassInGrade=(grade)=>{
        console.log("Garde=",grade)
      
        axios.get(`https://localhost:44396/api/class/GetClassesRelateToGrade/${grade}`)
        .then(response=>{
          // console.log(response.data[0].name)
            this.setState({
                classes:response.data
              
            })
           

        })
        .catch(err=>{
            console.log(err)
            this.setState({errorMsg:"This is get request Error"})
        })
      }


    render() {

        const clzList=this.state.classes.map(clz=><option  value={clz.id} key={clz.id}>{clz.name}</option>)

        return (
            < div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
              
               
                  <h1 className="h3 mb-3 font-weight-normal"> View Time table</h1>
            
                 

       < div className="form-group">
                  <label htmlFor="className">Grade</label>
                  <Form.Control as="select"
                  name='grade'
                  onChange={this.onChange}
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
                    </div>
                  <div className="form-group">
                  <label htmlFor="className">Class Name</label>
                  <Form.Control as="select"
                  name='classId'
                  onChange={this.onChange}
                  >
                    
                      {clzList}
                      
                     </Form.Control>
                    <br />
                    </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    OK
                  </button>
                </form>
              </div>
            </div>


{/* 
******************************************table********************************** */}

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
<td onClick={()=>{this.setState({a: this.state.slots.find(({period_No})=>period_No==='1_2').subject_Id},()=>console.log("dhdj"))}}>{this.state.a}</td>
      <td onClick={()=>this.handleShow(2,'2_1')}></td>
      <td onClick={()=>this.handleShow(3,'3_1')}></td>
      <td onClick={()=>this.handleShow(4,'4_1')}></td>
      <td onClick={()=>this.handleShow(5,'5_1')}></td>
      
    </tr>
    {/* <tr>
      <td>2</td>
      <td>8.15-9.00</td>
      <td onClick={()=>this.handleShow(7,'2_2')}>{this.state.subjects4[7]}</td>
      <td onClick={()=>this.handleShow(8,'3_2')}>{this.state.subjects4[8]}</td>
      <td onClick={()=>this.handleShow(6,'1_2')}>{this.state.subjects4[6]}</td>
      <td onClick={()=>this.handleShow(9,'4_2')}>{this.state.subjects4[9]}</td>
      <td onClick={()=>this.handleShow(10,'5_2')}>{this.state.subjects4[10]}</td>
    </tr> */}
</tbody>

</Table>
</div>





{/* 
******************************************table End********************************** */}
           
          </div>
                
            
        )
    }
}

export default ViewTimeTable
