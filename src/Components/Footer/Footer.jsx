import React from "react";
import { Heading3 } from "../Heading/Heading"
import BodyText from "../BodyText/BodyText";
import Input from "../Input/Input";
import { Button , BrownButton } from "../Button/Button";
import Section from "../Section/Section";

function Footer() {
	return (    
		<section className="footer">
            <div className="footer-info">
                <Heading3>Join the Sooth family</Heading3>
                <div className="line"></div>
                <BodyText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</BodyText>
                <div>
                <Input type="email" inputBorder="1px solid #956A53"></Input>
                <BrownButton>Subscribe</BrownButton>
                </div>
            </div>
            <Section bgColor="#354E57">
            <div className="footer-info-wrapper">
                <div className="footer-info-box">
                    <div className="footer-info-box-1">
                        <h1>sooth</h1>
                        <p>Explore our innovative skincare products</p>
                        <Input defaultValue="Your email..." type="email" inputColor="white" inputBackground="transparent"></Input>
                        <Button buttonColor="white" buttonBorder="1px solid white">Subscribe</Button>
                    </div>
                    <div className="footer-info-box-2">
                        <ul>
                            <li>Shop</li>
                            <li>Lorem ipsum al</li>
                            <li>Dolar at</li>
                            <li>Veraotio</li>
                            <li>Chauloe</li>
                        </ul>
                        <ul>
                            <li>About</li>
                            <li>About Us</li>
                            <li>Sooth Stories (Blog)</li>
                            <li>Contact US</li>
                            <li>Learn More</li>
                            <li>Stores</li>
                        </ul>
                        <ul>
                            <li>More</li>
                            <li>Dolar at</li>
                            <li>Lorem at al</li>
                            <li>Veraotio</li>
                        </ul>
                    </div>
                </div>
                <div className="privacy-policy">
                    <p>Sooth All Rights Reserved</p>
                    <div className="privacy-policy-terms">
                        <ul>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                        <ul>
                            <li><div className="privacy-policy-icon facebook"></div></li>
                            <li><div className="privacy-policy-icon instagram"></div></li>
                            <li><div className="privacy-policy-icon twitter"></div></li>
                            <li><div className="privacy-policy-icon youtube"></div></li>
                        </ul>
                    </div>
                </div>
            </div>
            </Section>
        </section>    
	);
}

export default Footer;