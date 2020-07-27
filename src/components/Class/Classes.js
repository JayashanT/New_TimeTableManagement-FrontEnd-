import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button,Form } from 'react-bootstrap';

import axios from 'axios';


import backgroundImg from './background.jpg';

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure();
///*************************************** */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'800px'
  },
  paper: {
   padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:'#E0FFFF'
  },
}));
//***************************************************** */


/***  Start Functional Component */
 function Classes() {

  const classes2 = useStyles();

  const initialState={
      deleteFormdisplay:false,
      clzList:[],
      grade:'',
      classId:0,
      
      addFormdisplay:false,
      className:'',

      updateFormdisplay:false

  }
  const [classes,setClasses]=useState(initialState)

 

const onChange=(e)=>{
  
  setClasses({...classes,[e.target.name]:e.target.value})

  }

const getClassInGrade=(grade)=>{
  axios.get(`https://localhost:44396/api/class/GetClassesRelateToGrade/${grade}`)
          .then(res=>{
           
                setClasses({...classes,clzList:res.data})
          }).catch(err=>{console.log(err)})
}
//For delete class
const onDelete=(e)=>{
  e.preventDefault()
  axios.delete(`https://localhost:44396/api/class?Id=${classes.classId}`)
    .then(res=>{
      toast.success(' Class delete Success',{autoClose:3000 })
      setClasses({...classes,deleteFormdisplay:!classes.deleteFormdisplay})
    }).catch(err=>{
      console.log(err)
      toast.error(' Class delete UnSuccessful, try again',{autoClose:3000 })
      setClasses({...classes,deleteFormdisplay:!classes.deleteFormdisplay})
    })
 // console.log(classes)
}

//For add new class
const onAdd=(e)=>{
  e.preventDefault()
  const newClass={
     name:classes.className,
     grade:classes.grade
  }
axios.post('https://localhost:44396/api/class',newClass)
  .then(res=>{
    console.log("Suuucccccc")
    toast.success('New Class Added Success',{autoClose:3000 })
    setClasses({...classes,addFormdisplay:!classes.addFormdisplay})
  }).catch(err=>{
    console.log(err)
    toast.error('This Class Already exist',{autoClose:3000 })
    setClasses({...classes,addFormdisplay:!classes.addFormdisplay})
  })

  //console.log(newClass)
}


//For update exisiting  class
const onUpdate=(e)=>{
e.preventDefault();
const updatedClass={
  name:classes.className,
  grade:classes.grade,
  Id:classes.classId
}
 console.log(updatedClass)

axios.put('https://localhost:44396/api/class',updatedClass)
     .then(res=>{
       console.log("scccc")
       toast.success('Class name update Success',{autoClose:3000 })
       setClasses({...classes,updateFormdisplay:!classes.updateFormdisplay})
     }).catch(err=>{
       console.log(err)
       toast.error(' Class update UnSuccessful, try again',{autoClose:3000 })
       setClasses({...classes,updateFormdisplay:!classes.updateFormdisplay})
      
      })
    
}



const clzList2=classes.clzList.map(clz=><option  value={clz.id} key={clz.id}>{clz.name}</option>)
       
///**********Delete Class Form********************************** */
  const deleteClassForm=(
  < div className="container">
  <div className="row">
    <div className="col-md-6 mt-5 mx-auto">
      <form noValidate onSubmit={onDelete}>
    {/* <form> */}
     
        <h1 className="h3 mb-3 font-weight-normal"> Delete Class</h1>

< div className="form-group">
        <label htmlFor="className">Grade</label>
        <Form.Control as="select"
        name='grade'
         onChange={onChange}
         onClick={()=>getClassInGrade(classes.grade)}
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
         onChange={onChange}
        >
          
            {clzList2}
            
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
  </div></ div>
  
  )
  ///********** End Delete Class Form********************************** */



  ///************Add Class Form **********************************/
  const addClassForm=(
    < div className="container">
  <div className="row">
    <div className="col-md-6 mt-5 mx-auto">
      <form noValidate onSubmit={onAdd}>
    {/* <form> */}
     
        <h1 className="h3 mb-3 font-weight-normal">  Add Class </h1>

< div className="form-group">
        <label htmlFor="className">Grade</label>
        <Form.Control as="select"
        name='grade'
         onChange={onChange}
        //  onClick={()=>getClassInGrade(classes.grade)}
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
         name='className'
          onChange={onChange}
        >
              <option value=''>Select Class Name</option>
            <option value={classes.grade+'-A'}>{classes.grade+'-A'}</option>
            <option value={classes.grade+'-B'}>{classes.grade+'-B'}</option>
            <option value={classes.grade+'-C'}>{classes.grade+'-C'}</option>
            <option value={classes.grade+'-D'}>{classes.grade+'-D'}</option>
            <option value={classes.grade+'-E'}>{classes.grade+'-E'}</option>
            <option value={classes.grade+'-F'}>{classes.grade+'-F'}</option>
            <option value={classes.grade+'-G'}>{classes.grade+'-G'}</option>
            <option value={classes.grade+'-H'}>{classes.grade+'-H'}</option>
            <option value={classes.grade+'-I'}>{classes.grade+'-I'}</option>
            <option value={classes.grade+'-J'}>{classes.grade+'-J'}</option>
            <option value={classes.grade+'-K'}>{classes.grade+'-K'}</option>
            
           
            
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
  </div></ div>
  )

  ///********** End Add Class Form********************************** */

   
//******************Edit class Form********************************** */
  const editClassForm=(
    < div className="container">
  <div className="row">
    <div className="col-md-6 mt-5 mx-auto">
      <form noValidate onSubmit={onUpdate}>
    {/* <form> */}
     
        <h1 className="h3 mb-3 font-weight-normal">  Add Class </h1>

< div className="form-group">
        <label htmlFor="className">Grade</label>
        <Form.Control as="select"
        name='grade'
         onChange={onChange}
         onClick={()=>getClassInGrade(classes.grade)}
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
        <label htmlFor="className">Existing class name</label>
        <Form.Control as="select"
        name='classId'
         onChange={onChange}
        >
          <option>Select Exiting class</option> 
            {clzList2}
            
           </Form.Control>
          <br />
          </div>

          
        <div className="form-group">
        <label htmlFor="className">New Class Name</label>
        <Form.Control as="select"
         name='className'
          onChange={onChange}
        >
              <option value=''>Select new class name</option>
            <option value={classes.grade+'-A'}>{classes.grade+'-A'}</option>
            <option value={classes.grade+'-B'}>{classes.grade+'-B'}</option>
            <option value={classes.grade+'-C'}>{classes.grade+'-C'}</option>
            <option value={classes.grade+'-D'}>{classes.grade+'-D'}</option>
            <option value={classes.grade+'-E'}>{classes.grade+'-E'}</option>
            <option value={classes.grade+'-F'}>{classes.grade+'-F'}</option>
            <option value={classes.grade+'-G'}>{classes.grade+'-G'}</option>
            <option value={classes.grade+'-H'}>{classes.grade+'-H'}</option>
            <option value={classes.grade+'-I'}>{classes.grade+'-I'}</option>
            <option value={classes.grade+'-J'}>{classes.grade+'-J'}</option>
            <option value={classes.grade+'-K'}>{classes.grade+'-K'}</option>
            
           
            
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
  </div></ div>
  )
  const styles = {
    backgroundContainer: {
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundColor:'#E9967A'
    },
    button:{
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '26px',
      // borderRadius: '8px',
      // width:'350px',
      // height:'200px'
    }
   
}



  return (
    <div style={styles.backgroundContainer}>
    <div className={classes2.root}>

      <Grid container spacing={3}>
      <Grid item xs={4} >
        
       
          <Paper className={classes2.paper}>
          <Button  style={styles.button} variant="success"
          onClick={()=>setClasses({...classes,addFormdisplay:!classes.addFormdisplay})}>Add Class</Button>
          {classes.addFormdisplay? addClassForm:null}
              </Paper>
   
     
        </Grid>

        <Grid item xs={4} >
          <Paper className={classes2.paper}>
          <Button style={styles.button} variant="warning"
          onClick={()=>{ setClasses({...classes,updateFormdisplay:!classes.updateFormdisplay})}}>Change Class</Button>
          {classes.updateFormdisplay? editClassForm:null}
          </Paper>
        </Grid>

        <Grid item xs={4} >
          <Paper className={classes2.paper}>
          <Button  style={styles.button} variant="danger"
          onClick={()=>setClasses({...classes,deleteFormdisplay:!classes.deleteFormdisplay})}>Delete Class</Button>
              
              {classes.deleteFormdisplay? deleteClassForm:null}
          </Paper>
        </Grid>
       </Grid>
    </div>
    </div>
  );
}


export default Classes;