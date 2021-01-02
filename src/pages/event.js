import React from 'react'

import background from "../images/Elevate your gaming experience.mp4"
import Header from "../components/header"
import broshure from "../images/Sponsorship proposal TrollCAT CTF CSCODERSHUB (1).pdf"
import Button from 'react-bootstrap/Button';


import ctf from '../images/CTFlogo.png'
import cs from '../images/CSCODERSHUB(5).png'
import cs2 from '../images/5.png'
import {Container,Row,Col} from 'react-bootstrap';

function event() {
  return (
   <div>
   <Header />
   <Container>
   
   
    
   
  <div className="event">
 
 
<h1 className="coming-soon"></h1>
  <div className="ctflogo">
  <img src={ctf} alt=""/></div>

  
  <div className="ctfinfos">
  <Row>
  <Col ><img src={cs} alt="" className="sponser"/></Col>
  <Col ><p className="collaboration">In Collaboration with</p></Col>
  <Col ><img src={cs2} alt="" className="sponser"/></Col>
</Row> 
<div className="soonbg"><p className="soon"><ul>
<li>CTF registration</li>
<li>Date: February 6th & 7th, 2021
</li>
<li>24 hour live CTF Challenge with security conference</li>

</ul></p></div>
<Row>

<Col ><a href="https://docs.google.com/forms/d/1Vksndp_x3wAen8nTtwPFrORsKF0JTK-IKvfBxI-ymUg/viewform?edit_requested=true " ><p className="link">  <Button variant="success">Event Ambassadors link</Button></p></a></Col>
<Col ><a href=" https://docs.google.com/forms/d/e/1FAIpQLSfDJtK76R9n6Jn5wkagcvhOxNd4ZBnUYSXsuRHq8plM8v-peA/viewform" ><p className="link">
<Button variant="success">Conference Registration link</Button></p></a></Col>
</Row> 
  </div>
  </div>
  </Container>
  <video
  className="video-player1"
  
                
                loop
                muted
                autoPlay>
  
  <source src={background} type="video/mp4" />
</video>
 

  </div>
   
  )
}

export default event
