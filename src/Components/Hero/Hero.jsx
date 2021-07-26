import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { BodyText2 } from "../BodyText/BodyText";

function Hero () {
    return(
        <div className="hero">
            <div className="hero-1">
                <button className="btn-1">New!</button>
                <Heading>All Natural Skin Remedies.</Heading>
                <BodyText2>A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</BodyText2>
                <Button>Shop products</Button>
            </div>
            <div className="hero-2">
                <div className="img-1"></div>
                <div className="img-2"></div>
            </div>
        </div>
    );
}

export default Hero;