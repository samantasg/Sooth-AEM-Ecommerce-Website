import React from 'react';
import Hero from '../Hero/Hero';
import ShopMore from '../ShopMore/ShopMore';
import Section from '../Section/Section';
import Image3 from '../../assets/person-in-white-long-sleeve-shirt.png';
import Image4 from '../../assets/human-hand-and-five-leaves.png';
import Layout from '../Layout';

function About() {
  return (
    <Layout>
      <Hero name="Our mission is a healthier you" headingColor="red"></Hero>
      <Section bgColor="#EEF3F4">
        <ShopMore
          background={Image3}
          flexDirection="row-reverse"
          margin={125}
          title="All Natural Ingredients."
          info="A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"
        ></ShopMore>
      </Section>
      <Section bgColor="#A67744">
        <ShopMore
          background={Image4}
          title="Clean products that deliver better solutions"
          info="A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"
        ></ShopMore>
      </Section>
    </Layout>
  );
}

export default About;
