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
import img1 from "./images/geninvo.jpg"
import img2 from "./images/acuvate.jpg"
import img3 from "./images/RI.png"
import img4 from "./images/Np.png"
import img5 from "./images/TW.jpg"
import img6 from "./images/RI.png"
import img7 from "./images/RI.png"
import Contact from "./Contact"






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
            <h1>Get the <span>Right Job</span> You Deserve</h1>
            <p>Your next carrer move starts here</p>
            
            
            </div>
            <div className="rht">
            <div className="butn">
                <button className="btn" id="btn"onClick={this.colorhandler} style={{backgroundColor:this.state.colr}}>Search Jobs</button>
                <button className="btn" onClick={this.handleclick} style={{backgroundColor:this.state.colour}}>Search Candidates</button>
            </div>
            <div className="input">
            <div className="skill">
            <SlMagnifier></SlMagnifier>
                <input type="text" placeholder="Skill/Job roles"/>
            </div>
                <div className="sear">
                <SlLocationPin></SlLocationPin>
                <input type="text" placeholder="city" className="in" />
                
                <button className="btt" onClick={this.secondhandler}><SlMagnifier></SlMagnifier>Search </button>
                </div>
               
                </div>
            </div>
            <div style={{display:"flex"}}>
            {
              this.state.second?<span></span>:<Contact/>
            }
           
                 
      
           
   
             <div className="Box4">
            <div className="boxx" style={{display:"flex"}}>
                <div className="box">
                <img src={img1} alt="" className="box6"/>
                    <h3 className="box1">Human Resources Manager</h3>
                    <h6 className="box2">Full Time 4-6Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Mohali,Punjab</h6>
                    </div>
                    <h5 className="box4">Genlnvo technologies pvt</h5>
                </div>
                 <div className="box">
                <img src={img2} alt="" className="box6"/>
                    <h3 className="box1">SharePoint lead</h3>
                    <h6 className="box2">Full Time 6-15Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Hyderabad,Telengana</h6>
                    </div>
                    <h5 className="box4">Acuvate software pvt ltd</h5>
                </div>
                <div className="box">
                <img src={img3} alt="" className="box6"/>
                    <h3 className="box1">CASA Officer</h3>
                    <h6 className="box2">Full Time 0-1Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">India,India</h6>
                    </div>
                    <h5 className="box4">Response Informatics</h5>
                </div>
                <div className="box">
                <img src={img4} alt="" className="box6"/>
                    <h3 className="box1">Training Coordinator</h3>
                    <h6 className="box2">Full Time 1.5-2Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Banglore,Karnataka</h6>
                    </div>
                    <h5 className="box4">NexionPro Services LLP</h5>
                </div>
                <div className="box">
                <img src={img5} alt="" className="box6"/>
                    <h3 className="box1">IT Application Delivery Consultant</h3>
                    <h6 className="box2">Full Time 8-15Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Hyderabad,Telengana</h6>
                    </div>
                    <h5 className="box4">Tekwissen software pvt ltd</h5>
                </div>
                <div className="box9">
                <img src={img6} alt="" className="box6"/>
                    <h3 className="box1">CASA Officert</h3>
                    <h6 className="box2">Full Time 1-4Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">India,India</h6>
                    </div>
                    <h5 className="box4">Response Informatics</h5>
                </div>
                <div className="box10">
                <img src={img7} alt="" className="box6"/>
                    <h3 className="box1">CEP Personal Banker</h3>
                    <h6 className="box2">Full Time 2-5Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Delhi, Delhi,Hyderabad, Telangana,Mumbai..</h6>
                    </div>
                    <h5 className="box4">Response Informatics</h5>
                </div>
            </div>
            </div>
            <div>
            </div> 
            
                <img src={Images} alt="passphoto.jpg" className="image"/>
          
            </div>
            </div>
           
            
            
    )
    }
}
         
export default App


