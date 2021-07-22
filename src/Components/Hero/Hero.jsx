import React from "react";
import Button from "../Button/Button";

function Hero () {
    return(
        <div className="hero">
            <div className="hero-1">
                <button className="btn-1">New!</button>
                <h2>All Natural <span>Skin Remedies.</span></h2>
                <p>A healthier you from the inside out. We’ve sourced the <span>cleanest ingredients to create a line of clean skin care</span>treatments that leave you feeling your best</p>
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