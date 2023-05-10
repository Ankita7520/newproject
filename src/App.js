import React, { Component } from "react";
import "./Comp.css";
import { SlLocationPin,SlMagnifier } from "react-icons/sl";


class App extends Component{
    constructor(){
      super()
      this.state={
        colr:"#14bc9a"
     }
         this.state={
            colour:"white"
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
                    </div>

                </div>
            </div>
        </div>
        
    )
}
}


export default App