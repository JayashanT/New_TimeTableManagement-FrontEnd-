import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import axios from 'axios'


export class ViewTimeTable extends Component {


    constructor(props) {
        super(props)
      
        this.state = {
           classes:[],
          
           
           grade:1,
           classId:0,
           
        }
      }



    onChange=(e)=>{
 
  
        this.setState({ [e.target.name]: e.target.value })
        
      }

      onSubmit=(e)=>{
        e.preventDefault()
       console.log(this.state)
       axios.get(`https://localhost:44396/api/TimeTable/GetTimeTableDetailsByClassId/${this.state.classId}`)
       .then(res=>{
         console.log(res.data)
        
        // console.log(res.data[0].id)
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
           
          </div>
                
            
        )
    }
}

export default ViewTimeTable
