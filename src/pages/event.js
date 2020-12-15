import React from 'react'

import background from "../images/Elevate your gaming experience.mp4"
import Header from "../components/header"


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
 
 
<h1 className="coming-soon">Coming Soon</h1>
  <div className="ctflogo">
  <img src={ctf} alt=""/></div>

  
  <div className="ctfinfos">
  <Row>
  <Col ><img src={cs} alt="" className="sponser"/></Col>
  <Col ><p className="collaboration">In Collaboration with</p></Col>
  <Col ><img src={cs2} alt="" className="sponser"/></Col>
</Row> 
<div className="soonbg"><p className="soon">DETAILS WILL BE ANNOUNCED SOON</p></div>

  
 
  
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
