import React from "react";

function Product(props) {
    return (
        <div className="product">
            <div className="product-bg-img"></div>
            <div className="product-stamp">
                <p>New!</p>
            </div>
            <div className="product-info">
            <p>{props.productName}</p>
            <p>All Natural Ingredients</p>
            <p>${props.productPrice}</p>
            <button>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;