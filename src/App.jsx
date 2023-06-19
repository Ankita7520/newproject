import React, { Component } from "react";
import "./Comp.css";
import { SlLocationPin,SlMagnifier } from "react-icons/sl";
import { Switch } from "antd"
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css'
import Range from "./Home";
import Rangeslider from "./Rangeslider/Index";
import Images from "../src/images/passphoto.jpg";
import  Calandar from "./Calandar/Index";
import About from "./About"
import Contact from "./Contact"
import Caindi from "./Caindi";
import {CiFacebook,CiTwitter}from "react-icons/ci";
import {AiOutlineLinkedin,AiOutlineInstagram,AiOutlineYoutube} from "react-icons/ai"
import img1 from "./images/one.jpg"
import img2 from "./images/two.jpg"
import img3 from "./images/three.jpg"
import img4 from "./images/four.jpg"
import img5 from "./images/five.jpg"
import img6 from "./images/six.jpg"
import img7 from "./images/seven.jpg"
import img8 from "./images/eight.jpg"
import img9 from "./images/img9.png"
import img10 from "./images/10.png"
import img11 from "./images/11.jpg"
import img12 from "./images/12.png"
import img13 from "./images/13.png"
import img14 from "./images/14.png"
import img15 from "./images/15.jpg"
import img16 from "./images/16.jpg"
class App extends Component{
    constructor(){
      super()
      this.state={
        colr:"#14bc9a"
     }
         this.state={
            colour:"white",
            name:true,
            second:true
            


         }
    }

    
    
     colorhandler=()=>{
        
        this.setState({colr:"#14bc9a"})
        this.setState({colour:"white"})
    }
    handleclick=()=>{
        this.setState({colour:"#14bc9a"})
        this.setState({colr:"white"})
    }
    togglehandler=()=>{
         if(this.state.name){
            this.setState({name:false})
         }
         else{
            this.setState({name:true})
         }
    }
    secondhandler=()=>{
        this.setState({
            second:false
        })
    }
   

