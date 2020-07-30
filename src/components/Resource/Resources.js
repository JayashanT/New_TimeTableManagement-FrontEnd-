import React, { Component } from 'react'
import axios from 'axios'
import {Card,Button,Form} from 'react-bootstrap'
import resourceLogo from './resource.jpg';

import Button2 from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



toast.configure();



export class Resources extends Component {

constructor(props) {
    super(props)

    this.state = {
         resources:[],
         resourceName:null,
         resourceType:'',
         addResource:false,

         displayResource:true,

         // for edit resource
         resourceId:0 ,
         onEdit:false  

    }
}
componentDidMount(){
    axios.get('https://localhost:44396/api/Resource')
      .then(res=>{
          this.setState({resources:res.data})
      }).catch(err=>{console.log(err)})
}

onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}


onEdit=(id,rName)=>{
this.setState({resourceId:id,resourceName:rName,onEdit:true,displayResource:false})

}


//To Reload page
refreshPage=()=> {
    window.location.reload(false);
  }
  //To set Time out to refresgPage Function
  setTimeoutToRefreshpageFun=()=>{
   return setTimeout(this.refreshPage, 3000);
  }
onSubmit=(e)=>{
    e.preventDefault();
const resource={
    Name:this.state.resourceName,
    Type:this.state.resourceType
}


    axios.post('https://localhost:44396/api/Resource',resource)
    .then(res=>{
        toast.success('Resource Add successful',{autoClose:5000 })
        this.setTimeoutToRefreshpageFun();
    }).catch(err=>{
        toast.error('Resource add Fail try agin',{autoClose:5000 })
    })
}
onEditSubmit=(e)=>{
    e.preventDefault();
    const updatedResource={
        id:this.state.resourceId,
        name:this.state.resourceName,
        type:this.state.resourceType
    }
    axios.put('https://localhost:44396/api/Resource/UpdateResource',updatedResource)
      .then(res=>{
        toast.success('Resource Updated successful',{autoClose:5000 })
        this.setTimeoutToRefreshpageFun(); 
      }).catch(err=>{
        toast.error('Resource Updated Fail try agin',{autoClose:5000 }) 
      })
}


    render() {

//**********Resource add Form */

let addResourceForm=(
    <div style={{width:'500px'}}>
    <div className="container">
    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
        <form noValidate onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Add Resource</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="resourceName"
              placeholder="Enter resource Name"
            //    value={this.state.resourceName}
              onChange={this.onChange}
            />
          </div>
          
       < div className="form-group">
                  <label htmlFor="className">Grade</label>
                  <Form.Control as="select"
                  name='resourceType'
                //   value={this.state.resourceType}
                  onChange={(e)=>this.onChange(e)}
                
                  >   
                     <option>Select Resource Type</option> 
                      <option value='Sport'>Sport</option>
                      <option value='Academic'>Academic</option>
                            
              </Form.Control>
                    <br />
                    </div>
          <button
             type="submit"className="btn btn-lg btn-primary btn-block"
          >
          Add 
          </button>
        </form>
      </div>
    </div>
  </div>
  </div>

)

////******************Resource Edit Form ************************************/


let editResourceForm=(
    <div style={{width:'500px'}}>
    <div className="container">
    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
        <form noValidate onSubmit={this.onEditSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Edit Resource</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="resourceName"
              placeholder="Enter resource Name"
                value={this.state.resourceName}
              onChange={this.onChange}
            />
          </div>
          
       < div className="form-group">
                  <label htmlFor="className">Type</label>
                  <Form.Control as="select"
                  name='resourceType'
                //   value={this.state.resourceType}
                  onChange={(e)=>this.onChange(e)}
                
                  >   
                     <option>Select Resource Type</option> 
                      <option value='Sport'>Sport</option>
                      <option value='Academic'>Academic</option>
                            
              </Form.Control>
                    <br />
                    </div>
          <button
             type="submit"className="btn btn-lg btn-primary btn-block"
          >
          Save

          </button>
        </form>
      </div>
    </div>
  </div>
  </div>

)




       
/*********Resoures Cards***************************** */
        const resourceList=this.state.resources.map(resource=>
            <div key={resource.id} > 
            <Card style={{ width: '19rem',height:'450px', marginRight:'3px',  marginBottom: '10px',marginTop: '10px',marginLeft: '3px' }}>
            <Card.Img variant="top" src={resourceLogo} style={{ width: '19rem',height:'250px' }} />
            <Card.Body>
              <Card.Title>Name:{resource.name}</Card.Title>
              <Card.Text>
                      Type: {resource.type}
              </Card.Text>
           
              <Button2
        variant="danger"
        style={{backgroundColor:"#F5FFFA",marginRight:'3px'}}
        //className={this.classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button2>
              <Button variant="primary"onClick={()=>this.onEdit(resource.id,resource.name)} style={{width:'8rem'}}>Change </Button>
              
            </Card.Body>
            </Card>
            </div>
            ) 



        return (
            <div>
                  <div  style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)'}}>
                  <Button 
             onClick={()=>{this.setState({addResource:true,displayResource:false})}}
             style={{backgroundColor:'#000080',height:'450px',marginRight:'3px',  marginBottom: '10px',marginTop: '10px',marginLeft: '3px' ,width: '19rem'}}
             ><h1>Add Resources</h1></Button>

             {this.state.displayResource? resourceList:null}
              {this.state.addResource  ? addResourceForm :null}
              {this.state.onEdit? editResourceForm:null}
               
                {/*  {resourceList} */}
                </div>
            </div>
        )
    }
}

export default Resources
