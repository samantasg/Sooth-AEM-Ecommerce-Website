import React from "react";

function Product() {
    return (
        <div className="product">
            <div className="product-bg-img"></div>
            <div className="product-stamp">
                <p>New!</p>
            </div>
            <div className="product-info">
            <p>Acne Cream</p>
            <p>All Natural Ingredients</p>
            <p>$24.99</p>
            <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;