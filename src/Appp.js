import  App  from "../src/App";
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Contact from "./Contact";
import Register from "./About";
import Log from "./Login";
import Build from "./Build";



const Appp=()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/log" element={<Log></Log>}></Route>
                    
                </Routes>
            </BrowserRouter>
            {/* <Build></Build> */}
        </div>
    )
}

export default Appp