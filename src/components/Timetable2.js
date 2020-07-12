import React, { Component } from 'react'
import {Table,Form,Button,Modal} from 'react-bootstrap'


export class Timetable2 extends Component {
    constructor(props) {
        super(props)
    // var a='';
        this.state = {
             show:false,
            //  subject:{name:'sdvv',time:''}
             subject_1:'ss',subject_9:'',subject_17:'',subject_25:'',subject_33:'',
             subject_2:'',subject_10:'',subject_18:'',subject_26:'',
             subject_3:'',subject_11:'',subject_19:'',subject_27:'',
             subject_4:'',subject_12:'',subject_20:'',subject_28:'',
             subject_5:'',subject_13:'',subject_21:'',subject_29:'',
             subject_6:'',subject_14:'',subject_22:'',subject_30:'',
             subject_7:'',subject_15:'',subject_23:'',subject_31:'',
             subject_8:'',subject_16:'',subject_24:'',subject_32:'',
           
             
             
        }
    }

handleClose = () => this.setState({show:false});
handleShow = (a) => {
    //  this.a=value
    this.setState({show:true,})

};

onSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.subject_1);
    this.handleClose();
   
}


onChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value })
  }

    render() {
// const a=false
// const b=true
// const [show, setShow] = useState(false);







const fillForm=(
<Form onSubmit={this.onSubmit }>
<Form.Group controlId="formBasicEmail">
  <Form.Label>Subject</Form.Label>
  <Form.Control type="text" placeholder="Enter Subjec name" name='a' value={this.state.a} onChange={this.onChange} />
  <Form.Text className="text-muted">
 
  </Form.Text>
</Form.Group>

{/* <Form.Group controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group> */}

<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
)

        return (
<div>
<Modal show={this.state.show} >

{fillForm}



        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
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
        <td onClick={this.handleShow}>{this.state.subject_1}</td>
      <td onClick={this.handleShow}>{this.state.subject_9}</td>
      <td onClick={this.handleShow}>{this.state.subject_17}</td>
      <td onClick={this.handleShow}>{this.state.subject_25}</td>
      <td onClick={this.handleShow}>{this.state.subject_33}</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>8.15-9.00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>9.00-9.45</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td>9.45-10.30</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>


{/* interval */}

<tr>
      <td>5</td>
      <td>11.00-11.45</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>11.45-12.30</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>12.30-1.15</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td>8</td>
      <td>1.15-2.00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>






  </tbody>
</Table> 
            </div>
            </div>
        )
    }
}

export default Timetable2
