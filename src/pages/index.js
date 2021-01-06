import React from "react"
import ctf from '../images/CTFlogo.png'
import cslogo from "../images/CSCODERSHUB3.png"

import SEO from "../components/seo"
import Header from "../components/header"
import discord from"../images/kisspng-discord-computer-icons-logo-online-chat-discord-5b2291673db518.4803332115289921032528.png"
import instagram from "../images/logo-ig-instagram-new-logo-vector-download-13.png"
import bird from "../images/twitter-bird-symbols-png-logo-0.png"
import DogVideo from "../images/Elevate your gaming experience.mp4"



import { graphql } from "gatsby"
import Team from "../components/teammember"

const Home = props => (
  <div>
    <Header />
    <SEO title="About" />
    <video
    className="video-player"
    
                  
                  loop
                  muted
                  autoPlay>
    
    <source src={DogVideo} type="video/mp4" />
  </video>
   
    {/** 
 <div className="front">
      <img src={logo} className="front" alt="dp" />
    </div> 
**/}
<span className="ctflogoindex"><p class="line anim-typewriter"><img src={cslogo} alt=""/>CSCODERSHUB</p></span>
    <div className="text">
      <p>Community of coders and hackers</p>
      
      <a href= "https://discord.com/invite/K5K9Yaz" className="button1">
     Connect with us
      </a>
      <div class="icons_connect">
      <a href= "https://discord.com/invite/K5K9Yaz" className="button1">
      <img src={discord} className="dlogo" alt="lgog"/>
      </a><a href= "http://instagram.com/cscodershub" className="button1">
      <img src={instagram} className="dlogo" alt="lgog"/>
      </a><a href= "http://twitter.com/cscodershub" className="button1">
      <img src={bird} className="dlogo" alt="lgog"/>
      </a>
      </div>
    </div>
    

    <div className="abouts-section">
      <h1>About TrollCAT-CTF</h1>
      <p className="about-text">
      TrollCAT CTF is a two-day event for all those cybersecurity enthusiasts who wish to enhance their knowledge and skills in cybersecurity with a fun journey. An event filled with symposium & challenges.

      Day 01 will be a complete beginner-oriented 12 hours Jeopardy based CTF challenge. Lone wolves will be allowed to participate in the challenge. 
      <ul className="ctfsubs">
      <li className="ctfsubs">Day 01 will be a complete beginner-oriented 24 hours Jeopardy based CTF challenge. Lone wolves will be allowed to participate in the challenge. Categories shortlisted for TrollCAT CTF:</li>
      <li className="ctfsubs">Day 02 will be the symposium, wherein speakers from relevant industry will interact with cybersecurity enthusiasts, filled with various talks, & discussions.</li>
      </ul>
    
      </p>
      <Team/>
    </div>
  </div>
)

export default Home

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`