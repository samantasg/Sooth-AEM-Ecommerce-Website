import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { BodyText2 } from "../BodyText/BodyText";
import Section from "../Section/Section";
import bgImg from "../../assets/updated_Header.png";

function Hero (props) {
    return(
        <Section>
                <div className="hero">
                    <div className="hero-1">
                    <button className="btn-1">New!</button>
                    <Heading>{props.name}</Heading>
                    <BodyText2>A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best</BodyText2>
                    <Button>Shop products</Button>
                    </div>
                </div>
        </Section>
    );
}

export default Hero;