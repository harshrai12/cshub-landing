import React from 'react'

import background from "../images/LivelyAgedKittiwake.webm"
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
  <h1>Our New Event</h1>
  <div className="ctflogo">
  <img src={ctf} alt=""/></div>

  
  <div className="ctfinfos">
  <p>Hey Everyone
  Team CSCODERSHUB is super excited to announce our first Jeopardy based CTF Challenge "TrollCAT CTF" in collaboration with ArishtiLive.
  It will be a complete beginner oriented CTF challenge to level up your skills. prizes will be announced soon, stay tuned.
  So, Team CSCODERSHUB welcomes you all to participate in this event.
  Registration will open soon.
  Here are Event Details:
  Date: 23rd January, 2021
  Time: 12:00PM IST to 6:00PM IST
  Team type: SOLO
  Challenge Categories:
  <ul><li>Cryptography</li><li>OSINT</li><li>Steganography</li><li>Network Forensics</li><li>Miscellaneous</li></ul>

  Don't forget to have a look at our</p>
 
  <Row>
    <Col xs={6}><img src={cs} alt="" className="sponser"/></Col>
    <Col xs={6}><img src={cs2} alt="" className="sponser"/></Col>
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
