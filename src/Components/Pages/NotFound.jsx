import React from 'react';
import Heading from '../Heading/Heading';
import Section from '../Section/Section';

function NotFound() {
    return (
        <Section bgColor="#e0e4e7">
            <div style={{paddingTop: 80, paddingBottom: 80, display: "flex" , flexDirection: "column", alignItems: "center"}}>
            <Heading>404</Heading>
            </div>
        </Section>
    )
}

export default NotFound;
