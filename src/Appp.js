import  App  from "../src/App";
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Contact from "./Contact";
import Register from "./About";
import Log from "./Login";
import Build from "./Build";
import Candidate from "./Candidate";
import Caindi from "./Caindi";
import Add from "./Add"
import Ttgig from "./Ttgig";
import Giveaway from "./Giveaway";



const Appp=()=>{
    return(
        <div style={{width:"1450px"}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<App/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/log" element={<Log></Log>}></Route>
                    <Route path="/candidate" element={<Candidate></Candidate>}></Route>
                    <Route path="/caindi" element={<Caindi/>}></Route>
                    <Route path="/" element={<Add/>}></Route>
                    <Route path="/Ttgig" element={<Ttgig></Ttgig>}></Route>
                    <Route path="/giveaway" element={<Giveaway></Giveaway>}></Route>
                    

                </Routes>
            </BrowserRouter>
            {/* <Build></Build> */}
        </div>
    )
}

export default Appp