    render(){
    return(
        <div className="body">
            <div className="main">
            <nav className="main">
                <div>
                <img src="https://truetalent.io/static/media/logo.e8c72fdf.svg" alt=""  className="img"/>
                </div>
                <div className="tt">
                    <a href="/" className="but" id="but">TT Essential</a>
                    <a href="/ttgig" className="but" id="butt">TT Gig</a>
                </div>
                <div className="log">
                   <a href="/log" className="login">Login</a>
                    <a href="/register" className="login">Register</a>
               </div>
               </nav>
             <div className="Rightjob">
             <h1 className="RJ">Get the <span>Right Job</span> You Deserve</h1>
             <p className="career">Your next carrer move starts here</p>
                </div>  
            </div>
            <div className="rht">
            <div className="butn">
                <button className="btn" id="btn"onClick={this.colorhandler} style={{backgroundColor:this.state.colr}}>Search Jobs</button>
                <button className="btn" onClick={this.handleclick} style={{backgroundColor:this.state.colour}}>Search Candidates</button>
            </div>
            <div className="input">
            <div className="skill">
            <SlMagnifier></SlMagnifier>
                <input type="text" placeholder="Skill/Job roles" className="in-inp"/>
            </div>
                <div className="sear">
                
                <SlLocationPin className="loc"></SlLocationPin>
                
                <input type="text" placeholder="city" className="in"/>
                
                <button className="btt" ><SlMagnifier className="ic-ic"></SlMagnifier><a href="/contact" className="search">Search</a> </button>
                
                </div>
               
                </div>
                <div className="TK">
                    <input className="NM" type="radio" name="normalsearch-type" value="smart" checked></input>
                    
                    <label className="Smart"for="normal search">TT smart search</label>
                    <input className="KEYWORD" type="radio" name="Keywordsearch-type" value="smart" checked></input>
                    <label className="KS" for="Keyword search">Keyword search</label>
                </div>
            </div>
            <div style={{display:"flex"}}>
            {
              this.state.second?<span></span>:<Contact/>
            }
            <div>
            </div> 
            <img src={Images} alt="passphoto.jpg" className="image"/>
          </div>
            <div>
                <h1 className="Top-tier"><span>Trusted by </span> top-tier companies</h1>
                </div>
            <div className="photo-main">
            <div className="div-photo">
                <img src={img1} alt="" className="photo"/>
            </div>
            <div className="div-photo">
                <img src={img2} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img3} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img4} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img5} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img6} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img7} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img8} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img9} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img10} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img11} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img12} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img13} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img14} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img15} alt="" className="photo" />
            </div>
            <div className="div-photo">
                <img src={img16} alt="" className="photo" />
            </div>
            </div>
            <div>
                <h2 className="you">Featured  Jobs <span className="spn">for </span>you </h2>
            </div>
        
            <div className="offer">
        <div className="box">
            <div className="box7">
                   <img src={img1} alt="" className="box6"/>
                       <h3 className="box1">Software Development Lead</h3>
                       <h6 className="box2">Full Time 5-9Yrs</h6>
                       <div style={{display:"flex"}}>
                       <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Bengalore</h6>
                       </div>
            </div>           
                       <h5 className="box4">Cashfree Payments</h5>
                   </div>
                   <div className="box">
            <div className="box7">
                   <img src={img2} alt="" className="box6"/>
                       <h3 className="box1">Social Media Influencer</h3>
                       <h6 className="box2">Full Time 2-4Yrs</h6>
                       <div style={{display:"flex"}}>
                       <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Asudabi</h6>
                       </div>
            </div>           
                       <h5 className="box4">Tidalwave Solution</h5>
                   </div>
                   <div className="box">
            <div className="box7">
                   <img src={img3} alt="" className="box6"/>
                       <h3 className="box1">Technical Lead </h3>
                       <h6 className="box2">Full Time 5-6Yrs</h6>
                       <div style={{display:"flex"}}>
                       <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Bengalore,Hyderabad</h6>
                       </div>
            </div>           
                       <h5 className="box4">Response Informatics</h5>
                   </div>
                   <div className="box">
            <div className="box7">
                   <img src={img4} alt="" className="box6"/>
                       <h3 className="box1">Site Reliability Engineer</h3>
                       <h6 className="box2">Full Time 4-7Yrs</h6>
                       <div style={{display:"flex"}}>
                       <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Bengalore</h6>
                       </div>
            </div>           
                       <h5 className="box4">Response Informatics</h5>
                   </div>
                   <div className="box">
            <div className="box7">
                   <img src={img5} alt="" className="box6"/>
                       <h3 className="box1">5year experience in C++ Development</h3>
                       <h6 className="box2">Full Time 1-4Yrs</h6>
                       <div style={{display:"flex"}}>
                       <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">India,India</h6>
                       </div>
            </div>           
                       <h5 className="box4">Response Informatics</h5>
                   </div>
                   <div className="box">
            <div className="box7">
                   <img src={img6} alt="" className="box6"/>
                       <h3 className="box1">CASA Officert</h3>
                       <h6 className="box2">Full Time 1-4Yrs</h6>
                       <div style={{display:"flex"}}>
                       <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">India,India</h6>
                       </div>
            </div>           
                       <h5 className="box4">Response Informatics</h5>
                   </div>
                   <div className="box">
                    <div></div>
            <div className="box7">
                   <img src={img7} alt="" className="box6"/>
                       <h3 className="box1">SharePoint lead</h3>
                       <h6 className="box2">Full Time 1-4Yrs</h6>
                       <div style={{display:"flex"}}>
                       <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">India,India</h6>
                       </div>
                       </div> 
                    <h5 className="box4">Response Informatics</h5>
                   </div>
                   
                   
                   </div>
                   <div style={{textAlign:"center"}}>
                <h1 className="id-text">Popular <span>Industry Domain</span></h1>
            </div>
            <div className="id-main">
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/technology.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Technology</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/education.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Education</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/hospitality.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Hospitality</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/healthcare.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Healthcare</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/engg.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Engineering and <br />Construction</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/banking.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Banking</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/financial.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Finance</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/auto.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Automotive</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/telecom.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Telecom</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/chemical.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Chemical</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/travel.svg" alt="" className="id-2"/>
                    <h3 className="id-3">Travel</h3>
                </div>
                <div style={{display:"flex"}} className="id-1">
                    <img src="https://console.truetalent.io/img/svg/retail.svg" alt="" className="id-2" />
                    <h3 className="id-3">Retail</h3>
                </div>
            </div>
            <div className="foot-main">
                <footer>
                   <div className="foot-first">
                   <a href="" className="foot-1">Home</a>
                        <a href="" className="foot-1">About Us</a>
                        <a href="" className="foot-1">Contact Us</a>
                        <a href="/giveaway" className="foot-1">Giveaway</a>
                        <a href="" className="foot-1">Blog</a>
                        <a href="" className="foot-1">TermsofUse&PrivacyPolicy</a>
                   </div>
                    <div style={{display:"flex"}}>
                        <p className="foot-2">All rights reserved@2023FindProTechnologySolutionsPvt.Ltd</p>
                        <p className="foot-3">StayConnected<CiFacebook className="foot-4"></CiFacebook><AiOutlineLinkedin className="foot-4"></AiOutlineLinkedin><CiTwitter className="foot-4"></CiTwitter><AiOutlineInstagram className="foot-4"></AiOutlineInstagram><AiOutlineYoutube className="foot-4"></AiOutlineYoutube></p>
                    </div>
                </footer>

            </div>
            </div>
           
            
            
    )
    }
}
         
export default App


