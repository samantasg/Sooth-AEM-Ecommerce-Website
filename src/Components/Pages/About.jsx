import React from 'react';
import Hero from '../Hero/Hero';
import ShopMore from '../ShopMore/ShopMore';
import Section from '../Section/Section';
import Image3 from "../../assets/person-in-white-long-sleeve-shirt.png";
import Image4 from "../../assets/human-hand-and-five-leaves.png";
import bgImg from "../../assets/cactus.png"
import InstagramPosts from "../InstagramPosts/InstagramPosts";
import RecentNews from "../RecentNews/RecentNews";
import Heading from '../Heading/Heading';
import { BodyText5 } from '../BodyText/BodyText';

function About() {
    return (
        <div>
            <Section bgColor="#EEF3F4" bgImg={bgImg}><Hero name="Our mission is a healthier you"></Hero></Section>
            <Section><div style={{height: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Heading>The cleanest ingredients on earth</Heading>
                <BodyText5 style={{width: 874}}>Our mission back then was simple, and it remains the same today. When in doubt, turn to food first. Nothing works better. When you can’t, take our supplements.</BodyText5>
                </div></Section>
            <Section bgColor="#EEF3F4"><ShopMore background={Image3} flexDirection="row-reverse" margin={125} title="All Natural Ingredients." info="A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"></ShopMore></Section>
            <Section bgColor="#A67744"><ShopMore headingColor="red" background={Image4} title="Clean products that deliver better solutions" info="A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"></ShopMore></Section>
            <Section bgColor="#EEF3F4">
               <InstagramPosts></InstagramPosts>
               <RecentNews></RecentNews>
            </Section>
        </div>
    )
}

export default About;
