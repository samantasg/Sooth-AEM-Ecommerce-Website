import React, {useEffect, useState} from 'react';
import Section from "../../Section/Section";
import {items} from "../../Mockups/items";
import ProductsGrid from '../../ProductsGrid/ProductsGrid';
import ShopMore from "../../ShopMore/ShopMore";
import Image from "../../../assets/curology.png";
import Products from '../../Products/Products';
import { useParams} from "react-router";
import { allCategories } from '../../Mockups/allCategories';
import Dropdown from '../../Dropdown/Dropdown';
import Hero from '../../Hero/Hero';
import bgImg from "../../../assets/cactus.png";

function ProductsDisplay() {
    const params = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const activeCategory =
        params.slug && allCategories.filter(cat => cat.categoryName === params.slug);
        setData(activeCategory);
    }, [params]);

    return (
        <>
        <Section bgColor="#F6F6F8" bgImg={bgImg}><Hero name="All Natural Psoriasis"/></Section>
        <Section bgColor="#EEF3F4">
        <div className="dropdown-menu-container"><Dropdown></Dropdown></div>    
        <div className="products-display">
            <aside>
                <ul className="menu-navigation">{allCategories.map(cat => (
                    <li>
                        <span>{cat.categoryName}</span>
                            <ul> {cat.subcategories?.map(subcat => (
                            <li>{subcat}</li>))}
                    </ul>
                    </li>
                ))}
                </ul>
            </aside>    
            <ProductsGrid productList={allCategories}></ProductsGrid>
        </div>
        </Section>
        <Section bgColor="#547665"><ShopMore background={Image} title="Clean products that deliver better solutions" info="A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best"></ShopMore></Section>
        <Products listName="Related Products" productList={allCategories} isPopular={true} isTopRated={true} isRecommended={false}></Products>
        </>
    )
}

export default ProductsDisplay;
