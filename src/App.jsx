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
             <h1>Get the <span>Right Job</span> You Deserve</h1>
            <p>Your next carrer move starts here</p>
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
                <input type="text" placeholder="Skill/Job roles"/>
            </div>
                <div className="sear">
                <SlLocationPin></SlLocationPin>
                <input type="text" placeholder="city" className="in" />
                
                <button className="btt" ><SlMagnifier className="ic-ic"></SlMagnifier><a href="/contact" className="search">Search</a> </button>
                </div>
               
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
                <h2 className="Top-tier"><span>Trusted by </span> top-tier companies</h2>
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
            </div>
           
            
            
    )
    }
}
         
export default App


