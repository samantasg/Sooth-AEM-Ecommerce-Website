import React from 'react'
import Section from "../../Section/Section";
import MenuNavigation from "../../MenuNavigation/MenuNavigation";
import {menuNavigation} from "../../Mockups/navigation";
import {items} from "../../Mockups/items";
import ProductsGrid from '../../ProductsGrid/ProductsGrid';

function ProductsDisplay() {
    return (
        <Section bgColor="#EEF3F4">
        <div className="products-display"> 
            <div className="menu-navigation">
            <MenuNavigation category="Acne" menuNavigationList={menuNavigation}></MenuNavigation>
            <MenuNavigation category="Sun" menuNavigationList={menuNavigation}></MenuNavigation>
            <MenuNavigation category="Eczema" menuNavigationList={menuNavigation}></MenuNavigation>
            <MenuNavigation category="Psioriasis" menuNavigationList={menuNavigation}></MenuNavigation>
            </div>
            {/* <div className="products-component-grid">
                <div className="one"><Product height={581}></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
                <div><Product></Product></div>
            </div> */}
        <ProductsGrid productList={items}></ProductsGrid>    
        </div>
        </Section>
    )
}

export default ProductsDisplay;
