import React, { useEffect, useState } from "react";

import  {useNavigate} from "react-router-dom"



const Add=()=>{


   
    const history = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          history('/home'); // Replace '/another-page' with the desired route
        }, 2000); // Delay of 2000 milliseconds = 2 seconds
    
        // Clean up the timeout on component unmount
        return () => clearTimeout(timeoutId);
      }, [history]);
    return(
        <div className="add-main">
            <div className="add-close">
                X
            </div>
            <div className="add-boder">

            </div>
            <div>
                <img src="https://truetalent.io/static/media/giveaway-banner.8511ff72.png" alt="" className="add-img"/>
            </div>
            <div style={{display:"flex"}} className="add-butt">
                <button className="add-btt" id="add-btt">Register now</button>
                <button className="add-btt" id="add-butt">Rules</button>
            </div>
        </div>
    )
}


export default Add