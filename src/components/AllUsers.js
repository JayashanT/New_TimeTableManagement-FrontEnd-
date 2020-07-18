import React, { Component } from 'react'
import axios from 'axios'
import {Button,Card} from 'react-bootstrap'
import './AllUsers.css'
import userLogo from './user.png';


export class AllUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
        }
    }
    
componentDidMount(){
    axios.get('https://localhost:44396/api/user')
      .then(res=>{
          this.setState({
              users:res.data
          })
          console.log(this.state.users)
      })
}



    render() {
const userList=this.state.users.map(user=>
<div  > 
<Card style={{ width: '18rem',height:'350px', marginRight:'3px',  marginBottom: '10px',marginTop: '10px',marginLeft: '3px' }}>
<Card.Img variant="top" src={userLogo} style={{ width: '18rem',height:'250px' }} />
<Card.Body>
  <Card.Title>{user.name}</Card.Title>
  <Card.Text>

  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
</div>
)

        return (
            <div className='inLine'>
             
               {userList}
            </div>
        )
    }
}

export default AllUsers
