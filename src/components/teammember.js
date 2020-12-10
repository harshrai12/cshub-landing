import React from 'react'
import "../styles/team.scss"
import abhisar from "../images/WhatsApp Image 2020-06-27 at 10.48.43 PM.jpeg"
import adi from "../images/adii.jpeg"
import harsh from "../images/DSC_0477-01-01-01.jpeg"
import mudit from "../images/mudit.jpeg"
import suraj from "../images/suraj shaw.jpeg"
import linkedin from "../images/linkedin (1).png"
import arth from "../images/Arth.jpeg"
import Devasnh from "../images/devansh.jpeg"
import amritya from "../images/amritya.jpeg"
import twotter from "../images/twitter.png"
import github from "../images/github.png"
import abhay from "../images/abhay chopra.jpeg"






function teammember() {
  return (
   <div className="container1">
   <div className="header">
       <h1>Our Team</h1>
   </div>
   <div className="sub-container">
   <div class="teams">
       <img src={abhisar} alt=""/>
       <div className="name">Abhisar Pandey</div>
       <div className="desig">Founder</div>
       <div className="about"> </div>

       <div className="social-links">
           <a href="https://www.linkedin.com/in/imabhisarpandey/"> <img src={linkedin} alt="" className="icon" /></a>
           <a href="https://www.twitter.com/imabhisarpandey/"> <img src={twotter} alt="" className="icon"/></a>
           <a href="https://www.github.com/imabhisarpandey/"> <img src={github} alt="" className="icon"/></a>
          
       </div>
   </div>
   <div class="teams">
   <img src={arth} alt=""/>
   <div className="name">Arth Nangia</div>
   <div className="desig">Creative Director</div>
   <div className="about"> </div>

   <div className="social-links">
       <a href="https://www.linkedin.com/in/arth-nangia/"> <img src={linkedin} alt="" className="icon" /></a>
       <a href="https://www.twitter.com/travuersa25/"> <img src={twotter} alt="" className="icon"/></a>
       <a href=""> <img src={github} alt="" className="icon"/></a>
      
   </div>
</div>
<div className="teams">
<img src={mudit} alt=""/>
<div className="name">Mudit Bansal</div>
<div className="desig">Discord Manager</div>
<div className="about"></div>

    <div className="social-links">
    <a href="https://www.linkedin.com/in/muditbansall"> <img src={linkedin} alt="" className="icon" /></a>
    <a href="https://www.twitter.com/muditisrocking/"> <img src={twotter} alt="" className="icon"/></a>
    <a href="https://www.github.com/defalt007/"> <img src={github} alt="" className="icon"/></a>
   
</div>
</div> <div className="teams">
<img src={suraj} alt=""/>
<div className="name">Suraj Shaw</div>
<div className="desig">Content Manager</div>
<div className="about"></div>

    <div className="social-links">
    <a href="https://www.linkedin.com/in/shawsuraj/"> <img src={linkedin} alt="" className="icon" /></a>
    <a href="https://twitter.com/shawsurajss"> <img src={twotter} alt="" className="icon"/></a>
    <a href="https://github.com/shawsuraj"> <img src={github} alt="" className="icon"/></a>
   
</div>
</div>
   </div>
   <div className="sub-container"><div className="teams">
   <img src={amritya} alt=""/>
   <div className="name">Amritya Vaibhav Dembla</div>
   <div className="desig">Security Analysist</div>
   <div className="about"> </div>

       <div className="social-links">
       <a href="https://www.linkedin.com/in/amritya-vaibhav-dembla/"> <img src={linkedin} alt="" className="icon" /></a>
       <a href="#"> <img src={twotter} alt="" className="icon"/></a>
       <a href="https://www.github.com/Dboidembla/"> <img src={github} alt="" className="icon"/></a>
      
   </div>
</div>
  
      

       <div class="teams">
           <img src={harsh} alt=""/>
           <div className="name">Harsh Rai</div>
           <div className="desig">Web Developer</div>
         <div className="about"></div>

               <div className="social-links">
               <a href="#"> <img src={linkedin} alt="" className="icon" /></a>
               <a href="#"> <img src={twotter} alt="" className="icon"/></a>
               <a href="#"> <img src={github} alt="" className="icon"/></a>
              
           </div>
       </div>
       <div class="teams">
   <img src={adi} alt=""/>
   <div className="name">Aditya chatterjee</div>
   <div className="desig"> Web Developer</div>
   <div className="about"> </div>

   <div className="social-links">
       <a href="https://www.linkedin.com/in/aditya-c-840480140"> <img src={linkedin} alt="" className="icon" /></a>
       <a href="https://twitter.com/X__amaterasu__X?s=08"> <img src={twotter} alt="" className="icon"/></a>
       <a href="https://github.com/adi1506"> <img src={github} alt="" className="icon"/></a>
      
   </div>
</div>
    

      
      

      
   </div>
   <div className="sub-container">
   <div class="teams">
   <img src={abhay} alt=""/>
   <div className="name">Abhay Chopra</div>
   <div className="desig">Graphics Designer</div>
 <div className="about"></div>

       <div className="social-links">
       <a href="https://www.linkedin.com/in/theabhaychopra/"> <img src={linkedin} alt="" className="icon" /></a>
       <a href="https://twitter.com/theabhaychopra"> <img src={twotter} alt="" className="icon"/></a>
       <a href="https://github.com/theabhaychopra"> <img src={github} alt="" className="icon"/></a>
      
   </div>
</div>

   

       
       <div class="teams">
       <img src={Devasnh} alt=""/>
       <div className="name">Devansh Nigam</div>
       <div className="desig">Social Media Manager</div>
     <div className="about"></div>

           <div className="social-links">
           <a href="https://www.linkedin.com/in/devansh-nigam-5780761b3"> <img src={linkedin} alt="" className="icon" /></a>
           <a href="https://www.linkedin.com/in/devansh-nigam-5780761b3"> <img src={twotter} alt="" className="icon"/></a>
           <a href="https://github.com/devansh0605"> <img src={github} alt="" className="icon"/></a>
          
       </div>
   </div>
   </div>

</div>
  )
}

export default teammember

