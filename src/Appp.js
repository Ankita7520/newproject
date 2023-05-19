import  App  from "../src/App";
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Contact from "./Contact";



const Appp=()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Appp