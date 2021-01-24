import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./common";
import img from '../src/images/6.jpg';
const Home = () => {
    return(
        <>
        <Common 
         name="Grow your Business" 
         imgsrc={img}       
         visit="/service"
         btname="Get Started"
        /> 
        </>
    );
};

export default Home ;