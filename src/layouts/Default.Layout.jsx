import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";

const DefaultLayout = (props) =>{
    return(
        <div>
            <Navbar/>
            <HeroCarousel/>
            {props.children}
            <div>Footer</div>
        </div>
    );
};

export default DefaultLayout;