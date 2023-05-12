import React, { Component } from "react";
import "./Comp.css";
import { SlLocationPin,SlMagnifier } from "react-icons/sl";
import { Switch } from "antd"


class App extends Component{
    constructor(){
      super()
      this.state={
        colr:"#14bc9a"
     }
         this.state={
            colour:"white",
            name:true

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
                
                <button className="btt"><SlMagnifier></SlMagnifier>Search</button>
                </div>
               
                </div>
            </div>
            <div className="second">
                <div className="bd1">
                    <h3>Filter Search</h3>
                    <a href="">Clear All</a>
                </div>
                <div>
                    <p className="dca">Location</p>
                </div>
                <div>
                    <input type="text" placeholder="city" className="inp"/><br></br>
                    <div className="abc">
                    <input type="checkbox" className="cba" id="city1"/><label htmlFor="city1">Chennai,TamilNadu</label><br></br>
                    <input type="checkbox" className="cba" id="city2"/><label htmlFor="city2">Mumbai,Mumbai</label><br></br>
                    <input type="checkbox" className="cba" id="city3"/><label htmlFor="city3">Banglore,Karnataka</label><br></br>
                    <input type="checkbox" className="cba" id="city4"/><label htmlFor="city4">Kolkata,West Bengal</label><br></br>
                    <input type="checkbox" className="cba" id="city5"/><label htmlFor="city5">Bhubaneswar,Odisha</label><br></br>
                    <input type="checkbox" className="cba" id="city6"/><label htmlFor="city6">New Delhi,Delhi</label><br></br>
                    <input type="checkbox" className="cba" id="city7"/><label htmlFor="city7">Pune,Maharastra</label><br></br>
                    <input type="checkbox" className="cba" id="city8"/><label htmlFor="city8">Indore,Madhaya Pradhesh</label><br></br>
                    <input type="checkbox" className="cba" id="city9"/><label htmlFor="city9">Ahamadabad,Gujarat</label><br></br>
                    <h6 className="dca">+7154More</h6>
                    </div>

                </div>
                <div>
                    <p>Salary</p>
                    <input type="checkbox" className="cba" id="sal1"/><label htmlFor="sal1">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal2"/><label htmlFor="sal2">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal3"/><label htmlFor="sal3">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal4"/><label htmlFor="sal4">Rs 2Lac - 5Lac</label><br></br>
                    <input type="checkbox" className="cba" id="sal5"/><label htmlFor="sal5">Rs 2Lac - 5Lac</label><br></br>
                </div>
                <div>
                    <p>Preferred Job Type</p>
                    <input type="checkbox" className="cba" id="pjt1"/><label htmlFor="pjt1">Full Time</label><br></br>
                    <input type="checkbox" className="cba" id="pjt2"/><label htmlFor="pjt2">Direct Contract</label><br></br>
                    <input type="checkbox" className="cba" id="pjt3"/><label htmlFor="pjt3">Contract-to-Hire</label><br></br>

                </div>
                <div>
                    <p>Joining Preferences</p>
                    <input type="checkbox" className="cba" id="jp1"/><label htmlFor="jp1">Immediate</label><br></br>
                    <input type="checkbox" className="cba" id="jp2"/><label htmlFor="jp2">2 Weeks</label><br></br>
                    <input type="checkbox" className="cba" id="jp3"/><label htmlFor="jp3">1 Months</label><br></br>
                    <input type="checkbox" className="cba" id="jp4"/><label htmlFor="jp4">2 Months</label><br></br>
                </div>
                <div>
                    <p>Work Authorization</p>
                    <input type="checkbox" className="cba" id="wa1"/><label htmlFor="wa1">Required</label><br></br>
                    <input type="checkbox" className="cba" id="wa2"/><label htmlFor="wa2">Not Required</label><br></br>
                </div>
                <div>
                    <p>Job Durations</p>
                    <input type="checkbox" className="cba" id="jd1"/><label htmlFor="jd1">Contract-3 Months</label><br></br>
                    <input type="checkbox" className="cba" id="jd2"/><label htmlFor="jd2">Contract-6 Months</label><br></br>
                    <input type="checkbox" className="cba" id="jd3"/><label htmlFor="jd3">Contract-1 Year</label><br></br>
                    <input type="checkbox" className="cba" id="jd4"/><label htmlFor="jd4">Permanent</label><br></br>
                </div>
                <div>
                    <p>Salary Types</p>
                    <input type="checkbox" className="cba" id="st1"/><label htmlFor="st1">Annual</label><br></br>
                    <input type="checkbox" className="cba" id="st2"/><label htmlFor="st2">Monthly</label><br></br>
                </div>
                <div>
                    <p>Industry Domains</p>
                    <input type="text" placeholder="Entry Industry Domain" className="inp"/>
                    <input type="checkbox" className="cba" id="id1"/><label htmlFor="id1">Technology</label><br></br>
                    <input type="checkbox" className="cba" id="id2"/><label htmlFor="id2">Education</label><br></br>
                    <input type="checkbox" className="cba" id="id3"/><label htmlFor="id3">Hospitality</label><br></br>
                    <input type="checkbox" className="cba" id="id4"/><label htmlFor="id4">Healthcare</label><br></br>
                    <input type="checkbox" className="cba" id="id5"/><label htmlFor="id5">Engineering and Construction</label><br></br>
                    <input type="checkbox" className="cba" id="id6"/><label htmlFor="id6">Banking</label><br></br>
                    <input type="checkbox" className="cba" id="id7"/><label htmlFor="id7">Finance</label><br></br>
                    <input type="checkbox" className="cba" id="id8"/><label htmlFor="id8">Automotive</label><br></br>
                    <input type="checkbox" className="cba" id="id9"/><label htmlFor="id9">Telecom</label><br></br>
                    <input type="checkbox" className="cba" id="id10"/><label htmlFor="id10">Chemical</label><br></br>
                </div>
                <div>
                    <p>Experience</p>
                    <div class="slidecontainer"></div>
                    <input type="range" className="inp" id="exp" style={{Color:"green"}}/>
                </div>
                <div>
                <p>Travel Required <Switch onClick={this.togglehandler}/>{this.state.name?<h1></h1>:<input type="number" placeholder=" Travel Percentage" className="ip" />}</p>
                <p>Equal Opportunity<br/>Employer <Switch/></p>
                    </div>
                 <div>
                    <p>Jobs posted Between</p>
                    <div>
                        <input type="date" name="" id="inp" className="inp"/>
                        <input type="date" name="" id="" className="inp"/>
                    </div>
                 </div>
                 
            </div>
            </div>
    )
    }
}
            
export default App


