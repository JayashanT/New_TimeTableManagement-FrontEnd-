import React, { Component } from 'react'

import axios from 'axios'
import {Table,Form} from 'react-bootstrap'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure();



export class ViewTimeTable extends Component {


    constructor(props) {
        super(props)
      
        this.state = {
           classes:[],
         a1:'Click Here',a2:'',a3:'',a4:'',a5:'',a6:'',a7:'',a8:'',a9:'',a10:'',
         b1:'',b2:'',b3:'',b4:'',b5:'',b6:'',b7:'',b8:'',b9:'',b10:'',
         c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',
         d1:'',c2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',
        
        

           
           grade:1,
           classId:0,
           slots:[],
          // slots2:[],

           tableDisplay:false,
           
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
         

         this.setState({slots:res.data.slot,tableDisplay:true},
          ()=>{
           console.log(this.state.slots)
           this.viewTimeTable();
          })

      //  console.log("aaa",this.state.slots2)
       }).catch(err=>{
         console.log(err)
         this.setState({tableDisplay:false})
        toast.error('Time Table does not exit yet, for this class',{autoClose:5000 })
       })
          
        }



    getClassInGrade=(grade)=>{
        console.log("Garde=",grade)
      
        axios.get(`https://localhost:44396/api/class/GetClassesRelateToGrade/${grade}`)
        .then(response=>{
          // console.log(response.data[0].name)
            this.setState({
                classes:response.data,
                
              
            })
           

        })
        .catch(err=>{
            console.log(err)
            this.setState({errorMsg:"This is get request Error"})
        })
      }



      //********************************************* */

      viewTimeTable=()=>{
        this.setState({


        a1:this.state.slots.find(({period_No})=>period_No==='1_1')?this.state.slots.find(({period_No})=>period_No==='1_1').subject_Name:null,
        a2:this.state.slots.find(({period_No})=>period_No==='2_1')?this.state.slots.find(({period_No})=>period_No==='2_1').subject_Name:null,
        a3:this.state.slots.find(({period_No})=>period_No==='3_1')?this.state.slots.find(({period_No})=>period_No==='3_1').subject_Name:null,
        a4:this.state.slots.find(({period_No})=>period_No==='4_1')?this.state.slots.find(({period_No})=>period_No==='4_1').subject_Name:null,
        a5:this.state.slots.find(({period_No})=>period_No==='5_2')?this.state.slots.find(({period_No})=>period_No==='5_1').subject_Name:null,
        a6:this.state.slots.find(({period_No})=>period_No==='1_2')?this.state.slots.find(({period_No})=>period_No==='1_2').subject_Name:null,
        a7:this.state.slots.find(({period_No})=>period_No==='2_2')?this.state.slots.find(({period_No})=>period_No==='2_2').subject_Name:null,
        a8:this.state.slots.find(({period_No})=>period_No==='3_2')?this.state.slots.find(({period_No})=>period_No==='3_2').subject_Name:null,
        a9:this.state.slots.find(({period_No})=>period_No==='4_2')?this.state.slots.find(({period_No})=>period_No==='4_2').subject_Name:null,
        a10:this.state.slots.find(({period_No})=>period_No==='5_2')?this.state.slots.find(({period_No})=>period_No==='5_2').subject_Name:null,


        b1:this.state.slots.find(({period_No})=>period_No==='1_3')?this.state.slots.find(({period_No})=>period_No==='1_3').subject_Name:null,
        b2:this.state.slots.find(({period_No})=>period_No==='2_3')?this.state.slots.find(({period_No})=>period_No==='2_3').subject_Name:null,
        b3:this.state.slots.find(({period_No})=>period_No==='3_3')?this.state.slots.find(({period_No})=>period_No==='3_3').subject_Name:null,
        b4:this.state.slots.find(({period_No})=>period_No==='4_3')?this.state.slots.find(({period_No})=>period_No==='4_3').subject_Name:null,
        b5:this.state.slots.find(({period_No})=>period_No==='5_3')?this.state.slots.find(({period_No})=>period_No==='5_3').subject_Name:null,
        b6:this.state.slots.find(({period_No})=>period_No==='1_4')?this.state.slots.find(({period_No})=>period_No==='1_4').subject_Name:null,
        b7:this.state.slots.find(({period_No})=>period_No==='2_4')?this.state.slots.find(({period_No})=>period_No==='2_4').subject_Name:null,
        b8:this.state.slots.find(({period_No})=>period_No==='3_4')?this.state.slots.find(({period_No})=>period_No==='3_4').subject_Name:null,
        b9:this.state.slots.find(({period_No})=>period_No==='4_4')?this.state.slots.find(({period_No})=>period_No==='4_4').subject_Name:null,
        b1: this.state.slots.find(({period_No})=>period_No==='5_4')?this.state.slots.find(({period_No})=>period_No==='5_4').subject_Name:null,

     
        
       c1: this.state.slots.find(({period_No})=>period_No==='1_5')?this.state.slots.find(({period_No})=>period_No==='1_5').subject_Name:null,
       c2: this.state.slots.find(({period_No})=>period_No==='2_5')?this.state.slots.find(({period_No})=>period_No==='2_5').subject_Name:null,
       c3: this.state.slots.find(({period_No})=>period_No==='3_5')?this.state.slots.find(({period_No})=>period_No==='3_5').subject_Name:null,
       c4: this.state.slots.find(({period_No})=>period_No==='4_5')?this.state.slots.find(({period_No})=>period_No==='4_5').subject_Name:null,
       c5: this.state.slots.find(({period_No})=>period_No==='5_5')?this.state.slots.find(({period_No})=>period_No==='5_5').subject_Name:null,
       c6: this.state.slots.find(({period_No})=>period_No==='1_6')?this.state.slots.find(({period_No})=>period_No==='1_6').subject_Name:null,
       c7: this.state.slots.find(({period_No})=>period_No==='2_6')?this.state.slots.find(({period_No})=>period_No==='2_6').subject_Name:null,
       c8: this.state.slots.find(({period_No})=>period_No==='3_6')?this.state.slots.find(({period_No})=>period_No==='3_6').subject_Name:null,
       c9: this.state.slots.find(({period_No})=>period_No==='4_6')?this.state.slots.find(({period_No})=>period_No==='4_6').subject_Name:null,
       c10: this.state.slots.find(({period_No})=>period_No==='5_6')?this.state.slots.find(({period_No})=>period_No==='5_6').subject_Name:null,


       d1: this.state.slots.find(({period_No})=>period_No==='1_7')?this.state.slots.find(({period_No})=>period_No==='1_7').subject_Name:null,
       d2: this.state.slots.find(({period_No})=>period_No==='2_7')?this.state.slots.find(({period_No})=>period_No==='2_7').subject_Name:null,
       d3: this.state.slots.find(({period_No})=>period_No==='3_7')?this.state.slots.find(({period_No})=>period_No==='3_7').subject_Name:null,
       d4: this.state.slots.find(({period_No})=>period_No==='4_7')?this.state.slots.find(({period_No})=>period_No==='4_7').subject_Name:null,
       d5: this.state.slots.find(({period_No})=>period_No==='5_7')?this.state.slots.find(({period_No})=>period_No==='5_7').subject_Name:null,
       d6: this.state.slots.find(({period_No})=>period_No==='1_8')?this.state.slots.find(({period_No})=>period_No==='1_8').subject_Name:null,
       d7: this.state.slots.find(({period_No})=>period_No==='2_8')?this.state.slots.find(({period_No})=>period_No==='2_8').subject_Name:null,
       d8: this.state.slots.find(({period_No})=>period_No==='3_8')?this.state.slots.find(({period_No})=>period_No==='3_8').subject_Name:null,
       d9: this.state.slots.find(({period_No})=>period_No==='4_8')?this.state.slots.find(({period_No})=>period_No==='4_8').subject_Name:null,
       d10: this.state.slots.find(({period_No})=>period_No==='5_8')?this.state.slots.find(({period_No})=>period_No==='5_8').subject_Name:null,
          // a1: this.state.slots.find(({period_No})=>period_No==='1_1').subject_Name,
          // a2: this.state.slots.find(({period_No})=>period_No==='2_1').subject_Name,
          // a3: this.state.slots.find(({period_No})=>period_No==='3_1').subject_Name,
          // a4: this.state.slots.find(({period_No})=>period_No==='4_1').subject_Name,
          // a5: this.state.slots.find(({period_No})=>period_No==='5_1').subject_Name,
          // a6: this.state.slots.find(({period_No})=>period_No==='1_2').subject_Name,
          // a7: this.state.slots.find(({period_No})=>period_No==='2_2').subject_Name,
          // a8: this.state.slots.find(({period_No})=>period_No==='3_2').subject_Name,
          // a9: this.state.slots.find(({period_No})=>period_No==='4_2').subject_Name,
          // a10: this.state.slots.find(({period_No})=>period_No==='5_2').subject_Name,


          // b1: this.state.slots.find(({period_No})=>period_No==='1_3').subject_Name,
          // b2: this.state.slots.find(({period_No})=>period_No==='2_3').subject_Name,
          // b3: this.state.slots.find(({period_No})=>period_No==='3_3').subject_Name,
          // b4: this.state.slots.find(({period_No})=>period_No==='4_3').subject_Name,
          // b5: this.state.slots.find(({period_No})=>period_No==='5_3').subject_Name,
          // b6: this.state.slots.find(({period_No})=>period_No==='1_4').subject_Name,
          // b7: this.state.slots.find(({period_No})=>period_No==='2_4').subject_Name,
          // b8: this.state.slots.find(({period_No})=>period_No==='3_4').subject_Name,
          // b9: this.state.slots.find(({period_No})=>period_No==='4_4').subject_Name,
          // b10: this.state.slots.find(({period_No})=>period_No==='5_4').subject_Name,


          // c1: this.state.slots.find(({period_No})=>period_No==='1_5').subject_Name,
          // c2: this.state.slots.find(({period_No})=>period_No==='2_5').subject_Name,
          // c3: this.state.slots.find(({period_No})=>period_No==='3_5').subject_Name,
          // c4: this.state.slots.find(({period_No})=>period_No==='4_5').subject_Name,
          // c5: this.state.slots.find(({period_No})=>period_No==='5_5').subject_Name,
          // c6: this.state.slots.find(({period_No})=>period_No==='1_6').subject_Name,
          // c7: this.state.slots.find(({period_No})=>period_No==='2_6').subject_Name,
          // c8: this.state.slots.find(({period_No})=>period_No==='3_6').subject_Name,
          // c9: this.state.slots.find(({period_No})=>period_No==='4_6').subject_Name,
          // c10: this.state.slots.find(({period_No})=>period_No==='5_6').subject_Name,

          // d1: this.state.slots.find(({period_No})=>period_No==='1_7').subject_Name,
          // d2: this.state.slots.find(({period_No})=>period_No==='2_7').subject_Name,
          // d3: this.state.slots.find(({period_No})=>period_No==='3_7').subject_Name,
          // d4: this.state.slots.find(({period_No})=>period_No==='4_7').subject_Name,
          // d5: this.state.slots.find(({period_No})=>period_No==='5_7').subject_Name,
          // d6: this.state.slots.find(({period_No})=>period_No==='1_8').subject_Name,
          // d7: this.state.slots.find(({period_No})=>period_No==='2_8').subject_Name,
          // d8: this.state.slots.find(({period_No})=>period_No==='3_8').subject_Name,
          // d9: this.state.slots.find(({period_No})=>period_No==='4_8').subject_Name,
          // d10: this.state.slots.find(({period_No})=>period_No==='5_8').subject_Name,
      
      
      
      })


      }






    render() {

{/* ******************************************table********************************** */}

      const timeTable=(
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
        {/* <td onClick={()=>{this.setState({a: this.state.slots.find(({period_No})=>period_No==='2_1').subject_Id},()=>console.log("dhdj"))}}>{this.state.a}</td> */}
        <td onClick={this.viewTimeTable}>{this.state.a1}</td>
              <td >{this.state.a2}</td>
              <td >{this.state.a3}</td>
              <td >{this.state.a4}</td>
              <td >{this.state.a5}</td>
              
            </tr>
            <tr>
              <td>2</td>
              <td>8.15-9.00</td>
              <td>{this.state.a6}</td>
              <td>{this.state.a7}</td>
              <td>{this.state.a8}</td>
              <td>{this.state.a9}</td>
              <td>{this.state.a10}</td>
            </tr>


            <tr>
              <td>3</td>
              <td>9.00-9.45</td>
              <td>{this.state.b1}</td>
              <td>{this.state.b2}</td>
              <td>{this.state.b3}</td>
              <td>{this.state.b4}</td>
              <td>{this.state.b5}</td>
            </tr>


            <tr>
              <td>4</td>
              <td>9.45-10.00</td>
              <td>{this.state.b7}</td>
              <td>{this.state.b6}</td>
              <td>{this.state.b8}</td>
              <td>{this.state.b9}</td>
              <td>{this.state.b10}</td>
            </tr>

      

            <tr>
              <td>5</td>
              <td>11.00-11.45</td>
              <td>{this.state.c1}</td>
              <td>{this.state.c2}</td>
              <td>{this.state.c3}</td>
              <td>{this.state.c4}</td>
              <td>{this.state.c5}</td>
            </tr>

            <tr>
              <td>6</td>
              <td>11.45-12.30</td>
              <td>{this.state.c7}</td>
              <td>{this.state.c6}</td>
              <td>{this.state.c8}</td>
              <td>{this.state.c9}</td>
              <td>{this.state.c10}</td>
            </tr>

            <tr>
              <td>7</td>
              <td>12.30-1.15</td>
              <td>{this.state.d1}</td>
              <td>{this.state.d2}</td>
              <td>{this.state.d3}</td>
              <td>{this.state.d4}</td>
              <td>{this.state.d5}</td>
            </tr>


            <tr>
              <td>8</td>
              <td>1.15-2.00</td>
              <td>{this.state.d7}</td>
              <td>{this.state.d6}</td>
              <td>{this.state.d8}</td>
              <td>{this.state.d9}</td>
              <td>{this.state.d10}</td>
            </tr>

        </tbody>
        
        </Table>
        </div>)


{/******************************************table End********************************** */}



        const clzList=this.state.classes.map(clz=><option  value={clz.id} key={clz.id}>{clz.name}</option>)

        return (
            < div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
              
               
                  <h1 className="h3 mb-3 font-weight-normal"> Choose Time table</h1>
            
                 

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
           
          {this.state.tableDisplay? timeTable:null}


          </div>
                
            
        )
    }
}

export default ViewTimeTable
