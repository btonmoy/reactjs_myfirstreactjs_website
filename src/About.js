import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./common";
import web from '../src/images/3.jpg';

const About = () => {
    return(
        <>
         <Common 
         name="Welcome to About Page"   
         imgsrc={web}           
         visit="/contact"
         btname="Contact Now"
         /> 
        </>
    );
};

export default About ;