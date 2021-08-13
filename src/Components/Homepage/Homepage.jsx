import React from "react";
import Hero from "../Hero/Hero";
import Banner2 from "../Banner2/Banner2";
import Products from "../Products/Products";
import ShopMore from "../ShopMore/ShopMore";
import Ingredients from "../Ingredients/Ingredients";
import StoreInfo from "../StoreInfo/StoreInfo";
import {items} from "../Mockups/items";
import {ingredients} from "../Mockups/ingredients";
import Section from "../Section/Section";
import Image from "../../assets/man-in-blue-top.png";
import Image2 from "../../assets/sincerely-media.png";
import Layout from "../Layout/Layout";

function Homepage(){
    return (
		<>
			      <Hero name="All Natural Skin Remedies."/>
            <Banner2 />
            <Products listName="Most Popular" productList={items} isPopular></Products>
            <Section bgColor="#547665"><ShopMore background={Image} title="Clean products that deliver better solutions" info="A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"></ShopMore></Section>
            <Products listName="Top rated" productList={items} isPopular={false} isTopRated={true} isRecommended={false}></Products>
            <Section bgColor="#C6B9B6"><ShopMore background={Image2} flexDirection="row-reverse" margin={125} title="All Natural Ingredients." info="A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"></ShopMore></Section>
            <Products listName="Recommended" productList={items} isPopular={false} isTopRated={false} isRecommended={true}></Products>
            <Section bgColor="#F7F7F7"><Ingredients ingredientsList={ingredients}></Ingredients></Section>
            <Section bgColor="#EEF3F4"><StoreInfo></StoreInfo></Section>
		</>
    );
}

export default Homepage;