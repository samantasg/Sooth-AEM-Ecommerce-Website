import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Product(props) {
    return (
        <div className="product">
            <div className="product-bg-img"></div>
            <div className="product-stamp">
                <p>New!</p>
            </div>
            <div className="product-info">
            <p>{props.name}</p>
            <p>{props.info}</p>
            <p>{props.price}</p>
            <button> <FontAwesomeIcon color='#2E2E22' icon={faShoppingCart} style={{marginRight: 12}} ></FontAwesomeIcon>Add to cart </button>
            </div>
        </div>
    );
}

export default Product;