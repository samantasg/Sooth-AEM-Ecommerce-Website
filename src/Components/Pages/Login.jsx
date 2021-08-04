import React from 'react';
import Input from '../Input/Input';
import { BlueButton } from "../Button/Button";
import { BodyText5 } from '../BodyText/BodyText';

function Login() {
    return (
        <div>
            <BodyText5>LOGIN</BodyText5>
            <Input defaultValue="Email Address" type="email"></Input>
            <Input defaultValue="Password" type="email"></Input>
            <BlueButton>Continue</BlueButton>
        </div>
    )
}

export default Login;
