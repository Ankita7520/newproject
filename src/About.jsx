import React from "react"


const Register=()=>{
    return(
        <div>
                
            <div style={{display:"flex"}}>
            <div className="reg">
                <img src="https://truetalent.io/Assets/images/login_banner.png?1" alt="" className="cover"/>
                <div>
                   <h2 className="dream"><span>Your Dream job</span> at best locations is just a <br></br><span style={{color:"black"}} className="click">click away!</span></h2>
                </div>
                <div style={{textAlign:"center"}}>
                    <button className="learn"><span>Learn more about TrueTalent</span></button>
                </div>
            </div>
            <div className="select">
                <div>
                    <h3 style={{textAlign:"center",fontWeight:"lighter",fontSize:"x-large"}}>Select Your Profile</h3>
                </div>
                <div style={{display:"flex"}}>
                    <div className="candidate">
                       <img src="https://truetalent.io/static/media/candidate.1f92a671.svg" alt="" className="ic-ri"/>
                       <h4 className="can">I'm a candidate</h4>
                       <h6 className="can">I am here to find my next job</h6>
                    </div>
                    <div className="candidate">
                        <img src="https://truetalent.io/static/media/employer.4a450d68.svg" alt="" className="ic-ri"/>
                        <h4 className="can">I'm an employer</h4>
                        <h6 className="can">I am here to look for job<br></br> seekers</h6>
                    </div>
                </div>
            </div>
            </div>
            
            </div>
    )
}
export default Register



