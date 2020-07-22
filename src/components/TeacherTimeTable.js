import React, { Component } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {Table} from 'react-bootstrap'

export class TeacherTimeTable extends Component {

constructor(props) {
    super(props)

    this.state = {

      slots:[],

        a1:'Click Here',a2:'',a3:'',a4:'',a5:'',a6:'',a7:'',a8:'',a9:'',a10:'',
        b1:'',b2:'',b3:'',b4:'',b5:'',b6:'',b7:'',b8:'',b9:'',b10:'',
        c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',
        d1:'',c2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',
    }
}

componentDidMount(){

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
 const teacherId=decoded.Id

 axios.get(`https://localhost:44396/api/TimeTable/GetTeachersSlots/?Id=${teacherId}`)
    .then(res=>{
      this.setState({slots:res.data},()=>{
           this.setState({
        a1:this.state.slots.find(({period_No})=>period_No==='1_1')?this.state.slots.find(({period_No})=>period_No==='1_1').class_Name:null,
        a2:this.state.slots.find(({period_No})=>period_No==='2_1')?this.state.slots.find(({period_No})=>period_No==='2_1').class_Name:null,
        a3:this.state.slots.find(({period_No})=>period_No==='3_1')?this.state.slots.find(({period_No})=>period_No==='3_1').class_Name:null,
        a4:this.state.slots.find(({period_No})=>period_No==='4_1')?this.state.slots.find(({period_No})=>period_No==='4_1').class_Name:null,
        a5:this.state.slots.find(({period_No})=>period_No==='5_2')?this.state.slots.find(({period_No})=>period_No==='5_1').class_Name:null,
        a6:this.state.slots.find(({period_No})=>period_No==='1_2')?this.state.slots.find(({period_No})=>period_No==='1_2').class_Name:null,
        a7:this.state.slots.find(({period_No})=>period_No==='2_2')?this.state.slots.find(({period_No})=>period_No==='2_2').class_Name:null,
        a8:this.state.slots.find(({period_No})=>period_No==='3_2')?this.state.slots.find(({period_No})=>period_No==='3_2').class_Name:null,
        a9:this.state.slots.find(({period_No})=>period_No==='4_2')?this.state.slots.find(({period_No})=>period_No==='4_2').class_Name:null,
        a10:this.state.slots.find(({period_No})=>period_No==='5_2')?this.state.slots.find(({period_No})=>period_No==='5_2').class_Name:null,
        
        
        b1:this.state.slots.find(({period_No})=>period_No==='1_3')?this.state.slots.find(({period_No})=>period_No==='1_3').class_Name:null,
        b2:this.state.slots.find(({period_No})=>period_No==='2_3')?this.state.slots.find(({period_No})=>period_No==='2_3').class_Name:null,
        b3:this.state.slots.find(({period_No})=>period_No==='3_3')?this.state.slots.find(({period_No})=>period_No==='3_3').class_Name:null,
        b4:this.state.slots.find(({period_No})=>period_No==='4_3')?this.state.slots.find(({period_No})=>period_No==='4_3').class_Name:null,
        b5:this.state.slots.find(({period_No})=>period_No==='5_3')?this.state.slots.find(({period_No})=>period_No==='5_3').class_Name:null,
        b6:this.state.slots.find(({period_No})=>period_No==='1_4')?this.state.slots.find(({period_No})=>period_No==='1_4').class_Name:null,
        b7:this.state.slots.find(({period_No})=>period_No==='2_4')?this.state.slots.find(({period_No})=>period_No==='2_4').class_Name:null,
        b8:this.state.slots.find(({period_No})=>period_No==='3_4')?this.state.slots.find(({period_No})=>period_No==='3_4').class_Name:null,
        b9:this.state.slots.find(({period_No})=>period_No==='4_4')?this.state.slots.find(({period_No})=>period_No==='4_4').class_Name:null,
        b1: this.state.slots.find(({period_No})=>period_No==='5_4')?this.state.slots.find(({period_No})=>period_No==='5_4').class_Name:null,

     
        
       c1: this.state.slots.find(({period_No})=>period_No==='1_5')?this.state.slots.find(({period_No})=>period_No==='1_5').class_Name:null,
       c2: this.state.slots.find(({period_No})=>period_No==='2_5')?this.state.slots.find(({period_No})=>period_No==='2_5').class_Name:null,
       c3: this.state.slots.find(({period_No})=>period_No==='3_5')?this.state.slots.find(({period_No})=>period_No==='3_5').class_Name:null,
       c4: this.state.slots.find(({period_No})=>period_No==='4_5')?this.state.slots.find(({period_No})=>period_No==='4_5').class_Name:null,
       c5: this.state.slots.find(({period_No})=>period_No==='5_5')?this.state.slots.find(({period_No})=>period_No==='5_5').class_Name:null,
       c6: this.state.slots.find(({period_No})=>period_No==='1_6')?this.state.slots.find(({period_No})=>period_No==='1_6').class_Name:null,
       c7: this.state.slots.find(({period_No})=>period_No==='2_6')?this.state.slots.find(({period_No})=>period_No==='2_6').class_Name:null,
       c8: this.state.slots.find(({period_No})=>period_No==='3_6')?this.state.slots.find(({period_No})=>period_No==='3_6').class_Name:null,
       c9: this.state.slots.find(({period_No})=>period_No==='4_6')?this.state.slots.find(({period_No})=>period_No==='4_6').class_Name:null,
       c10: this.state.slots.find(({period_No})=>period_No==='5_6')?this.state.slots.find(({period_No})=>period_No==='5_6').class_Name:null,

      d1: this.state.slots.find(({period_No})=>period_No==='1_7')?this.state.slots.find(({period_No})=>period_No==='1_7').class_Name:null,
      d2: this.state.slots.find(({period_No})=>period_No==='2_7')?this.state.slots.find(({period_No})=>period_No==='2_7').class_Name:null,
      d3: this.state.slots.find(({period_No})=>period_No==='3_7')?this.state.slots.find(({period_No})=>period_No==='3_7').class_Name:null,
      d4: this.state.slots.find(({period_No})=>period_No==='4_7')?this.state.slots.find(({period_No})=>period_No==='4_7').class_Name:null,
      d5: this.state.slots.find(({period_No})=>period_No==='5_7')?this.state.slots.find(({period_No})=>period_No==='5_7').class_Name:null,
      d6: this.state.slots.find(({period_No})=>period_No==='1_8')?this.state.slots.find(({period_No})=>period_No==='1_8').class_Name:null,
      d7: this.state.slots.find(({period_No})=>period_No==='2_8')?this.state.slots.find(({period_No})=>period_No==='2_8').class_Name:null,
      d8: this.state.slots.find(({period_No})=>period_No==='3_8')?this.state.slots.find(({period_No})=>period_No==='3_8').class_Name:null,
      d9: this.state.slots.find(({period_No})=>period_No==='4_8')?this.state.slots.find(({period_No})=>period_No==='4_8').class_Name:null,
      d10: this.state.slots.find(({period_No})=>period_No==='5_8')?this.state.slots.find(({period_No})=>period_No==='5_8').class_Name:null,




           })
      })
    }).catch(err=>console.log(err))

//******************************************************** */



}



    render() {
      console.log("mmmmm",this.state.a4)
        return (

            <div>
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
            </div>
        )
    }
}

export default TeacherTimeTable
