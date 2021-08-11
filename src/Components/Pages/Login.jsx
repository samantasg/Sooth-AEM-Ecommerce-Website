import React from 'react';
import Input from '../Input/Input';
import { BlueButton } from "../Button/Button";
import { BodyText , BodyText5 } from '../BodyText/BodyText';
import Section from "../../Components/Section/Section";

function Login() {
    return (
        <Section bgColor="#e0e4e7">
        <div style={{paddingTop: 80, paddingBottom: 150, display: "flex" , flexDirection: "column",
        alignItems: "center"}}>
            <BodyText5>LOGIN</BodyText5>
            <Input style={{borderRadius: "3px" , marginTop: 40}} defaultValue="Email Address" type="email" inputPadding={"15px 145px 15px 23px"}></Input>
            <Input style={{borderRadius: "3px", marginTop: 10}} defaultValue="Password" type="email" inputPadding={"15px 145px 15px 23px"}></Input>
            <BlueButton style={{borderRadius: "3px", marginTop: 36}} buttonPadding={"18px 134px"}>Continue</BlueButton>
            <div style={{paddingTop: 15}}>
            <BodyText><a href='/' style={{textDecoration: "underline"}}>Forgot your password?</a></BodyText>
            <BodyText>Don't have an account? <a href='/' style={{textDecoration: "underline"}}>Register now.</a></BodyText>
            </div>
        </div>
        </Section>
    )
}

export default Login;
