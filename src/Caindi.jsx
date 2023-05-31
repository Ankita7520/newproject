import React from "react";
import { AiOutlineEye } from "react-icons/ai"

const Caindi=()=>{
    return(
        <div>
             <nav className="main">
                <div>
                <img src="https://truetalent.io/static/media/logo.e8c72fdf.svg" alt=""  className="img"/>
                </div>
                <div className="tt">
                    <a href="/" className="but" id="but" >TT Essential</a>
                    <a href="" className="but" id="butt">TT Gig</a>
                </div>
                <div className="log">
                    <a href="" className="login">Login</a>
                    <a href="" className="login" id="login">Register</a>
               </div>
               </nav>   
              <div style={{display:"flex"}}>
              <div className="reg">
                <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="cover"/>
                <div>
                   <h2 className="dream"><span>Discover curated geniuses</span> for your hiring  <br></br>need!!</h2>
                </div>
                <div style={{textAlign:"center"}}>
                    <button className="learn"><span>Learn more about TrueTalent</span></button>
                </div>
            </div>
            <div className="inp-main">
            <div>
                <h2>Create True Talent Account</h2>
            </div>
            <div>
               I am a
                <button>Candidtate</button>
                <button>Employer</button>
            </div>
            <div>
                <input type="text" placeholder="First Name" className="inp-first" style={{marginRight:"15px"}}/>
                <input type="text" placeholder="Last Name" className="inp-first"/>
            </div>
            <div>
                <input type="email" placeholder="Business Email Address" className="inp-email"/>
            </div>
            <div style={{display:"flex"}}>
                <div className="reg-pass">
                <input type="password" placeholder="Password" id="inp-pass"/><AiOutlineEye></AiOutlineEye>
                </div>
                <input type="password" placeholder="Confirm Password" id="inp-cpass"/>
            </div>
            <div style={{textAlign:"left"}}>
                <h1 className="inp-company">Company Details</h1>
            </div>
            <div>
                <input type="text" placeholder="Company Name" className="inp-comp"/>
            </div>
            <div>
                <input type="text" placeholder="Website" className="inp-web"/>
                <input type="text" placeholder="Location" className="inp-web"/>
            </div>
            <div>
                <select name="" id="" className="inp-select">
                    <option value="">Select company size</option>
                    <option value="">1-49</option>
                    <option value="">50-199</option>
                    <option value="">200-999</option>
                    <option value="">1000-4999</option>
                    <option value="">5000-above</option>
                </select>
                <select name="" id="" className="inp-select">
                    <option value="">Select industry domin</option>
                </select>
            </div>
            <div>
                <input type="checkbox" className="inp-accept"/><label htmlFor="">I accept the True Talent.io <span>Terms of Use</span> & <span>Privacy Policy</span></label>
            </div>
            <div>
            <button className="inp-create" id="inp-create">Create Account</button>
            </div>
            </div>
              </div>
        </div>
    )
}

export default Caindi