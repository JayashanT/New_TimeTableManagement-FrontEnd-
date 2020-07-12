import React, { Component } from 'react'
import {Form} from 'react-bootstrap'
import axios from 'axios'

export class Timetable extends Component {



  constructor(props) {
    super(props)
  
    this.state = {
       classes:[],
       name:'',
       grade:'',
       classId:''
    }
  }
  
  componentDidMount(){
    axios.get('https://localhost:44396/api/class')
    .then(response=>{
        this.setState({
            classes:response.data
        })
       
console.log(this.state.classes)
// const userList=this.state.users.map(user=>user.name)
// console.log("aaaa");
// console.log(userList[0])
    })
    .catch(err=>{
        console.log(err)
        this.setState({errorMsg:"This is get request Error"})
    })
}


onChange=(e)=>{
  this.setState({ [e.target.name]: e.target.value })
}
onSubmit=(e)=>{
 
console.log(this.state)
this.props.history.push(`/timeTable2`)
      
}


    render() {
       const clzList=this.state.classes.map(clz=><option key={clz.id}>{clz.name}</option>)
        return (
           < div className="container">
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
                  </div>
                  <div className="form-group">
                    <label htmlFor="garde">Grade</label>
                    <input
                      type="number"
                      className="form-control"
                      name="grade"
                      placeholder="Grade"
                       value={this.state.grade}
                       onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                  <label htmlFor="className">Class Name</label>
                  <Form.Control as="select"
                  name='classId'
                  value={this.state.classId}
                  onChange={this.onChange}
                  >
                      {/* <option>Default select</option> */}
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
        )
    }
}

export default Timetable
