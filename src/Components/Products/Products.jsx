import React from "react";
import Product from "../Product/Product";

function Products () {
    return(
        <section className="products">
            <div className="products-text-box">
                <h2>Solutions for all skin</h2>
                <p>Explore our innovative skincare products</p>
            </div>
            <div className="products-section">
                <div className="products-section-text">
                    <p>Most Popular</p>
                    <p>Shop all products</p>
                </div>
                <div className="products-section-box">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </div>
        </section>
    );
}

export default Products;