import React, { Component } from 'react'
import axios from 'axios'
import {Button,Card} from 'react-bootstrap'
// import './AllUsers.css'


class Releif extends Component{
    constructor(props) {
        super(props)
        this.state={
            ReleifPeriods:[],
        }
    }

componentDidMount=()=>{
    axios.get('https://localhost:44396/api/Relief')
    .then(res=>{

    this.setState({
          ReleifPeriods:res.data
    })
    console.log(this.state.ReleifPeriods);
})
}

    

render(){
    const releifList=this.state.ReleifPeriods.map(releif=>
        <div key={releif.id} >
            <Card style={{ width: '18rem',height:'200px', marginRight:'3px',  marginBottom: '10px',marginTop: '10px',marginLeft: '3px' }}>
            <Card.Body>
                    <Card.Text>
                        <p>Day: {releif.day}</p>
                        <p>Period No: {releif.period_No}</p>
                        <p>Subject : {releif.subject_Name}</p>
                    </Card.Text>
                    <Button variant="success">Allcate Releif</Button>
                </Card.Body>
            </Card>
        </div>)

    return(
        <div>
            <div style={{alignSelf:'center',fontSize:24,fontWeight:'bold',backgroundColor:'#87CEFA',marginTop:10,padding:10,color:'white'}}>Periods Not Covered today</div>
            {/* <div className='inLine'> */}
            <div style={{ display:'grid',gridTemplateColumns: 'repeat(5,1fr)'}}>
                {releifList}
            </div>
        </div>
    );
}
}

export default Releif;