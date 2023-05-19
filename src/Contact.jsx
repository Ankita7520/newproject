import React,{Component} from "react";
import "./Comp.css";
import { SlLocationPin,SlMagnifier } from "react-icons/sl";
import { Switch } from "antd"
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css'
import Range from "./Home";
import Rangeslider from "./Rangeslider/Index";
import  Calandar from "./Calandar/Index";
import img1 from "./images/geninvo.jpg"
import img2 from "./images/acuvate.jpg"
import img3 from "./images/RI.png"
import img4 from "./images/Np.png"
import img5 from "./images/TW.jpg"
import img6 from "./images/RI.png"
import img7 from "./images/RI.png"
import AppsIcon from '@mui/icons-material/Apps';


class Contact extends Component {

    constructor(){
        super()
        this.state={
            name:true

         }
    }
    togglehandler=()=>{
        if(this.state.name){
           this.setState({name:false})
        }
        else{
           this.setState({name:true})
        }
   } 
    
    render () {
    return( <div className="second" style={{fontFamily:"system-ui,sans-serif"}}>
    <div className="bd1">
        <h3 className="fs">Filter Search</h3>
        <a href="" className="all">Clear All</a>
    </div>            
    <div>
        <p className="dca">Preferred Job Location</p>
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
        <h6 className="dc">+7154More</h6>
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
        <h6 className="dc">+13More</h6>
    </div>
    <div>
        <p>Experience</p>

        <Rangeslider/>
       

    </div>
    <div>
    <p>Travel Required <Switch onClick={this.togglehandler}/>{this.state.name?<h1></h1>:<input type="number" placeholder=" Travel Percentage" className="ip" />}</p>
    <p>Equal Opportunity<br/>Employerss <Switch/></p>
        </div>
     <div>
        <p>Jobs posted Betweens</p>
        <div>
            {/* <input type="date" name="" id="inp" className="inp"/>
            <input type="date" name="" id="" className="inp"/> */}
            <Calandar />

        </div>
     </div>
     <div>
           
           <h2 className="result">Search Result</h2>
           </div>
     <div className="Box4">
    
     <div className="sort">
           <p>Sort by:</p>
           <h4 className="new">Newest first</h4>
          <AppsIcon className="App1`+"></AppsIcon>
       </div>
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
                <div className="box">
                <img src={img6} alt="" className="box6"/>
                    <h3 className="box1">CASA Officert</h3>
                    <h6 className="box2">Full Time 1-4Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">India,India</h6>
                    </div>
                    <h5 className="box4">Response Informatics</h5>
                </div>
                <div className="box">
                <img src={img7} alt="" className="box6"/>
                    <h3 className="box1">CEP Personal Banker</h3>
                    <h6 className="box2">Full Time 2-5Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Delhi, Delhi,Hyderabad, Telangana,Mumbai..</h6>
                    </div>
                    <h5 className="box4">Response Informatics</h5>
                </div>
                <div className="box">
                <img src={img7} alt="" className="box6"/>
                    <h3 className="box1">CEP Personal Banker</h3>
                    <h6 className="box2">Full Time 2-5Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">Delhi, Delhi,Hyderabad, Telangana,Mumbai..</h6>
                    </div>
                    <h5 className="box4">Response Informatics</h5>
                </div>
                <div className="box">
                <img src={img6} alt="" className="box6"/>
                    <h3 className="box1">CASA Officert</h3>
                    <h6 className="box2">Full Time 1-4Yrs</h6>
                    <div style={{display:"flex"}}>
                    <SlLocationPin className="box5"></SlLocationPin><h6 className="box3">India,India</h6>
                    </div>
                    <h5 className="box4">Response Informatics</h5>
                </div>
            </div>
            </div>
     </div>
)
    }
    }
   export default Contact