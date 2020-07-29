import React, { Component } from 'react'
import logo1 from './aa.jpg';
import logo2 from './bb.png';
import {Carousel} from 'react-bootstrap'
import './Landing.css'

class Landing extends Component {
  render() {
    return (
      // <div className="container">
      //   <div className="jumbotron mt-5">
      //     <div className="col-sm-8 mx-auto">
      //       <h1 className="text-center">WELCOME</h1>
      //     </div>
      //   </div>
      // </div>
      <div>
      <Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src={logo1}
alt="First slide"
/>
<Carousel.Caption>
{/* <h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={logo2}
alt="Third slide"
/>



</Carousel.Item>
</Carousel> 
</div>
    )
  }
}

export default Landing;